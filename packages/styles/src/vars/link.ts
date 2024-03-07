import { cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 按钮组件的主题变量定义 */
export const linkVars = {
  // 链接按钮——红色
  'button-link-danger-color': cssVarToRgba<ThemeCssVarsConfig>('color-red1'),
  'button-link-danger-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-red2'),
  'button-link-danger-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-red3'),
  'button-link-danger-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-red4'),

  // 链接按钮——蓝色
  'button-link-primary-color': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'button-link-primary-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-blue2'),
  'button-link-primary-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-blue3'),
  'button-link-primary-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-blue4'),

  // 链接按钮——橙色
  'button-link-warning-color': cssVarToRgba<ThemeCssVarsConfig>('color-orange1'),
  'button-link-warning-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-orange2'),
  'button-link-warning-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-orange3'),
  'button-link-warning-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-orange4'),

  // 链接按钮——绿色
  'button-link-success-color': cssVarToRgba<ThemeCssVarsConfig>('color-green1'),
  'button-link-success-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-green2'),
  'button-link-success-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-green3'),
  'button-link-success-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-green4'),
};

/** 按钮组件主题变量类型 */
export type LinkCssVarsConfig = Partial<typeof linkVars>;
