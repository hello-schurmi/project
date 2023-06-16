<!--
 * @Description:添加证书
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-12
 * @FilePath: /project/src/components/certificate/addData2.vue
-->
<template>
  <div class="addData">
    <el-form ref="formRef" :model="formData" label-width="80px" class="demo-dynamic">
      <el-form-item prop="region" label="姓名" :rules="[{required: true, message: '姓名不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item prop="region" label="身份证" :rules="[{required: true, message: '身份证不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="请输入身份证"></el-input>
      </el-form-item>
      <el-form-item prop="region" label="选择主体" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="岗位" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="等级" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="专业" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="证书情况" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="B本" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="社保" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="年限" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="聘用周期" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="聘用时长" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择内容"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="招聘类型" :rules="[{required: true, message: '招聘类型不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择招聘类型">
          <el-option label="自有" value="1"></el-option>
          <el-option label="外聘" value="2"></el-option>
        </el-select>
      </el-form-item>
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
const emit = defineEmits(["submitData", "cancel"]);

const formData = reactive({
  region: "",
});

function init(val) {
  console.log(val);
}
function cancel() {
  emit('cancel');
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
