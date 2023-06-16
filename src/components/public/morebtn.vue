<!--
 * @Description: 更多按钮
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-12
 * @FilePath: /project/src/components/public/morebtn.vue
-->
<template>
  <el-popover placement="bottom" :hide-after="20" width="60" :offset="1" trigger="click">
    <template #reference>
      <span class="btn-text">更多</span>
    </template>
    <div class="table-btn-more">
        <slot></slot>  
    </div>
  </el-popover>
</template>

<script setup>
import {reactive, ref} from "vue";
const props = defineProps({});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
</style>
