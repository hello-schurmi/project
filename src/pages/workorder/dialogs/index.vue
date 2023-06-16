<!--
 * @Description: 对话
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-14
 * @FilePath: /project/src/pages/workorder/dialogs/index.vue
-->
<template>
  <div class="content-box">
    <!-- <p class="content-title">对话</p> -->
    <div class="dialog flex-between">
      <div class="dialog-list">
        <p class="dialog-title">
          在线服务
          <i>售后在线实时沟通，快速解决您的问题</i>
        </p>
        <div class="dialog-waper">
          <el-scrollbar style="height: 100%">
            <div class="dialog-list-c" v-infinite-scroll="load" infinite-scroll-delay="100">
              <Dialogs />
            </div>
          </el-scrollbar>
        </div>
        <div class="dialog-input">
          <div class="input-box">请描述您的问题</div>
          <div class="input-btn">
            <el-button type="primary" @click="send">发送</el-button>
          </div>
        </div>
      </div>
      <div class="dialog-info">
        <el-card shadow="hover">
          <div class="card-heard">服务公告</div>
          <div class="news-list">
            <p v-for="(item, index) in 2" :key="index">
              <b></b>
              <span>关于2021年度第一批省级技能大师工作室申报的通知</span>
            </p>
            <p v-for="(item, index) in 2" :key="index">
              <b></b>
              <span>关于2021年度第一批省级技能大</span>
            </p>
          </div>
        </el-card>
        <el-card shadow="hover" style="margin-top: 20px">
          <div class="card-heard">快捷入口</div>
          <div class="tools-list">
            <div class="tools-box" v-for="(item, index) in 5" :key="index">高级自助工具</div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dialogs from "@/components/dialogs/dialog.vue";
import {routerJump, table_header_style, row_style} from "@/assets/js/utils.js";

const props = defineProps({});
const tableData = reactive([
  {
    date: "第一个资质",
    name: "王小虎",
    address: "2022-22-22",
  },
  {
    date: "第二个资质",
    name: "王小虎",
    address: "2022-22-22",
  },
]);

//添加数据
const drawer = ref(null);
const addata = ref(null);
function addData() {
  drawer.value.openDrawer().then(() => {
    addata.value.init("aaa");
  });
}

//切换样式
let tabStyle = ref(true);
function changeTab() {
  tabStyle.value = !tabStyle.value;
}

//滚动
function load() {
  console.log(111);
}

function jump() {
  routerJump("/home");
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.dialog {
  height: calc(100% - 20px);
  width: 80vw;
  margin: 0 auto;
  padding: 10px 0;
  min-width: 1000px;

  .dialog-list {
    flex: 1;
    height: 100%;
    background: #fff;
    margin-right: 15px;
    display: flex;
    flex-direction: column;

    .dialog-title {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #333;
      padding-left: 15px;
      border-bottom: 1px solid #f0f0f0;
      border-top: 2px solid #0064c8;
      box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.15);
      position: inherit;
      z-index: 1;
      > i {
        margin-left: 16px;
        color: #c1c1c1;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
      }
    }

    .dialog-waper {
      flex: none;
      height: 0;
      flex: 1;
      overflow-y: auto;
      background: #f5f5f5;
      .dialog-list-c {
        padding: 0 15px;
        background: #f5f5f5;
      }
      // padding: 0 15px;
    }
    .dialog-input {
      flex: none;
      height: 100px;
      background: #f5f5f5;
      border-top: 1px solid #e6e6e6;
      padding: 15px;
      .input-box {
        height: 75px;
        font-size: 12px;
        color: #606266;
      }
      .input-btn {
        text-align: right;
      }
    }
  }
  .dialog-info {
    height: 100%;
    flex: none;
    width: 300px;
    display: flex;
    flex-direction: column;

    .news-list {
      margin-top: 10px;
      padding: 0 15px;

      > p {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #f0f0f0;
        > b {
          width: 5px;
          height: 5px;
          background-color: #e6a23c;
          border-radius: 50%;
          margin-right: 10px;
        }
        > span {
          &:first-child {
            font-size: 1px;
            color: #606266;
          }
          &:last-child {
            font-size: 12px;
            color: #909399;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
          }
        }
        span:hover {
          color: #79bbff;
          cursor: pointer;
        }
      }
    }
    .tools-list {
      display: flex;
      flex-wrap: wrap;
      padding: 0 15px;
      .tools-box {
        height: 20px;
        width: 45%;
        line-height: 20px; 
        padding: 6px 0;
        font-size: 12px;
        color: #333;
        text-align: center;   
        border-bottom: 1px solid #f0f0f0;
        margin: 0 5px;
        &:hover {
          background-color: #f5f5f5;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
