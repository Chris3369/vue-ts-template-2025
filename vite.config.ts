import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

export default defineConfig({
  plugins: [vue(), mockDevServerPlugin()],
  server: {
    proxy: {
      '^/api': 'http://example.com/',
    },
  },
})
