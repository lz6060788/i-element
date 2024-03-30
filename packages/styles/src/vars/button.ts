import { getCssVar, cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 按钮组件的主题变量定义 */
export const buttonVars = {
  // 默认按钮
  'button-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'button-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font1'),
  'button-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-font1'),
  'button-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),
  'button-icon-color': cssVarToRgba<ThemeCssVarsConfig>('color-font6'),
  'button-icon-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font1'),
  'button-icon-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-font1'),
  'button-icon-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),
  'button-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-background6'),
  'button-background-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-background6'),
  'button-background-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-background7'),
  'button-background-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-background6'),
  'button-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-background5'),
  'button-border-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'button-border-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-blue2'),
  'button-border-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-background6'),
  'button-caret-color': cssVarToRgba<ThemeCssVarsConfig>('color-font6'),

  'button-height-small': '20px',
  'button-height-medium': '24px',
  'button-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'button-font-size': getCssVar<ThemeCssVarsConfig>('fs12'),
};

/** 按钮组件主题变量类型 */
export type ButtonCssVarsConfig = Partial<typeof buttonVars>;
