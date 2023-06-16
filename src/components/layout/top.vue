<!--
 * @Description: 顶部 横向 信息
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/components/layout/top.vue
-->
<!--  -->
<template>
  <div class="top-nav">
    <div class="top-nav-left">
      <div class="top-nav-left-logo">
        <Icons name="setting-two" size="24" fill="#333" />
        <!-- <img src="" alt="" /> -->
      </div>
      <div class="top-nav-left-title" @click="test">高级云</div>
    </div>

    <div class="work-hot">
      <img class="marquee" src="@/assets/images/hot.png" alt="" />
      <p class="work-marquee-box">
        <span>防守打法是否肯定会上课了发货</span>
      </p>
    </div>

    <div class="top-nav-right">
      <el-popover placement="bottom" :offset="0" :hide-after="5" :width="200" trigger="hover">
        <template #reference>
          <div class="top-nav-right-user">
            <div class="user-info">
              <span class="user-info-name">111111@126.com</span>
              <span class="user-info-role">admin</span>
            </div>
            <!-- <img src="" alt="" /> -->
            <Icons name="me" size="24" />
          </div>
        </template>
        <el-descriptions title="" :column="1" size="small">
          <el-descriptions-item label="账号">kooriookami</el-descriptions-item>
          <el-descriptions-item label="角色">18100000000</el-descriptions-item>
          <el-descriptions-item label="信息">Suzhou</el-descriptions-item>
          <el-descriptions-item label="Remarks">
            <el-button link size="small" @click="logOut">退出</el-button>
          </el-descriptions-item>
        </el-descriptions>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
import Icons from "@/components/public/icons.vue";
import {confirmBox, routerJump} from "@/assets/js/utils.js";
const props = defineProps({});

function test() {
  confirmBox("吃啥")
    .then(res => {
      console.log(res);
    })
    .catch(err => {});
}

//退出登录
function logOut() {
  confirmBox("确定退出登录吗？")
    .then(res => {
      routerJump("/login");
    })
    .catch(err => {});
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.top-nav {
  color: #666;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  .top-nav-left {
    display: flex;
    align-items: center;
    width: 208px;
    color: #333;
    .top-nav-left-logo {
      width: 24px;
      height: 24px;
      //   border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .top-nav-left-title {
      margin-left: 10px;
      font-size: 17px;
    }
  }
  .work-hot {
    padding: 8px 15px;
    position: absolute;
    background: #f5f5f5;
    top: 20%;
    left: 50%;
    margin-left: -300px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
    > img {
      height: 12px;
      margin-right: 5px;
    }
    .marquee {
      display: inline-block; 
      animation: marquee 3s linear infinite;
    }
    .work-marquee-box {
      height: 10px;
      font-size: 12px;
      display: inline-block;
      color: #333;
      padding: 2px 5px;
      border-radius: 2px;
      width: 400px;
      overflow: hidden;
    }
  }

  @keyframes marquee {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  .top-nav-right {
    display: flex;
    align-items: center;
    color: #333;
    .top-nav-right-user {
      height: 100%;
      display: flex;
      align-items: center;
      .user-info {
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        .user-info-name {
          color: #333;
          line-height: 20px;
        }
        .user-info-role {
          color: #333;
        }
        span {
          font-size: 12px;
        }
      }
      img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }
}
</style>
