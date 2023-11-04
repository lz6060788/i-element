import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'iElementInput',
      fileName: 'i-element-input',
    },
    minify: false,
    rollupOptions: {
      external: [
        /@i-element.*/,
        'vue'
      ],
    },
  }
})
