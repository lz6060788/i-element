/** 基础颜色主题变量 */
export const themeColors = {
  'color-brand1': '#1D71F0',
  'color-brand2': '#2F69BF',
  'color-brand3': '#D6E7FF',
  'color-brand4': '#DCE8FA',
  'color-brand5': '#C4D5EF',
  'color-brand6': '#EAF2FF',

  'color-red1': '#E50E1B',
  'color-red2': '#BD000B',
  'color-red3': '#E58187',
  'color-red4': '#F5B0B5',
  'color-red5': '#F09096',
  'color-red6': '#FFE5E7',

  'color-green1': '#178F3F',
  'color-green2': '#007527',
  'color-green3': '#76B88C',
  'color-green4': '#B2D1BC',
  'color-green5': '#9BC7AA',
  'color-green6': '#E1FAE9',

  'color-orange1': '#F08B26',
  'color-orange2': '#DB6E00',
  'color-orange3': '#EFB377',
  'color-orange4': '#E5C6A5',
  'color-orange5': '#E0BB94',
  'color-orange6': '#FFF0E0',

  'color-blue1': '#1D71F0',
  'color-blue2': '#1160D6',
  'color-blue3': '#8FB6EF',
  'color-blue4': '#B4CCED',
  'color-blue5': '#9DC1F5',
  'color-blue6': '#DCE8FA',

  'color-purple1': '#672DFE',
  'color-purple2': '#4D12E5',
  'color-purple3': '#B89DFE',
  'color-purple4': '#E8E0FE',
  'color-purple5': '#DDD2FA',
  'color-purple6': '#F3EFFE',

  'color-pinkpurple1': '#B71DE8',
  'color-pinkpurple2': '#8A04B5',
  'color-pinkpurple3': '#D485ED',
  'color-pinkpurple4': '#F7E0FF',
  'color-pinkpurple5': '#F1D3FB',
  'color-pinkpurple6': '#FAEFFE',

  'color-magenta1': '#F21DC4',
  'color-magenta2': '#BF0497',
  'color-magenta3': '#F291DD',
  'color-magenta4': '#FFDBF7',
  'color-magenta5': '#FAD2F1',
  'color-magenta6': '#FFF0FC',

  'color-orangered1': '#FF661A',
  'color-orangered2': '#E54D00',
  'color-orangered3': '#FFA77A',
  'color-orangered4': '#FFE7DB',
  'color-orangered5': '#FADFD2',
  'color-orangered6': '#FFF5F0',

  'color-cyan1': '#13C2C2',
  'color-cyan2': '#00A8A8',
  'color-cyan3': '#74D7D7',
  'color-cyan4': '#D7F5F5',
  'color-cyan5': '#C9F0F0',
  'color-cyan6': '#E6F5F5',

  'color-lime1': '#85C405',
  'color-lime2': '#679900',
  'color-lime3': '#B3E058',
  'color-lime4': '#EBF5D7',
  'color-lime5': '#E2F0C9',
  'color-lime6': '#F0F5E6',

  'color-yellow1': '#EBCA46',
  'color-yellow2': '#D1B02A',
  'color-yellow3': '#EBD88D',
  'color-yellow4': '#FFF7D9',
  'color-yellow5': '#F9ECBA',
  'color-yellow6': '#FFFAE7',

  'color-background1': '#42567A',
  'color-background2': '#5B6F8F',
  'color-background3': '#A2BCE0',
  'color-background4': '#8CA3C2',
  'color-background5': '#8EABD1',
  'color-background6': '#D0DEF2',
  'color-background7': '#E5EDF9',
  'color-background8': '#F9FBFF',
  'color-background9': '#F9FBFF',
  'color-background10': '#EAF2FF',
  'color-background11': '#D8E6F9',
  'color-background12': '#C5D2E5',
  'color-background13': '#FFFAE7',
  'color-background14': '#587191',

  'color-font1': '#071833',
  'color-font2': '#2C3E59',
  'color-font3': '#7C8BA3',
  'color-font4': '#A3AFC2',
  'color-font5': '#FFFFFF',
  'color-font6': '#566D8F',
  'color-font7': '#D3DBEA',
  'color-font8': '#F6F6F6',
  'color-font9': '#EB959D',
  'color-font10': '#A8CDA1',
};

/**
 * 需要生成色阶的颜色
 *
 * 例如 color-primary 将会生成 color-primary-light-[1-9] 以及 color-primary-dark-[1-9] 系列浅色与深色的变量。
 */
export const themeColorLevelsEnabledKeys: (keyof typeof themeColors)[] = [];

/** 基础边距主题变量 */
export const themeSpacing = {
  'spacing-xs': '4px',
  'spacing-sm': '8px',
  'spacing-md': '12px',
  'spacing-lg': '16px',
  'spacing-xl': '32px',
};

/** 基础字号主题变量 */
export const themeFontSize = {
  fs12: '12px',
  fs14: '14px',
  fs16: '16px',
};

/** 基础主题变量 */
export const themeVars = {
  ...themeColors,
  ...themeSpacing,
  ...themeFontSize,
};

/** 基础主题变量类型 */
export type ThemeCssVarsConfig = Partial<typeof themeVars>;
