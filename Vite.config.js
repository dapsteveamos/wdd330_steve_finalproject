import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './project',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'project/index.html')
      }
    }
  }
})
