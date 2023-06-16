<!--
 * @Description:侧边滑出
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-06
 * @FilePath: /project/src/components/public/drawer.vue
-->
<template>
  <el-drawer :destroy-on-close="true" v-model="drawerShow" :size="props.size" :with-header="false">
    <p class="drawer-title">
      <span>{{ props.title }}</span>
      <el-button link size="small" @click="">
        <Icons name="close-small" size="18" style="cursor: pointer;" @click="closeDrawer" />
      </el-button> 
    </p>
    <div class="drawer-box">
      <slot></slot>
    </div>
   
  </el-drawer>
</template>

<script setup>
 import Icons from "@/components/public/icons.vue"; 
import { nextTick } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "30%",
  },
  title: {
    type: String,
    default: "",
  },
});
const drawerShow = ref(false);

function openDrawer() {
  drawerShow.value = true;
  return nextTick()
}
function closeDrawer() {
  drawerShow.value = false;
}
defineExpose({
  openDrawer,
  closeDrawer
});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
</style>
