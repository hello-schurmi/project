<!--
 * @Description: 项目管理
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/pages/project/index.vue
-->
<template>
  <div class="project content-box">
    <p class="content-title" >项目管理</p>
    <div class="project-content">
      <div class="project-btn top-btn-list">
        <el-button type="primary" size="" @click="add">添加项目</el-button>
      </div>
      <div class="project-list">
        <el-table :data="tableData"   :header-cell-style="table_header_style" :cell-style="row_style" height="100%" style="width: 100%">
          <template #empty>
            <el-empty description="暂无数据" />    
           </template>
          <el-table-column prop="date" label="资质名称" />
          <el-table-column prop="name" label="主体" />
          <el-table-column prop="address" label="发证日期" />
          <el-table-column prop="address" label="资质类别">
            <template #default="{row}">
              <div>类别一个</div>
              <!-- <div>类别二个</div>
              <div>类别三个</div> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="project-box-page">
        <Pages :pageSize="pages.pageSize" :background="true" :pageNum="pages.pageNum" :total="pages.total" @changePage="changePage" />
      </div>
    </div>
    <Drawer size="40%" title="添加证书" ref="drawer">
      <Addata ref="addata" @cancel="cancel" />
    </Drawer>
  </div> 
</template>

<script setup>
import Addata from "@/components/project/addData.vue";
import Drawer from "@/components/public/drawer.vue";
import Pages from "@/components/public/pages.vue";
import {routerJump, table_header_style, row_style} from "@/assets/js/utils.js";
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

//表格数据
const tableData = reactive([]);
//添加
const drawer = ref(null);
const addata = ref(null);
function add() {
  drawer.value.openDrawer().then(() => {
    addata.value.init("aaa");
  });
}
function cancel(){
  drawer.value.closeDrawer();
}


function jump() {
  routerJump("/home");
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.project {
  .project-content {
    padding: 10px;
    height: $content-padding;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .project-list { 
      // box-shadow: 0 0 3px #ccc;
      height: 0;
      flex: 1;
    }
  }
}
</style>
