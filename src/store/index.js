/*
 * @Description: 公共数据处理
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-07
 * @FilePath: /project/src/store/index.js
 */
import {defineStore} from "pinia";
const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      count: 0,
      routeList: [],
    };
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    addCount() {
      this.count++;
    },
    //路由列表
    getRouteList(route) {
      //路由列表 排除 隐藏路由
      let _arr = route.filter(item => {
        return item.meta.flag == true;
      });
      this.routeList = _arr;
    },
  },
});
const stores = {};
// 注册到全局
export const registerStore = () => {
  stores.userStore = useCounterStore();
};
export default stores;
