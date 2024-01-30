import { defineConfig, presetUno, UserConfig } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import { iElementPreset } from './packages/styles/src/unoPreset';

export default <UserConfig>defineConfig({
  presets: [
    presetUno(),
    iElementPreset(),
  ],
  transformers: [
    transformerDirectives(),
  ],
});
