import { UserConfig } from 'unocss';
import { buttonVars } from '../../vars';
import {
  cssVarsToString,
  generateCssVars,
} from '../../utils';

export const buttonConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(
        generateCssVars(buttonVars),
      ),
    },
  ],
};
