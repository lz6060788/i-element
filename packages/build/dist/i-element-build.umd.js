(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vite"), require("node:fs/promises"), require("node:path"), require("vite-plugin-inspect"), require("rollup-plugin-visualizer"), require("@vitejs/plugin-vue"), require("@rollup/plugin-replace"), require("node:fs"), require("typescript")) : typeof define === "function" && define.amd ? define(["exports", "vite", "node:fs/promises", "node:path", "vite-plugin-inspect", "rollup-plugin-visualizer", "@vitejs/plugin-vue", "@rollup/plugin-replace", "node:fs", "typescript"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.iElementBuild = {}, global.vite, global.promises, global.node_path, global.inspect, global.rollupPluginVisualizer, global.vue, global.replace, global.node_fs, global.typescript));
})(this, function(exports2, vite, promises, node_path, inspect, rollupPluginVisualizer, vue, replace, node_fs, typescript) {
  "use strict";
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
    const buffer = await promises.readFile(filePath, "utf-8");
    return JSON.parse(buffer);
  }
  async function writeJsonFile(filePath, ...rests) {
    await promises.writeFile(filePath, JSON.stringify(...rests), "utf-8");
  }
  function normalizePath(path) {
    if (node_path.sep === "/") {
      return path;
    }
    return path.replace(new RegExp(`\\${node_path.sep}`, "g"), "/");
  }
  function usePathAbs(basePath) {
    return (...paths) => normalizePath(node_path.resolve(basePath, ...paths));
  }
  const absCwd = usePathAbs(process.cwd());
  function usePathRel(basePath) {
    return (path, ignoreLocalSignal = true) => {
      const result = normalizePath(node_path.relative(basePath, path));
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
    const isEntryFile = node_fs.statSync(absEntry).isFile();
    const absEntryFolder = isEntryFile ? node_path.join(absEntry, "..") : absEntry;
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
    const entryFileName = isFile ? node_path.basename(entry).replace(/\..*$/, ".d.ts") : "index.d.ts";
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
      exports: exports3
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
        if (exports3 === ".") {
          packageJsonObj.main = umd;
        }
        const es = relCwd(
          absCwd(outDir, getOutFileName(finalName, "es", mode)),
          false
        );
        exportsData.import = es;
        if (exports3 === ".") {
          packageJsonObj.module = es;
        }
        const dtsEntry = getDtsPath(options);
        exportsData.types = dtsEntry;
        if (exports3 === ".") {
          packageJsonObj.types = dtsEntry;
        }
        if (!isObjectLike(packageJsonObj.exports)) {
          packageJsonObj.exports = {};
        }
        Object.assign(packageJsonObj.exports, {
          [exports3]: exportsData,
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
    const tsconfigs = typescript.getParsedCommandLineOfConfigFile(dts, {}, typescript.sys);
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
          await promises.cp(source, target, {
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
      getPresetPlugin(options, "pluginVisualizer", rollupPluginVisualizer.visualizer),
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
    return vite.mergeConfig(result, viteConfig || {});
  }
  exports2.absCwd = absCwd;
  exports2.camelCase = camelCase;
  exports2.defaultOptions = defaultOptions;
  exports2.generateConfig = generateConfig;
  exports2.getExternal = getExternal;
  exports2.getLib = getLib;
  exports2.getOptions = getOptions;
  exports2.getOutFileName = getOutFileName;
  exports2.getPlugins = getPlugins;
  exports2.getPresetPlugin = getPresetPlugin;
  exports2.getPresetPlugins = getPresetPlugins;
  exports2.isFunction = isFunction;
  exports2.isObjectLike = isObjectLike;
  exports2.kebabCase = kebabCase;
  exports2.pluginMoveDts = pluginMoveDts;
  exports2.pluginSetPackageJson = pluginSetPackageJson;
  exports2.readJsonFile = readJsonFile;
  exports2.relCwd = relCwd;
  exports2.resolveEntry = resolveEntry;
  exports2.usePathAbs = usePathAbs;
  exports2.usePathRel = usePathRel;
  exports2.writeJsonFile = writeJsonFile;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
