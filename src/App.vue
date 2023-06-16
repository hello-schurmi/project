<!--
 * @Description: 默认
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/App.vue
-->
<script setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn";
let locale = zhCn;

onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#2878ff');
  document.body.style.setProperty('--el-menu-active-color', '#2878ff');
  // document.body.style.setProperty('--el-color-primary-light-3', '#95d475');
}) 
</script>
<!-- 引入路由 -->
<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<style lang="scss">

body {
  height: 100%;
  width: 100%;
 
}
#app {
  height: 100%;
  width: 100%;
  
}

#nprogress .bar {
  background-color: #409eff !important;
} 
</style>
