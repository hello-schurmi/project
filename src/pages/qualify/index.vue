<!--
 * @Description:  资质管理
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/pages/qualify/index.vue
-->
<!--  -->
<template>
  <div class="qualify content-box">
    <p class="content-title">资质管理</p>
    <div class="qualify-box">
      <div class="qualify-box-btn top-btn-list">
        <!-- <el-popover placement="bottom"   trigger="click">
          <template #reference>
            <el-button type="primary" size="small">导入/导出</el-button>
          </template>
          <div class="qualify-box-btnlist-popover"> 
            <el-button type="primary" size="small" @click="jump">导入</el-button>
            <el-button type="primary" size="small" @click="jump">导出</el-button>
          </div>
        </el-popover> -->
        <div>
          <el-button type="primary" size="" @click="addData">添加资质</el-button>
        </div>
        <div>
          <!-- <el-button type="success" size="">导入/导出</el-button> -->

          <el-tooltip popper-class="box-item" effect="light" content="导入/导出" placement="top">
            <div class="btn-icon" >
              <Icons name="HourglassFull"  size="12" />
            </div>
          </el-tooltip>

          <el-tooltip popper-class="box-item" effect="light" content="删除" placement="top">
            <div class="btn-icon" >
              <Icons name="delete"  size="12" />
            </div>
          </el-tooltip>

          <!-- <el-button type="danger" size="" @click="jump">删除</el-button> -->

         
          <el-tooltip popper-class="box-item" effect="light" content="切换展示" placement="top">
            <div class="btn-icon" @click="changeTab">
            <Icons name="hamburger" size="12" v-if="tabStyle" style="font-weight: bold; color: black" />
            <Icons name="system" size="12" v-else style="font-weight: bold; color: black" />
            </div>
          </el-tooltip>  
          <!-- <el-button size="" @click="changeTab">
            <Icons name="hamburger" v-if="tabStyle" style="font-weight: bold; color: black" />
            <Icons name="system" v-else style="font-weight: bold; color: black" />
          </el-button> -->
        </div>
      </div>
      <div class="qualify-box-list" v-if="tabStyle">
        <el-table :data="tableData" :header-cell-style="table_header_style" :cell-style="row_style" height="100%" style="width: 100%">
          <template #empty>
            <el-empty description="暂无数据" />
          </template>
          <el-table-column prop="date" label="资质名称" width="300" />
          <el-table-column prop="name" label="主体" width="300" />
          <el-table-column prop="address" label="发证日期" width="140" />
          <el-table-column prop="address" label="资质类别">
            <template #default="{row}">
              <p>类别一个</p>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="qualify-box-list" v-else style="border: 1px solid #ebeef5; padding: 20px 0; padding-left: 20px">
        <el-scrollbar height="100%">
          <div class="work-pic-list">
            <div class="work-pic-list-box" v-for="(item, index) in 22" :key="index">
              <el-card shadow="hover">
                <img src="" alt="" />
              </el-card>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="qualify-box-page">
        <Pages :pageSize="pages.pageSize" :background="true" :pageNum="pages.pageNum" :total="pages.total" @changePage="changePage" />
      </div>
    </div>
    <Drawer size="40%" title="添加证书" ref="drawer">
      <Addata ref="addata"  @cancel="cancel" />
    </Drawer>
  </div>
</template>

<script setup>
import Icons from "@/components/public/icons.vue";
import Addata from "@/components/qualify/addData1.vue";
import Drawer from "@/components/public/drawer.vue";
import Pages from "@/components/public/pages.vue";
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
  {
    date: "第三个资质",
    name: "王小虎",
    address: "2022-22-22",
  },
  {
    date: "第四个资质",
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
const drawer = ref(null);
const addata = ref(null);
function addData() {
  drawer.value.openDrawer().then(() => {
    addata.value.init("aaa");
  });
}

function cancel(){
  drawer.value.closeDrawer();
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
