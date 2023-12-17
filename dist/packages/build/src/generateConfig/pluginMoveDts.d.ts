import { PluginOption } from 'vite';
import { GenerateConfigOptions } from './options';
/** 自定义插件，将 d.ts 产物从集中目录移动到子包的产物目录 */
export declare function pluginMoveDts(options?: GenerateConfigOptions): PluginOption;
