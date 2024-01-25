import { Preset, UserConfig } from 'unocss';
import { Theme } from 'unocss/preset-mini';
/** 组件名称与预设对象的关系表 */
declare const configMaps: {
    theme: UserConfig<Theme>;
    button: UserConfig<object>;
};
type ConfigKeys = keyof typeof configMaps;
/** 组件库预设选项 */
export interface IElementPresetOptions {
    /** 指定集成哪些组件的 UnoCSS 预设，不设置时默认全部集成 */
    include?: ConfigKeys[];
    /** 指定剔除哪些组件的 UnoCSS 预设 */
    exclude?: ConfigKeys[];
}
/** 组件库预设 */
export declare function iElementPreset(options?: IElementPresetOptions): Preset;
export {};
