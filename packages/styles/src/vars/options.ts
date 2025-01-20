import { getCssVar, cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

// 列表选项
export const optionsVars = {
  'options-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'options-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'options-padding-y': getCssVar<ThemeCssVarsConfig>('spacing-xs'),

  'option-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'option-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'option-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'option-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),
  'option-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'option-background-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-background7'),
  'option-background-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'option-background-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-background9'),
  'option-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-xs'),
  'option-height-small': '20px',
  'option-height-medium': '24px',
  'option-height-large': '28px',
  'option-fontsize': '12px',

  'toolip-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-yellow4'),
  'toolip-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-yellow3'),
  'toolip-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'toolip-padding': getCssVar<ThemeCssVarsConfig>('spacing-sm'),

};

/** 列表选项组件主题变量类型 */
export type OptionsCssVarsConfig = Partial<typeof optionsVars>;
