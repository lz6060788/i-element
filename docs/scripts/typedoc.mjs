import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, writeFile } from "node:fs/promises";
import {
  Application,
  TSConfigReader,
  ReflectionKind
} from "../node_modules/typedoc/dist/index.js";
import defaultLocaleJson from "../locale/default.json" assert { type: "json" };
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fromRoot = (...paths) => join(
  __dirname,
  "..",
  "..",
  ...paths
);
const tsConfigPath = fromRoot("tsconfig.src.json");
const OUT_DIR = join(__dirname, "..", "api");
const CONFIGS_DIR = join(__dirname, "..", "configs");
async function main() {
  const app = await Application.bootstrapWithPlugins({
    // 指定文件入口，支持 globs 匹配多文件。规定为所有组件包内的 src/props.ts 文件。
    entryPoints: [fromRoot("packages", "**", "props.ts").replace(/\\/g, "/")],
    // tsconfig 配置
    tsconfig: tsConfigPath,
    // 启用 markdown 转化插件
    plugin: ["typedoc-plugin-markdown"],
    // 更多配置项参考：https://typedoc.org/options/
    disableSources: true,
    readme: "none",
    skipErrorChecking: true,
    hidePageHeader: true,
    hideBreadcrumbs: true,
    useCodeBlocks: true,
    pageTitleTemplates: {
      member: (args) => `${splitByUpperCase(args.name).map((item) => defaultLocaleJson[item]).join("")}`
    },
    interfacePropertiesFormat: "table",
    locales: {
      zh: {
        Properties: "\u5C5E\u6027",
        Expose: "\u65B9\u6CD5",
        Slots: "\u63D2\u69FD",
        Emits: "\u4E8B\u4EF6"
      }
    },
    out: OUT_DIR,
    lang: "zh"
  }, [
    new TSConfigReader()
  ]);
  const project = await app.convert();
  if (project) {
    await app.generateDocs(project, OUT_DIR);
    await app.generateOutputs(project);
    const jsonDir = join(OUT_DIR, "documentation.json");
    await app.generateJson(project, jsonDir);
    await resolveConfig(jsonDir, join(CONFIGS_DIR, "components.json"));
  }
}
main().catch(console.error);
async function resolveConfig(documentJsonDir, componentsConfigJsonDir) {
  const buffer = await readFile(documentJsonDir, "utf8");
  const data = JSON.parse(buffer.toString());
  if (!data.children || data.children.length <= 0) {
    return;
  }
  const componentsConfig = await readComponentsConfig(componentsConfigJsonDir);
  data.children.forEach((module) => {
    if (module.kind !== ReflectionKind.Module) return;
    const moduleConfig = findComponentFromConfig(componentsConfig, module.name);
    if (!moduleConfig) return;
    moduleConfig.collapsed = true;
    moduleConfig.link = `/api/${module.name}/README`;
    moduleConfig.items = [];
    module.children?.forEach((sub) => {
      if (sub.kind === ReflectionKind.Class) {
        moduleConfig.items?.push({ text: sub.name, link: `/api/${module.name}/classes/${sub.name}` });
      } else if (sub.kind === ReflectionKind.TypeAlias) {
        moduleConfig.items?.push({ text: sub.name, link: `/api/${module.name}/type-aliases/${sub.name}` });
      } else if (sub.kind === ReflectionKind.Interface) {
        moduleConfig.items?.push({ text: sub.name, link: `/api/${module.name}/interfaces/${sub.name}` });
      }
    });
  });
  await writeFile(join(CONFIGS_DIR, "api.json"), JSON.stringify(componentsConfig, null, 2), "utf8");
}
async function readComponentsConfig(jsonDir) {
  const buffer = await readFile(jsonDir, "utf8");
  return JSON.parse(buffer.toString());
}
function findComponentFromConfig(config, name) {
  let itemIndex = -1;
  const targetCategory = config.find((category) => {
    if (!category.items || category.items.length <= 0) return false;
    itemIndex = category.items.findIndex((comp) => comp.text?.startsWith(name));
    return itemIndex >= 0;
  });
  return itemIndex >= 0 ? targetCategory?.items?.[itemIndex] || null : null;
}
function splitByUpperCase(str) {
  return str.split(/(?=[A-Z])/);
}
