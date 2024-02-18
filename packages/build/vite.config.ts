import { generateConfig } from './scripts';
/**
 * 关于第一条注意事项。这是由于加载 vite.config 时，各种路径别名能力——无论是 tsconfig 的 paths 还是 Vite 自身的 alias 都无法作用，
 * 内部模块之间的引用无法定位到正确的源码。
 *
 * 关于第二条注意事项。.ts 后缀的配置文件在 package.json 中不声明 "type": "module" 的情况下无法使用 esm 模块。
*/

export default generateConfig();
