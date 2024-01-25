/**
 * 1.实现 Vue 插件(Vue 插件) Theme，在插件的 install 方法中，用 provide 方法(Vue provide)将设置全局主题变量的 setTheme 方法注入到整个 Vue 应用中。
 * 2.向外暴露 useTheme 方法，可以使挂载了 Theme 插件的应用下的任何 Vue 组件通过 const { setTheme } = useTheme() 获取到设置主题变量的方法，
 *   useTheme 通过 inject 方法(Vue inject)方法获取到目标。
 * 3.之前生成 UnoCSS 预设时用到的 generateCssVars 可以在主题切换时再次复用，将主题变量进行加前缀、提取 RGB 字符串等处理，
 *   生成真正适配组件库现状的 CSS 变量对象。
 */
import { Plugin } from 'vue';
import { IElementCssVarsConfig } from '../vars';
export declare function useTheme(): {
    setTheme: (styleObj: IElementCssVarsConfig) => void;
};
export declare const Theme: Plugin<IElementCssVarsConfig[]>;
export * from './presets';
