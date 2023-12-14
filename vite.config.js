import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//引入路径模块
import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      //配置别名
      "@": path.resolve("./src") //设置别名为src 用@替换src
    }
  }
})
