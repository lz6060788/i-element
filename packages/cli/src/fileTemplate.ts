import { stringToUpCase } from './utils';

export const indexFileName = () => 'index.ts';
export const styleFileName = (componentName: string) => `${componentName}.scss`;
export const vueFileName = (componentName: string) => `${componentName}.vue`;
export const propsFileName = () => 'props.ts';

export const packageJsonFileName = () => 'package.json';

export const viteConfigFileName = () => 'vite.config.ts';

export const indexFile = (prefix: string, componentName: string) => `import ${stringToUpCase(prefix) + stringToUpCase(componentName)} from './${componentName}.vue';
import './${styleFileName(componentName)}';
import 'virtual:uno.css';

export { ${stringToUpCase(prefix) + stringToUpCase(componentName)} };
export type ${stringToUpCase(componentName)}Instance = InstanceType<typeof ${stringToUpCase(prefix) + stringToUpCase(componentName)}>;
export * from './props';
`;

export const styleFile = (prefix: string, componentName: string) => `.${prefix}-${componentName} {
  // todo
}
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const vueFile = (prefix: string, componentName: string) => `<template>
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
</script>
`;

export const propsFile = (prefix: string, componentName: string, cnName: string) => `/** @module ${stringToUpCase(componentName)} */
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

export const packageJsonFile = (prefix: string, componentName: string) => `{
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

export const viteConfigFile = () => `import { generateVueConfig } from '../build/scripts';

export default generateVueConfig();
`;
