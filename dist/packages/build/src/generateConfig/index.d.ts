import { UserConfig } from 'vite';
import { GenerateConfigOptions } from './options';
/**
 * 生成 Vite 构建配置
 * @param customOptions 自定义构建选项
 * @param viteConfig 自定义 vite 配置
 */
export declare function generateConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig): Promise<UserConfig>;
export * from './plugins';
export * from './options';
export * from './lib';
export * from './external';
export * from './pluginMoveDts';
export * from './pluginSetPackageJson';
