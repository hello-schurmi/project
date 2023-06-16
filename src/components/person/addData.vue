<!--
 * @Description:添加资质
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-09
 * @FilePath: /project/src/components/person/addData.vue
-->

<template>
  <div class="addData">
    <el-form ref="formRef" :model="formData" label-width="80px" class="demo-dynamic">
      <el-form-item prop="region" label="姓名" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
         <el-input v-model="formData.region" placeholder="" size="normal" clearable @change=""></el-input> 
      </el-form-item>
      <el-form-item prop="region" label="性别" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="" size="normal" clearable @change=""></el-input> 
      </el-form-item>
      <el-form-item prop="region" label="手机号" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="" size="normal" clearable @change=""></el-input> 
      </el-form-item>
      <el-form-item prop="region" label="身份证号" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="" size="normal" clearable @change=""></el-input> 
      </el-form-item>
      <el-form-item prop="region" label="毕业院校" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      
      <el-form-item prop="region" label="学历" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="" size="normal" clearable @change=""></el-input>
      </el-form-item>
      <!-- <el-row :gutter="24">
        <el-col :span="12">
          <el-form-item prop="region" label="绑定主体" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
            <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="region" label="有效期" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
            <el-date-picker v-model="formData.region" type="year"   placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row> -->
       
    </el-form>
    <div class="submit-box">
      <el-divider />
      <el-button type="primary" @click="init">提交</el-button>
      <el-button type="" @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({});
let emit = defineEmits(["cancel"]);
function init(val) {
  console.log(val);
}
const formData = reactive({
  region: "",
  region1:''
});

function cancel() {
  emit("cancel");
}

defineExpose({
  init,
});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.addData {
  .submit-box {
    margin-top: 50px;
    text-align: right;
  }
}
</style>
