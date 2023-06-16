/*
 * @Description: 默认
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-14
 * @FilePath: /project/vite.config.js
 */

import {resolve} from "path";
import {defineConfig} from "vite";
import compressPlugin from "vite-plugin-compression";
import AutoImport from "unplugin-auto-import/vite";
// import {autoComplete, Plugin as importToCDN} from "vite-plugin-cdn-import";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import {visualizer} from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [
    visualizer({
      open: true, //注意这里要设置为true，否则无效
      filename: "stats.html", //分析图生成的文件名
      gzipSize: true, // 收集 gzip 大小并将其显示
      brotliSize: true, // 收集 brotli 大小并将其显示
    }),

    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    compressPlugin({ 
      algorithm: 'gzip'
    }),
    //  importToCDN
    // importToCDN({
    //   modules: [
    //     {
    //       name: "vue",
    //       var: "Vue",
    //       path: "https://unpkg.com/vue@3.2.47/dist/vue.global.js",
    //     },
    //     {
    //       name: "vue-demi",
    //       var: "VueDemi",
    //       path: `https://unpkg.com/vue-demi@0.13.11`,
    //     },
    //     {
    //       name: "vue-router",
    //       var: "VueRouter",
    //       path: "https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.11/vue-router.global.prod.min.js",
    //     },
    //     {
    //       name: "pinia",
    //       var: "Pinia",
    //       path: "https://cdn.bootcdn.net/ajax/libs/pinia/2.0.36/pinia.iife.min.js",
    //     },
    //     {
    //       name: "element-plus",
    //       var: "ElementPlus",
    //       path: "https://cdn.bootcdn.net/ajax/libs/element-plus/2.3.3/index.full.min.js",
    //       css: "https://cdn.bootcdn.net/ajax/libs/element-plus/2.3.3/theme-chalk/index.css",
    //     },
    //   ],
    // }),
  ],
  //配置别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      // 'comps': resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/css/common.scss";`,
      },
    },
  },
  //修改端口号
  server: {
    // host: "0.0.0.0",
    // port: 4000,
  },
});
