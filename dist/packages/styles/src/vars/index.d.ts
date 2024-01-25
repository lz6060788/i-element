import { ThemeCssVarsConfig } from './theme';
import { ButtonCssVarsConfig } from './button';
/** 导出组件库主题样式的整体类型 */
export interface IElementCssVarsConfig extends ThemeCssVarsConfig, ButtonCssVarsConfig {
    [key: string]: string | undefined;
}
export * from './theme';
export * from './button';
