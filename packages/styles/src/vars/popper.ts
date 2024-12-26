import { cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 浮层组件的主题变量定义 */
export const popperVars = {
  'popper-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-yellow4'),
  'popper-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-yellow3'),
  'popper-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'popper-border-style': 'solid',
  'popper-border-width': '1px',
  'popper-padding': '8px',
};

/** 浮层组件主题变量类型 */
export type PopperCssVarsConfig = Partial<typeof popperVars>;
