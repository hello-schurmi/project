<!--
 * @Description: 对话弹框组件
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-07
 * @FilePath: /project/src/components/public/dialogs.vue
-->
<template>
  <el-dialog v-model="dialogShow" :width="props.width" :close-on-click-modal="false" :title="props.title" :destroy-on-close="true">
    <slot></slot>
  </el-dialog>
</template>

<script setup>
import {nextTick, reactive, ref} from "vue";
const props = defineProps({
    title: {
        type: String,
        default: "",
    },
    width: {
        type: String,
        default: "50%",
    },
});
const dialogShow = ref(false);

function openDialog() {
  dialogShow.value = true;
  return nextTick()
}
function closeDialog() {
  dialogShow.value = false;
}
defineExpose({
  openDialog,
  closeDialog,
});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
</style>
