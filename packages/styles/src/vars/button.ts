import { getCssVar, cssVarToRgba } from '../utils';
import { ThemeCssVarsConfig } from './theme';

/** 按钮组件的主题变量定义 */
export const buttonVars = {
  // 默认按钮
  'button-default-color': cssVarToRgba<ThemeCssVarsConfig>('color-font2'),
  'button-default-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font1'),
  'button-default-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-font1'),
  'button-default-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),
  'button-default-icon-color': cssVarToRgba<ThemeCssVarsConfig>('color-font6'),
  'button-default-icon-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font1'),
  'button-default-icon-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-font1'),
  'button-default-icon-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font4'),
  'button-default-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-background6'),
  'button-default-background-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-background6'),
  'button-default-background-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-background7'),
  'button-default-background-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-background6'),
  'button-default-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-background5'),
  'button-default-border-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'button-default-border-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-blue2'),
  'button-default-border-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-background6'),

  // 蓝色按钮
  'button-primary-color': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-primary-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-primary-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-primary-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font8'),
  'button-primary-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-blue1'),
  'button-primary-background-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-blue2'),
  'button-primary-background-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-blue3'),
  'button-primary-background-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-blue4'),
  'button-primary-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-blue2'),
  'button-primary-border-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-blue2'),
  'button-primary-border-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-blue3'),
  'button-primary-border-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-blue5'),

  // 红色按钮
  'button-danger-color': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-danger-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-danger-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-danger-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font8'),
  'button-danger-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-red1'),
  'button-danger-background-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-red2'),
  'button-danger-background-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-red3'),
  'button-danger-background-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-red4'),
  'button-danger-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-red2'),
  'button-danger-border-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-red2'),
  'button-danger-border-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-red3'),
  'button-danger-border-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-red5'),

  // 绿色按钮
  'button-success-color': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-success-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-success-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-success-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font8'),
  'button-success-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-green1'),
  'button-success-background-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-green2'),
  'button-success-background-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-green3'),
  'button-success-background-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-green4'),
  'button-success-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-green2'),
  'button-success-border-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-green2'),
  'button-success-border-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-green3'),
  'button-success-border-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-green5'),

  // 黄色按钮
  'button-warning-color': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-warning-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-warning-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-font5'),
  'button-warning-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-font8'),
  'button-warning-background-color': cssVarToRgba<ThemeCssVarsConfig>('color-orange1'),
  'button-warning-background-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-orange2'),
  'button-warning-background-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-orange3'),
  'button-warning-background-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-orange4'),
  'button-warning-border-color': cssVarToRgba<ThemeCssVarsConfig>('color-orange2'),
  'button-warning-border-color__hover': cssVarToRgba<ThemeCssVarsConfig>('color-orange2'),
  'button-warning-border-color__active': cssVarToRgba<ThemeCssVarsConfig>('color-orange3'),
  'button-warning-border-color__disabled': cssVarToRgba<ThemeCssVarsConfig>('color-orange5'),

  'button-caret-color': cssVarToRgba<ThemeCssVarsConfig>('color-font6'),

  'button-height-small': '20px',
  'button-height-medium': '24px',
  'button-padding-x': getCssVar<ThemeCssVarsConfig>('spacing-sm'),
  'button-font-size': getCssVar<ThemeCssVarsConfig>('fs12'),
};

/** 按钮组件主题变量类型 */
export type ButtonCssVarsConfig = Partial<typeof buttonVars>;
