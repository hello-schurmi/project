<!--
 * @Description:主体信息
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-03
 * @FilePath: /project/src/components/entity/addEntiry.vue
-->
<template>
  <div class="form-detail"> 
    <el-form label-width="110px"   :model="formData" ref="ruleFormRef" :rules="rules">
      <el-form-item label="主体联系人：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="法人：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="主体名称：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="父级主体：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>

      <el-form-item label="营业范围：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="设立时间：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="注册资本：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="住所：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="地区：" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
    </el-form>
    <div class="flex-right" style="margin-top: 40px;">
      <el-button type="primary" @click="add">添加</el-button>
      <el-button type="info" @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
const props = defineProps({});
const  ruleFormRef=ref(null);
const emit = defineEmits(["submitData", "cancel"]);
const formData = reactive({
  name: "",
  pid:'',
});


//rules
const rules = reactive({
  name: [
    { required: true, message: "请输入主体名称", trigger: "blur" },
    { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" },
  ],
  
});

function initData(data) {
//当前id 为添加元素的父级 id   
  formData.pid = data.id;
}

function add() {
  console.log("添加"); 
  ruleFormRef.value.validate((valid) => {
    if (valid) {
        emit("submitData",formData)
    } 
  });
}
function cancel() { 
    emit("cancel"); 
}

defineExpose({
    initData
})

</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.form-detail {
    .form-detail-title{
        margin-bottom: 20px;
        padding-bottom: 10px;
        font-weight: bold;
        font-size: 14px;
        color: #333;
        border-bottom: 1px solid #ccc;
    }
}
</style>
