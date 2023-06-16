<!--
 * @Description:  我的
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/pages/person/index.vue
-->

<template>
  <div class="person content-box">
    
    <p class="content-title">员工管理</p> 
    <div class="person-box">
      <div class="person-box-tree">
         <p style="margin-bottom: 10px;"> <el-button type="primary" size="" @click="addData">添加部门</el-button></p> 
         <div>
          <tree-list />
         </div>  
      </div>
            <div class="person-list-box">
        <div class="person-box-btn top-btn-list"> 
          <div>
            <el-button type="primary" size="" @click="addData">添加员工</el-button>
          </div>
          <div>
            <el-tooltip popper-class="box-item" effect="light" content="员工转调" placement="top">
              <div class="btn-icon">
                <Icons name="HourglassFull" size="12" />
              </div>
            </el-tooltip>
            <el-tooltip popper-class="box-item" effect="light" content="导入员工" placement="top">
              <div class="btn-icon" @click="changeTab">
                <Icons name="hamburger" size="12" v-if="tabStyle" style="font-weight: bold; color: black" />
                <Icons name="system" size="12" v-else style="font-weight: bold; color: black" />
              </div>
            </el-tooltip>
          </div>
        </div>
        <div class="person-box-list">
          <el-table :data="tableData" :header-cell-style="table_header_style" :cell-style="row_style" height="100%" style="width: 100%">
            <template #empty>
              <el-empty description="暂无数据" />
            </template>
            <el-table-column prop="date" label="姓名" />
            <el-table-column prop="name" label="性别" />
            <el-table-column prop="address" label="手机号" />
            <el-table-column prop="address" label="身份证号" />
            <el-table-column prop="address" label="毕业院校" />
            <el-table-column prop="address" label="学历" />
            <el-table-column prop="address" label="资料" />
          </el-table>
        </div>
        <div class="qualify-box-page">
          <Pages :pageSize="pages.pageSize" :background="true" :pageNum="pages.pageNum" :total="pages.total" @changePage="changePage" />
        </div>
      </div> 
    </div> 
    <Drawer size="40%" title="添加人员" ref="drawer">
      <Addata ref="addata" @cancel="cancel" />
    </Drawer>
     
  </div>
</template>

<script setup>
import Addata from "@/components/person/addData.vue";
import Drawer from "@/components/public/drawer.vue";
import Pages from "@/components/public/pages.vue";
import {routerJump, table_header_style, row_style} from "@/assets/js/utils.js";
import TreeList from "@/components/public/treelist.vue";

const props = defineProps({});

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
function jump() {
  routerJump("/home");
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.person {
 
  .person-box {
    height: 100%;
    padding: 10px;
    padding-bottom: 0px;
    padding-left: 0;
    height: $content-padding;
    display: flex; 
    background-color: #fff;
    
 
    .person-box-tree {
      width: 250px;
      padding-right: 5px;
      height: 100%;
      border-right: 1px solid #ccc;
    }
    .person-list-box {
      margin-left: 8px;
      flex: 1;
      .person-box-btn {
        margin-bottom: 10px;
      }
      .person-box-list {
        flex: 1;
        height: calc(100% - 100px);
      }
      .qualify-box-page {
        padding: 5px;
        background-color: #fff;
        
      }
    }
  }
}
</style>
