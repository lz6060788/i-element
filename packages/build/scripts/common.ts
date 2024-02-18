import { UserConfig } from 'vite';
import {
  absCwd,
  generateConfig as baseGenerateConfig,
  GenerateConfigOptions,
} from '../src';

export function generateConfig(
  customOptions?: GenerateConfigOptions,
  viteConfig?: UserConfig,
) {
  console.log(absCwd('../../tsconfig.src.json'));
  return baseGenerateConfig({
    dts: absCwd('../../tsconfig.src.json'),
    ...customOptions,
  }, viteConfig);
}
