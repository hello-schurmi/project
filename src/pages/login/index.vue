<!--
 * @Description: 登录页
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/pages/login/index.vue
-->

<template>
  <!-- <Bg :top="200" /> -->
  <div class="login-waper">
    <div class="login-left">
      <img src="@/assets/images/login-bg1.svg" alt="" />
    </div>
    <div class="login-right">
      <div class="login-form">
        <p class="login-title">高科技的后台管理</p>
        <div class="login-info">
          <el-form :model="formData"  label-position="top" size="large" ref="form" label-width="0px" :inline="false">
            <el-form-item label="用户名">
              <el-input class="login-in" v-model="formData.name" placeholder="请输入用户名">
                <template #prefix>
                  <Icons name="avatar" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="密码" >
              <el-input class="login-in" v-model="formData.password" placeholder="请输入密码">
                <template #prefix>
                  <Icons name="lock" />
                </template>
              </el-input>
            </el-form-item>

            <el-button :loading="submitLoading" style="width: 100%; margin-top: 8px"  size="large" type="primary" @click="onSubmit">登录</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="login-box">
    <p class="title">高科技的后台管理</p>
    <div class="login-input">
      <el-form :model="formData" ref="form" label-width="0px" :inline="false" size="">
        <el-form-item>
          <el-input class="login-in" v-model="formData.name" placeholder="请输入用户名">
            <template #prefix>
              <Icons name="avatar" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="login-in" v-model="formData.password" placeholder="请输入密码">
            <template #prefix>
              <Icons name="lock" />
            </template>
          </el-input>
        </el-form-item>
         
        <el-button :loading="submitLoading" style="width: 100%;margin-top: 3px;" size="" type="primary" @click="onSubmit">登录</el-button>
      </el-form>
    </div>
  </div> -->
</template>

<script setup>
import Icons from "@/components/public/icons.vue";
// import Bg from "@/components/login/bg.vue";
import {routerJump} from "@/assets/js/utils.js";
import {reactive, ref} from "vue";
const props = defineProps({});

let formData = reactive({
  name: "",
  password: "",
});

let submitLoading = ref(false);
function onSubmit() {
  submitLoading.value = true;
  setTimeout(() => {
    submitLoading.value = false;
    routerJump("/work");
  }, 1000);
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/

.login-waper {
  width: 100%;
  height: 100%;
  display: flex;
  .login-left {
    background: #216bee;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
    text-align: left;
    overflow: hidden;
  }
  .login-right {
    flex-grow: 1;
    position: relative;
    // height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  padding-top: 20vh;
    .login-form {
      width:400px;
      
      .login-title {
        font-size: 28px;
        color: #1f2126;
      }
      .login-info{
        margin-top: 40px;
      }
    }
  }
}

.login-box {
  position: relative;
  top: 45%;
  left: 80%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  background: inherit;
  border-radius: 4px;
  // background: red;
  padding: 0 50px;
  padding-top: 40px;
  padding-bottom: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.7);
  .title {
    text-align: center;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin-bottom: 40px;
  }
  .login-input {
    .login-in {
      :deep(.el-input__wrapper) {
        input {
          color: #fff !important;
        }
        background-color: rgba(255, 255, 255, 0.247);
        color: #fff !important;
        box-shadow: none !important;
        .el-icon {
          color: #fff !important;
        }
        // color: #fff!important;
        //  background-color:rgba(255,255,255,0.1);
      }
    }
  }
}
</style>
