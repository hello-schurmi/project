<!--
 * @Description: 添加项目
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-09
 * @FilePath: /project/src/components/project/addData.vue
-->

<template>
  <div class="project">
    <el-form ref="formRef" :model="formData" label-width="90px" class="demo-dynamic">
      <el-form-item prop="region" label="项目主体" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择项目主体"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="项目名称" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="请添加项目名称"></el-input>
      </el-form-item>
      <el-form-item prop="region" label="项目属地" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.region" placeholder="请添加项目属地"></el-input>
      </el-form-item>
      <el-form-item prop="region" label="项目类别" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择项目类别"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="开启打卡" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择项目类型"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="打开范围" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择项打开范围">
          <el-option label="1公里" value="1"></el-option>
          <el-option label="2公里" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="region" label="目的地位置" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-input v-model="formData.address" placeholder="请选择目的地位置">
          <template #append>
            <el-button @click="openMap">
              <Icons size="16" color="#409EFF" name="local-two" />
            </el-button>
            <!-- <span style="cursor: pointer;display: flex;align-items: center;" @click="openMap">
                <Icons size="20" color="#409EFF" name="local-two" />
            </span> -->
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="region" label="关联员工" :rules="[{required: true, message: '内容不能为空', trigger: 'blur'}]">
        <el-select v-model="formData.region" placeholder="请选择项关联员工"></el-select>
      </el-form-item>
      <el-form-item prop="region" label="相关资料">
        <!-- 招标投标书  项目合同 项目图纸 竣工验收报告 现场照片 -->
        <el-row style="width: 100%">
          <el-col :span="5">
            <div class="project-upload">
              <Upload />
              <span>招标投标书</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="project-upload">
              <Upload />
              <span>项目合同</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="project-upload">
              <Upload />
              <span>项目图纸</span>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="project-upload">
              <Upload />
              <span>竣工验收报告</span>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="project-upload">
              <Upload />
              <span>现场照片</span>
            </div>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
   
    <div class="submit-box"> 
      <el-divider />
      <el-button type="primary" @click="init">提交</el-button>
      <el-button type="" @click="cancel">取消</el-button>
    </div>

    <Dialogs ref="dialogs" title="选择目的地位置">
      <GdMap ref="gdmap" @submitData="getMapAdd" />
    </Dialogs>
  </div>
</template>

<script setup>
import GdMap from "@/components/public/gdMap.vue";
import Dialogs from "@/components/public/dialogs.vue";
import Icons from "@/components/public/icons.vue";
import Upload from "@/components/public/upload.vue";
const props = defineProps({});
const emit = defineEmits(["submitData", "cancel"]);
function init(val) {
  console.log(val);
}
const formData = reactive({
  region: "",
  address: "",
});
//打开地图
let dialogs = ref(null);
let gdmap = ref(null);
function openMap() {
  dialogs.value.openDialog().then(() => {
    gdmap.value.init();
  });
}
//获取地图地址
function getMapAdd(data) {
  dialogs.value.closeDialog();
  console.log(data);
}
function cancel() { 
    emit("cancel"); 
}



defineExpose({
  init,
});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.project {
  .project-upload {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
      color: #606266;
      font-size: 13px;
    }
  }
  .submit-box {
    margin-top: 50px;
    text-align: right;
  }
}
</style>
