<!--
 * @Description:  我的
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-15
 * @FilePath: /project/src/pages/qualifyStandard/index.vue
-->
<!--  -->
<template>
  <div class="qualify content-box">
    <p class="content-title">资质标准</p>
    <div class="qualify-box">
      <div class="qualify-box-btn top-btn-list">
        <el-select v-model="search.data" value-key="" placeholder="" clearable filterable @change=""></el-select>
        <span class="width-30"></span>
        <el-select v-model="search.data" value-key="" placeholder="" clearable filterable @change=""></el-select>
        <span class="width-30"></span>
        <el-select v-model="search.data" value-key="" placeholder="" clearable filterable @change=""></el-select>
        <el-button style="margin-left: 15px;" type="primary" size="" @click="searchData">资质查询</el-button>
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
              <span>类别一个</span>
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
      <Addata ref="addata" @cancel="cancel" />
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
const tableData = reactive([]);

//搜索
const search = reactive({
  data: "",
  data2: "",
  data3: "",
});
function searchData() {
  console.log(search.data);
}
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

function cancel() {
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
    .qualify-box-btn {
      justify-content: flex-start !important;
      width: 750px;
    }
    padding: 10px;
    height: $content-padding;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .qualify-box-list {
      
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
