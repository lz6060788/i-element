import { ThemeCssVarsConfig } from './theme';
import { ButtonCssVarsConfig } from './button';
import { LinkCssVarsConfig } from './link';

// 引入其他组件的主题变量类型
// import { ComponentCssVarConfig } from './other-component';

/** 导出组件库主题样式的整体类型 */
export interface IElementCssVarsConfig extends
  ThemeCssVarsConfig,
  ButtonCssVarsConfig,
  LinkCssVarsConfig {
  [key: string]: string | undefined;
}

export * from './theme';

// 导出其他组件的主题变量
export * from './button';
export * from './link';
