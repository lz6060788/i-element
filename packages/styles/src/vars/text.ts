import { cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 按钮组件的主题变量定义 */
export const textVars = {
  'text-default-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),

  // 链接按钮——红色
  'text-danger-color': cssVarToRgba<ThemeCssVarsConfig>('color-red1'),
  'text-danger-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-red2'),
  'text-danger-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-red3'),
  'text-danger-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),

  // 链接按钮——蓝色
  'text-primary-color': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'text-primary-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-blue2'),
  'text-primary-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-blue3'),
  'text-primary-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),

  // 链接按钮——橙色
  'text-warning-color': cssVarToRgba<ThemeCssVarsConfig>('color-orange1'),
  'text-warning-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-orange2'),
  'text-warning-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-orange3'),
  'text-warning-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),

  // 链接按钮——绿色
  'text-success-color': cssVarToRgba<ThemeCssVarsConfig>('color-green1'),
  'text-success-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-green2'),
  'text-success-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-green3'),
  'text-success-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),

  // 文本字体大小
  'text-size-small': '12px',
  'text-size-medium': '14px',
  'text-size-large': '16px',
  'text-weight-small': 'regular',
  'text-weight-medium': 'semibold',
  'text-weight-large': 'bold',
};

/** 按钮组件主题变量类型 */
export type TextCssVarsConfig = Partial<typeof textVars>;
