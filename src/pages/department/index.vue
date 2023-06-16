<!--
 * @Description:  我的
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-05-31
 * @FilePath: /project/src/pages/department/index.vue
-->
<!--  -->
<template>
  <div class="">部门管理</div>
  <div>
    <el-button type="primary" size="" @click="jump">
      <el-icon class="el-icon--left"><search theme="outline" fill="#fff" :strokeWidth="3" /></el-icon>
      跳转
    </el-button>
  </div>
</template>

<script setup>
import {Search, Bookmark, Lightning} from "@icon-park/vue-next";
import {reactive, ref} from "vue";
import {routerJump} from "@/assets/js/utils.js";
const props = defineProps({});
function jump() {
  routerJump("/home");
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
</style>
