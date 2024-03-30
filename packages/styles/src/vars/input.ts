import { getCssVar, cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

// 输入框
export const inputVars = {
  'input-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'input-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'input-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-background5'),
  'input-border-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'input-border-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'input-border-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-background5'),
  'input-border-color__error': cssVarToRgba<ThemeCssVarsConfig>('color-red1'),
  'input-border-color__readonly': cssVarToRgba<ThemeCssVarsConfig>('color-background5'),
  'input-bakground-color': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'input-bakground-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'input-bakground-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'input-bakground-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-background7'),
  'input-bakground-color__error': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'input-bakground-color__readonly': cssVarToRgba<ThemeCssVarsConfig>('color-background7'),
  'input-placeholder-color': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),
  'input-errortip-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'input-errortip-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-red1'),
  'input-errortip-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'input-num-limit-color': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),
  'input-num-counter-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'input-num-max-color': cssVarToRgba<ThemeCssVarsConfig>('color-red2'),
  'input-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
  'input-height': '24px',
};

/** 按钮组件主题变量类型 */
export type InputCssVarsConfig = Partial<typeof inputVars>;
