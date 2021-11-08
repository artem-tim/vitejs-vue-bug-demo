import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'test-lib',
      fileName: (format) => `test-lib.${format}.js`,
    },
    minify: false,
  },
  plugins: [vue()]
})
