// packages/shared/vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'iElementUi',
      fileName: 'i-element-ui',
    },
    minify: false,
    rollupOptions: {
      external: [
        /lodash.*/,
        /@i-element.*/,
      ],
      output: {
      },
    },
  },
});
