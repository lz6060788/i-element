// demo/vite.config.ts
import { defineConfig } from 'vite';
import { join } from 'node:path';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';

export default defineConfig({
  plugins: [vue(), unocss()],
  resolve: {
    /**
     * resolve.alias 可以将所有 import 语句中的 @openxui/xxx 替换为 ../packages/xxx/src，从而命中源码而非产物，
     * 这样源码的更新就会及时通过 HMR 机制反馈到页面上了。
     */
    // tsc和vite都通过别名，使import导入的模块都命中源码而非产物
    alias: [
      {
        find: /^@i-element\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      },
    ],
  },
});
