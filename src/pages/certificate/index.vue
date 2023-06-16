<!--
 * @Description: 证书管理
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/pages/certificate/index.vue
-->
<template>
  <div class="qualify content-box">
    <p class="content-title">证书管理</p>
    <div class="qualify-box">
      <div class="qualify-box-btn top-btn-list">
        <div>
          <el-button type="primary" size="" @click="addData">添加证书</el-button>
        </div>
        <div>
          <el-tooltip class="box-item" effect="light" content="证书导出" placement="top">
            <div class="btn-icon">
              <Icons name="download" :strokeWidth="5" size="13" />
            </div>
          </el-tooltip>
        </div>
      </div>
      <div class="qualify-box-list" v-if="tabStyle">
        <el-table :data="tableData" :header-cell-style="table_header_style" :cell-style="row_style" height="100%" style="width: 100%">
          <template #empty>
            <el-empty description="暂无数据" />
          </template>
          <el-table-column prop="date" label="证书类型" width="300" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="name" label="身份证" />
          <el-table-column prop="name" label="主体信息" />
          <el-table-column prop="name" label="招聘类型">
            <template #default="{row}">自有外聘</template>
          </el-table-column>
          <el-table-column prop="name" label="聘用时长" />
          <el-table-column prop="name" label="操作">
            <template #default="{row}">
              <span class="btn-text" @click="Look">查看</span>
              <more-btn>
                <span class="btn-text" @click="">编辑</span>
                <span class="btn-text btn-red" @click="">删除</span>
              </more-btn> 
              
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="qualify-box-page">
        <Pages :pageSize="pages.pageSize" :background="true" :pageNum="pages.pageNum" :total="pages.total" @changePage="changePage" />
      </div>
    </div>
    <Drawer size="40%" title="添加证书" ref="drawer1">
      <Addata ref="addata" @cancel="cancel" />
    </Drawer>
    <Drawer size="50%" title="查看详情" ref="drawer">
      <Detail ref="detail" @cancel="cancel" />
    </Drawer>
  </div>
</template>

<script setup>
import MoreBtn from "@/components/public/morebtn.vue";
import Icons from "@/components/public/icons.vue";
import Detail from "@/components/certificate/detail2.vue";
import Addata from "@/components/certificate/addData2.vue";
import Drawer from "@/components/public/drawer.vue";
import Pages from "@/components/public/pages.vue";
import {routerJump, table_header_style, row_style} from "@/assets/js/utils.js";
const props = defineProps({});
const drawer = ref(null);
const drawer1 = ref(null);
const addata = ref(null);
const detail = ref(null);
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

function addData() {
  drawer1.value.openDrawer().then(() => {
    addata.value.init("aaa");
  });
}
function cancel() {
  drawer.value.closeDrawer();
  drawer1.value.closeDrawer();
}
//查看详情
function Look() {
  drawer.value.openDrawer().then(() => {
    detail.value.init("bbb");
  });
}

//切换样式
let tabStyle = ref(true);
function changeTab() {
  tabStyle.value = !tabStyle.value;
}

function jump() {
  routerJump("/home");
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.qualify {
  .qualify-box {
    padding: 10px;
    height: $content-padding; 
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .qualify-box-list {
    
      // box-shadow: 0 0 3px #ccc;
      height: 0;
      flex: 1;

      .work-pic-list {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        overflow-y: auto;
        .work-pic-list-box {
          margin-right: 20px;
          margin-bottom: 20px;
          cursor: pointer;
          img {
            width: 200px;
            height: 150px;
            padding: 0 15px;
            object-fit: cover;
          }
        }
      }
    }
    .qualify-box-page {
      margin-bottom: 10px;
    }
  }
}
</style>
