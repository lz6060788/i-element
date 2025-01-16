(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(require("yargs"), require("node:path"), require("node:fs")) : typeof define === "function" && define.amd ? define(["yargs", "node:path", "node:fs"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.yargs, global.path, global.fs));
})(this, function(yargs, path, fs) {
  "use strict";
  function stringToUpCase(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  }
  const indexFileName = () => "index.ts";
  const styleFileName = (componentName) => `${componentName}.scss`;
  const vueFileName = (componentName) => `${componentName}.vue`;
  const propsFileName = () => "props.ts";
  const packageJsonFileName = () => "package.json";
  const viteConfigFileName = () => "vite.config.ts";
  const indexFile = (prefix, componentName) => `import ${stringToUpCase(prefix) + stringToUpCase(componentName)} from './${componentName}.vue';
import './${styleFileName(componentName)}';
import 'virtual:uno.css';

export { ${stringToUpCase(prefix) + stringToUpCase(componentName)} };
export type ${stringToUpCase(componentName)}Instance = InstanceType<typeof ${stringToUpCase(prefix) + stringToUpCase(componentName)}>;
export * from './props';
`;
  const styleFile = (prefix, componentName) => `.${prefix}-${componentName} {
  // todo
}
`;
  const vueFile = (prefix, componentName) => `<template>
  <div>contents</div>
</template>

<script setup lang="ts">
import { useNamespace } from '@i-element/shared';
import {
  default${stringToUpCase(componentName)}Props,
  ${stringToUpCase(componentName)}Props,
  ${stringToUpCase(componentName)}Slots,
  ${stringToUpCase(componentName)}Emits,
} from './props';

const emit = defineEmits<t${stringToUpCase(componentName)}Emits>();
const slots = defineSlots<t${stringToUpCase(componentName)}Slots>();
const props = withDefaults(
  defineProps<t${stringToUpCase(componentName)}Props>(),
  defaultt${stringToUpCase(componentName)}Props(),
);

const ns = useNamespace('${componentName}');
<\/script>
`;
  const propsFile = (prefix, componentName, cnName) => `/** @module ${stringToUpCase(componentName)} */
import { InferVueDefaults } from '@i-element/shared';
import type ${stringToUpCase(componentName)} from './${vueFileName(componentName)}';

/** ${cnName}组件的属性 */
export interface ${stringToUpCase(componentName)}Props {

}

/** @hidden */
export function default${stringToUpCase(componentName)}Props() {
  return {
  } satisfies Required<InferVueDefaults<${stringToUpCase(componentName)}Props>>;
}

/** ${cnName}组件的事件 */
export type ${stringToUpCase(componentName)}Emits = {
};

/** ${cnName}组件对外暴露的方法 */
export interface ${stringToUpCase(componentName)}Expose {
}

/** ${cnName}组件的插槽信息 */
export interface ${stringToUpCase(componentName)}Slots {
}

export type ${stringToUpCase(componentName)}Instance = InstanceType<typeof ${stringToUpCase(componentName)}>;
`;
  const packageJsonFile = (prefix, componentName) => `{
  "name": "@i-element/${componentName}",
  "version": "0.0.1",
  "description": "",
  "keywords": [
    "vue",
    "ui",
    "component library"
  ],
  "author": "",
  "license": "MIT",
  "homepage": "",
  "repository": {
    "type": "git",
    "url": ""
  },
  "bugs": {
    "url": ""
  },
  "scripts": {
    "build": "vite build",
    "test": "echo test"
  },
  "files": [
    "dist",
    "README.md"
  ],
  "publishConfig": {
    "registry": "https://registry.npmjs.org",
    "access": "public"
  },
  "peerDependencies": {
    "vue": ">=3.0.0"
  },
  "dependencies": {
    "@i-element/shared": "workspace:^"
  }
}
`;
  const viteConfigFile = () => `import { generateVueConfig } from '../build/scripts';

export default generateVueConfig();
`;
  const ROOT_DIR = process.cwd();
  const PACKAGES_DIR = "packages";
  const RESOURCE_DIR = "src";
  async function main() {
    var _a;
    const argv = await yargs(process.argv.slice(2)).usage("Usage: $0 [command] <options>").demandOption(["n"]).option("name", {
      type: "string",
      describe: "组件名称",
      alias: "n"
    }).option("cnName", {
      type: "string",
      describe: "组件中文名称",
      alias: "c"
    }).option("prefix", {
      type: "string",
      describe: "组件前缀",
      alias: "p"
    }).help().parse();
    const componentName = (_a = argv.name) == null ? void 0 : _a.toLocaleLowerCase();
    const componentCNName = argv.cnName || componentName || "未命名";
    const prefix = argv.prefix || "i";
    if (!componentName) {
      console.error("请输入组件名称");
      return;
    }
    try {
      const componentDir = path.join(ROOT_DIR, PACKAGES_DIR, componentName);
      fs.mkdirSync(componentDir);
      console.log("组件目录创建成功");
      const componentResourceDir = path.join(componentDir, RESOURCE_DIR);
      fs.mkdirSync(componentResourceDir);
      console.log("组件资源目录创建成功");
      const packageJsonPath = path.join(componentDir, packageJsonFileName());
      fs.writeFileSync(packageJsonPath, packageJsonFile(prefix, componentName));
      console.log("组件package.json文件生成成功");
      const viteConfigPath = path.join(componentDir, viteConfigFileName());
      fs.writeFileSync(viteConfigPath, viteConfigFile());
      console.log("组件vite.config.ts文件生成成功");
      const indexFilePath = path.join(componentResourceDir, indexFileName());
      fs.writeFileSync(indexFilePath, indexFile(prefix, componentName));
      console.log("index.ts生成成功");
      const styleFilePath = path.join(componentResourceDir, styleFileName(componentName));
      fs.writeFileSync(styleFilePath, styleFile(prefix, componentName));
      console.log("style.scss文件生成成功");
      const propsFilePath = path.join(componentResourceDir, propsFileName());
      fs.writeFileSync(propsFilePath, propsFile(prefix, componentName, componentCNName));
      console.log("props文件生成成功");
      const vueFilePath = path.join(componentResourceDir, vueFileName(componentName));
      fs.writeFileSync(vueFilePath, vueFile(prefix, componentName));
      console.log("vue文件生成成功");
    } catch (e) {
      console.error(e);
    }
  }
  main();
});
