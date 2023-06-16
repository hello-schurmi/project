<!--
 * @Description:提交单独的文本框
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/components/workorder/formTextArea.vue
-->
<!--  -->
<template>
  <div class="dialog-form">
    <el-input class="dialog-from-input" v-model="form.text" resize="none" :rows="3" type="textarea" placeholder="请输入问题" />
    <div class="flex-right" style="margin-top: 10px">
      <el-button size="small" @click="cancel">取消</el-button>
      <el-button size="small" type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({});
const emit = defineEmits(["submit", "cancel"]);
const form = reactive({
  text: "",
});
function submit() {
  emit("submit", form);
}
function cancel() {
   for (const key in form) {
    form[key] = "";
   }
  emit("cancel");
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.dialog-form {
  padding: 8px;
  .dialog-from-input { 
   :deep(.el-textarea__inner ) {
      font-size: 12px;
      //去掉边框 添加背景色 
      box-shadow: none;
      background-color: #f5f5f5;
      outline: none;
    }
  }
}
</style>
