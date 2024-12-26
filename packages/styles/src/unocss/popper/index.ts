import { UserConfig } from 'unocss';
import { popperVars } from '../../vars';
import {
  cssVarsToString,
  generateCssVars,
} from '../../utils';

export const popperConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(
        generateCssVars(popperVars),
      ),
    },
  ],
};
