<!--
 * @Description: 提交工单
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-14
 * @FilePath: /project/src/pages/workorder/workcreate/index.vue
-->

<template>
  <div class="qualify content-box">
    <p class="content-title">提交工单</p>
    <div class="workorder-waper">
      <div class="workorder-list">
        <div class="workorder-list-box" v-for="(item, index) in 4" :key="index">
          <p class="title">购买咨询</p>
          <p class="info">
            <span>产品购买、续费等售前相关问题</span>
            <img src="@/assets/images/icon-01.png" alt="" />
          </p>
        </div>
      </div>
      <div class="workorder-list-small">
        <div class="small-box" v-for="(item, index) in 7" :key="index" @click="showInfo">
          <div class="small-box-cont">网站访问异常</div>
        </div>
      </div>
      <div class="workorder-list-other">
        <el-popover placement="right" :visible="visibleText" :width="400" trigger="click">
          <template #reference>
            <span class="btn-text" @click="showText" >未查询到想要的问题？</span>
          </template>
          <FormText  ref="formtext" @submit="submitText" @cancel="cancelText" />
        </el-popover>
      </div>
    </div>
    <Drawer size="60%" ref="drawer" title="为您推荐如下方案">
      <Info ref="info" @cancel="cancel" />
    </Drawer> 
  </div>
</template>

<script setup>
import FormText from "@/components/workorder/formTextArea.vue";
import Info from "@/components/workorder/info.vue";
import Dialogs from "@/components/public/dialogs.vue";
import Drawer from "@/components/public/drawer.vue";
import {routerJump, table_header_style, row_style} from "@/assets/js/utils.js";
const props = defineProps({});
const drawer = ref(null);
const info = ref(null);
let dialogs = ref(null);
let formtext = ref(null);
let visibleText = ref(false);
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

//分页
const pages = reactive({
  pageSize: 10,
  pageNum: 1,
  total: 40,
});
function changePage(page) {
  console.log(page);
  pages.pageNum = page;
}

//添加数据

function showInfo() {
  drawer.value.openDrawer().then(() => {
    info.value.init("aaa");
  });
}
function cancel() {
  drawer.value.closeDrawer();
}

//提交工单
function showText() {
  visibleText.value = true; 
}
function submitText(data) {
  console.log(data);
  visibleText.value = false; 
  routerJump("/workorder/workdialogs");
}
function cancelText() {
  visibleText.value = false; 
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.workorder-waper {
  border-radius: 2px;
  height: calc(100% - 80px);
  padding: 20px;
  border: 1px solid #ebeef5;
}
.workorder-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  column-gap: 16px;
  margin-bottom: 20px;
  .workorder-list-box {
    cursor: pointer;
    height: 70px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    background-image: linear-gradient(147deg, #ebf6ff, #fff 52%, #fff);
    padding: 18px;
    overflow: hidden;
    position: relative;

    &:hover {
      padding: 17px;
      border: 1px solid rgba(0, 100, 200, 0.4);
      transform: translateY(-5px);
      transition: transform 0.5s, transform 0.5s;
    }
    .title {
      font-size: 16px;
      color: #171717;
      margin-bottom: 10px;
    }
    .info {
      color: #969799;
      font-size: 13px;
      display: flex;
      letter-spacing: 0.5px;
      justify-content: space-between;
      > span {
        flex: none;
        width: 190px;
      }
      > img {
        width: 96px;
        height: 96px;
        position: absolute;
        bottom: 4px;
        right: -24px;
      }
    }
  }
  .workorder-list-box + .workorder-list-box {
    margin-left: 20px;
  }
}
.workorder-list-small {
  margin-top: 2px;
  padding: 12px 16px;
  background-color: #fafafa;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  gap: 10px;
  margin-bottom: 10px;
  .small-box {
    cursor: pointer;
    height: 44px;
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding: 0 18px;
    &:hover {
      background-color: hsla(0, 0%, 91.8%, 0.9);
    }
    .small-box-cont {
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 14px;
      color: #171717;
      &::before {
        display: block;
        content: "";
        background-color: #171717;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }
}
.workorder-list-other {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 13px;
  color: #969799;
}
</style>
