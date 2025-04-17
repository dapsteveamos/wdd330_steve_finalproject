import { defineConfig } from 'vite'

export default defineConfig({
  root: 'project', // no dot-slash needed
  build: {
    outDir: '../dist', // this places the build output one level up
    emptyOutDir: true
  }
})
