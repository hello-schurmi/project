<!--
 * @Description:布局
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/layout/index.vue
-->

<template>
  <div class="layout">
    <div class="top">
      <Top />
    </div>
    <div class="main">
      <Side />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Side from "@/components/layout/side.vue";
import Top from "@/components/layout/top.vue";
import {reactive, ref} from "vue";
const props = defineProps({});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.layout {
  height: 100%;
  .top {
    height: 50px;
    position: fixed;
    background: #fff;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 999;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  }
  .main {
    position: absolute;
    width: 100%;
    height: calc(100% - 55px);
    margin-top: 55px;
    display: flex;
    .main-content { 
      //  height: calc(100% - 20px);
      height: 100%;
      width: 100%; 
      background: $bg-color;  
      // padding: 13px 0; 
      // padding-top: 0px;
    }
  }
}
</style>
