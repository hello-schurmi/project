/*
 * @Description: 路由实例
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-01
 * @FilePath: /project/src/router/index.js
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import {createRouter, createWebHistory} from "vue-router";
import routes from "./routes";
import stores from "@/store";
const routers = createRouter({
  history: createWebHistory(),
  routes: routes,
});

//路由守卫
routers.beforeEach((to, from, next) => {
  console.log("进入路由守卫"); 
  NProgress.start() 
  // console.log(stores.userStore.count);
  stores.userStore.getRouteList(routers.options.routes);
  next();
});
routers.afterEach(() => {
  NProgress.done() // 进度条结束
})
export default routers;
