/*
 * @Description: 主函数
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-06
 * @FilePath: /project/src/main.js
 */
import "reset-css";
// import elementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css"; 
import "./assets/css/public.scss";

import {createApp} from "vue";
import App from "./App.vue";
import {createPinia} from "pinia";
import {registerStore} from "@/store";
import routers from "./router/index.js";
import vue3TreeOrg from "vue3-tree-org";
import "vue3-tree-org/lib/vue3-tree-org.css";

const app = createApp(App);
const pinia = createPinia();
// app.use(elementPlus)

app.directive("adaptive", {
  mounted(el, binding, vnode) { 
    const top = el.offsetTop;
    const bottom = binding?.value?.bottom || 64;
    const pageHeight = window.innerHeight;
    el.style.height = pageHeight - top - bottom + "px";
  },
});
app.use(pinia);
registerStore();
app.use(routers);
app.use(vue3TreeOrg);
app.mount("#app");
