import {
  defineConfig, presetUno, UserConfig, presetIcons,
} from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import { iElementPreset } from './packages/styles/src/unoPreset';

export default <UserConfig>defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      collections: {
        // Iconify json 集成，后续支持通过 <i class="i-icon-xxx"> 来使用图标原子类，并支持按需打包
        icon: () => import('./packages/icons/dist/icons.json').then((i) => i.default),
      },
    }),
    iElementPreset(),
  ],
  transformers: [
    transformerDirectives(),
  ],
});
