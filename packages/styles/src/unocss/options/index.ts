import { UserConfig } from 'unocss';
import { optionsVars } from '../../vars';
import {
  cssVarsToString,
  generateCssVars,
} from '../../utils';

export const optionsConfig: UserConfig = {
  preflights: [
    {
      getCSS: () => cssVarsToString(
        generateCssVars(optionsVars),
      ),
    },
  ],
};
