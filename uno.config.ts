import { defineConfig, presetUno } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import { iElementPreset } from '@i-element/styles/src/unoPreset';

export default defineConfig({
  presets: [
    presetUno(),
    iElementPreset(),
  ],
  transformers: [
    transformerDirectives(),
  ],
});
