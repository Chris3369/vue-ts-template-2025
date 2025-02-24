import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

export default defineConfig(({ command, mode }) => {

  let env = loadEnv(mode, process.cwd())

  console.log(command)
  console.log(env)

  let config = {
    plugins: [vue(), mockDevServerPlugin()],
    server: {
      proxy: {
        [env.VITE_BASE_API]: {
          target: env.VITE_SERVE,
          changeOrigin: true,
        }
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/variables.scss" as *;`
          // https://juejin.cn/post/7450692155910750262
        }
      }
    }
  }

  if (command === 'build') {
    config = {
      ...config,
      plugins: [vue()]
    }
  }

  return {
    ...config
  }
})

// https://israynotarray.com/nodejs/20230407/1216067379/