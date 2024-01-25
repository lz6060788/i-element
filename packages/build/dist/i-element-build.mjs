import { mergeConfig } from "vite";
import { readFile, writeFile, cp } from "node:fs/promises";
import { resolve, relative, sep, join, basename } from "node:path";
import inspect from "vite-plugin-inspect";
import { visualizer } from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";
import replace from "@rollup/plugin-replace";
import { statSync } from "node:fs";
import { getParsedCommandLineOfConfigFile, sys } from "typescript";
function splitVar(varName) {
  const reg = /[A-Z]{2,}(?=[A-Z][a-z]+|[0-9]|[^a-zA-Z0-9])|[A-Z]?[a-z]+|[A-Z]|[0-9]/g;
  return varName.match(reg) || [];
}
function kebabCase(varName) {
  const nameArr = splitVar(varName);
  return nameArr.map((item) => item.toLowerCase()).join("-");
}
function camelCase(varName, isFirstWordUpperCase = false) {
  const nameArr = splitVar(varName);
  return nameArr.map((item, index) => {
    if (index === 0 && !isFirstWordUpperCase) {
      return item.toLowerCase();
    }
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  }).join("");
}
function isObjectLike(val) {
  return val !== null && typeof val === "object";
}
function isFunction(val) {
  return typeof val === "function";
}
async function readJsonFile(filePath) {
  const buffer = await readFile(filePath, "utf-8");
  return JSON.parse(buffer);
}
async function writeJsonFile(filePath, ...rests) {
  await writeFile(filePath, JSON.stringify(...rests), "utf-8");
}
function normalizePath(path) {
  if (sep === "/") {
    return path;
  }
  return path.replace(new RegExp(`\\${sep}`, "g"), "/");
}
function usePathAbs(basePath) {
  return (...paths) => normalizePath(resolve(basePath, ...paths));
}
const absCwd = usePathAbs(process.cwd());
function usePathRel(basePath) {
  return (path, ignoreLocalSignal = true) => {
    const result = normalizePath(relative(basePath, path));
    if (result.slice(0, 2) === "..") {
      return result;
    }
    return ignoreLocalSignal ? result : `./${result}`;
  };
}
const relCwd = usePathRel(process.cwd());
function defaultOptions() {
  return {
    entry: "src/index.ts",
    outDir: "dist",
    fileName: "",
    mode: "package",
    dts: "",
    exports: ".",
    onSetPkg: () => {
    },
    pluginVue: false,
    pluginInspect: false,
    pluginVisualizer: false,
    pluginReplace: false
  };
}
function getOptions(options) {
  return {
    ...defaultOptions(),
    ...options
  };
}
function getOutFileName(fileName, format, buildMode) {
  const formatName = format;
  const ext = formatName === "es" ? ".mjs" : ".umd.js";
  let tail;
  if (buildMode === "full") {
    tail = ".full.js";
  } else if (buildMode === "full-min") {
    tail = ".full.min.js";
  } else {
    tail = ext;
  }
  return `${fileName}${tail}`;
}
function getLib(packageJson = {}, options = {}) {
  const {
    entry,
    outDir,
    mode,
    fileName
  } = getOptions(options);
  const finalName = fileName || kebabCase(packageJson.name || "");
  const libOptions = {
    entry,
    // 全量构建只生产 umd 产物
    formats: mode === "package" ? ["es", "umd"] : ["umd"],
    name: camelCase(finalName),
    fileName: (format) => {
      const formatName = format;
      return getOutFileName(finalName, formatName, mode);
    }
  };
  return {
    lib: libOptions,
    // full-min 模式下全量构建，需要混淆代码，生成 sourcemap 文件，且不清空产物目录
    minify: mode === "full-min" ? "esbuild" : false,
    sourcemap: mode === "full-min",
    emptyOutDir: mode === "package",
    outDir
  };
}
function resolveEntry(entry) {
  const absEntry = absCwd(entry);
  const isEntryFile = statSync(absEntry).isFile();
  const absEntryFolder = isEntryFile ? join(absEntry, "..") : absEntry;
  return {
    abs: absEntry,
    rel: relCwd(absEntryFolder),
    isFile: isEntryFile
  };
}
function getDtsPath(options = {}) {
  const {
    entry,
    outDir
  } = getOptions(options);
  const { rel, isFile } = resolveEntry(entry);
  const entryFileName = isFile ? basename(entry).replace(/\..*$/, ".d.ts") : "index.d.ts";
  return relCwd(
    absCwd(outDir, rel, entryFileName),
    false
  );
}
function pluginSetPackageJson(packageJson = {}, options = {}) {
  const finalOptions = getOptions(options);
  const {
    onSetPkg,
    mode,
    fileName,
    outDir,
    exports
  } = finalOptions;
  if (mode !== "package") {
    return null;
  }
  const finalName = fileName || kebabCase(packageJson.name || "");
  return {
    name: "set-package-json",
    // 只在构建模式下执行
    apply: "build",
    async closeBundle() {
      const packageJsonObj = packageJson || {};
      const exportsData = {};
      const umd = relCwd(
        absCwd(outDir, getOutFileName(finalName, "umd", mode)),
        false
      );
      exportsData.require = umd;
      if (exports === ".") {
        packageJsonObj.main = umd;
      }
      const es = relCwd(
        absCwd(outDir, getOutFileName(finalName, "es", mode)),
        false
      );
      exportsData.import = es;
      if (exports === ".") {
        packageJsonObj.module = es;
      }
      const dtsEntry = getDtsPath(options);
      exportsData.types = dtsEntry;
      if (exports === ".") {
        packageJsonObj.types = dtsEntry;
      }
      if (!isObjectLike(packageJsonObj.exports)) {
        packageJsonObj.exports = {};
      }
      Object.assign(packageJsonObj.exports, {
        [exports]: exportsData,
        // 默认暴露的出口
        "./*": "./*"
      });
      if (isFunction(onSetPkg)) {
        await onSetPkg(packageJsonObj, finalOptions);
      }
      await writeJsonFile(absCwd("package.json"), packageJsonObj, null, 2);
    }
  };
}
function pluginMoveDts(options = {}) {
  const {
    entry,
    outDir,
    mode,
    dts
  } = getOptions(options);
  if (mode !== "package" || !dts) {
    return null;
  }
  const tsconfigs = getParsedCommandLineOfConfigFile(dts, {}, sys);
  if (!tsconfigs) {
    throw new Error(`Could not find tsconfig file: ${dts}`);
  }
  const { rootDir, outDir: tsOutDir } = tsconfigs.options;
  if (!rootDir || !tsOutDir) {
    throw new Error(`Could not find rootDir or outDir in tsconfig file: ${dts}`);
  }
  const relRoot = usePathRel(rootDir);
  const absRoot = usePathAbs(rootDir);
  const relPackagePath = relRoot(process.cwd());
  const { rel: relEntryPath } = resolveEntry(entry);
  return {
    name: "move-dts",
    apply: "build",
    async closeBundle() {
      const source = absRoot(tsOutDir, relPackagePath, relEntryPath);
      const target = absCwd(outDir, relEntryPath);
      try {
        await cp(source, target, {
          force: true,
          recursive: true
        });
      } catch (err) {
        console.log(`[${relPackagePath}]: failed to move dts!`);
        console.error(err);
      }
    }
  };
}
function getPresetPlugin(options, key, plugin, defaultOptions2) {
  const value = options[key];
  if (!value) {
    return null;
  }
  return plugin(
    isObjectLike(value) ? value : defaultOptions2
  );
}
function getPresetPlugins(options = {}) {
  const result = [];
  result.push(
    getPresetPlugin(options, "pluginVue", vue),
    getPresetPlugin(options, "pluginInspect", inspect),
    getPresetPlugin(options, "pluginVisualizer", visualizer),
    getPresetPlugin(options, "pluginReplace", replace)
  );
  return result;
}
function getPlugins(packageJson = {}, options = {}) {
  const { mode, dts } = options;
  const result = getPresetPlugins(options);
  if (mode === "package") {
    result.push(pluginSetPackageJson(packageJson, options));
    if (dts) {
      result.push(pluginMoveDts(options));
    }
  }
  return result;
}
function getExternal(packageJson = {}, options = {}) {
  const {
    dependencies = {},
    peerDependencies = {}
  } = packageJson;
  const { mode } = getOptions(options);
  const defaultExternal = [
    // 将所有 node 原生模块都进行外部化处理
    /^node:.*/
  ];
  const toReg = (item) => new RegExp(`^${item}`);
  return defaultExternal.concat(
    Object.keys(peerDependencies).map(toReg),
    // 全量构建时，依赖不进行外部化，一并打包进来
    mode === "package" ? Object.keys(dependencies).map(toReg) : []
  );
}
async function generateConfig(customOptions, viteConfig) {
  const options = getOptions(customOptions);
  const packageJson = await readJsonFile(absCwd("package.json"));
  const libOptions = getLib(packageJson, options);
  const external = getExternal(packageJson, options);
  const plugins = getPlugins(packageJson, options);
  const result = {
    plugins,
    build: {
      ...libOptions,
      rollupOptions: {
        external
      }
    }
  };
  return mergeConfig(result, viteConfig || {});
}
export {
  absCwd,
  camelCase,
  defaultOptions,
  generateConfig,
  getExternal,
  getLib,
  getOptions,
  getOutFileName,
  getPlugins,
  getPresetPlugin,
  getPresetPlugins,
  isFunction,
  isObjectLike,
  kebabCase,
  pluginMoveDts,
  pluginSetPackageJson,
  readJsonFile,
  relCwd,
  resolveEntry,
  usePathAbs,
  usePathRel,
  writeJsonFile
};
