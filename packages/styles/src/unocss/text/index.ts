import { UserConfig } from 'unocss';
import { textVars } from '../../vars';
import {
  cssVarsToString,
  generateCssVars,
} from '../../utils';

export const textConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(
        generateCssVars(textVars),
      ),
    },
  ],
};
