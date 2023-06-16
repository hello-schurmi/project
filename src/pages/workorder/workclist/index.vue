<!--
 * @Description: 服务记录
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-15
 * @FilePath: /project/src/pages/workorder/workclist/index.vue
-->
<template>
  <div class="qualify content-box">
    <p class="content-title">服务记录</p>
    <div class="qualify-box">
      <div class="top-btn-list flex-right">
        <el-button type="primary" size="" @click="gotoOrder">提交工单</el-button>
      </div>
      <div class="grid-5">
        <div class="form-label">
          <span>问题描述：</span>
          <el-input v-model="searchData.name" placeholder="请输入关键字" clearable></el-input>
        </div>
        <div class="form-label">
          <span>服务编号：</span>
          <el-input v-model="searchData.name" placeholder="请输入服务编号" clearable></el-input>
        </div>

        <div class="form-label">
          <span>提交时间：</span>
          <el-date-picker v-model="searchData.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" align="right" unlink-panels clearable />
        </div>

        <div class="form-label">
          <span>状态：</span>
          <el-select v-model="searchData.type" value-key="" placeholder="" clearable filterable @change="">
            <el-option v-for="item in optionsSearchType" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>

        <div class="flex-right">
          <el-button type="primary" size="" @click="gotoOrder">搜索</el-button>
          <el-button size="" @click="gotoOrder">重置</el-button>
        </div>
      </div>
      <div class="qualify-box-list">
        <el-table :data="tableData" :header-cell-style="table_header_style" :cell-style="row_style" height="100%" style="width: 100%">
          <template #empty>
            <el-empty description="暂无数据" />
          </template>
          <el-table-column prop="date" label="服务编号" width="300" />
          <el-table-column prop="name" label="问题描述" />
          <el-table-column prop="name" label="问题分类" />
          <el-table-column prop="name" label="状态" />
          <el-table-column prop="name" label="提交时间" />
          <el-table-column prop="name" label="沟通方式" />
          <el-table-column prop="name" label="操作">
            <template #default="{row}">
              <span class="btn-text" @click="routerJump('/certificate/detail')">查看</span>
              <span class="btn-text btn-red" @click="routerJump('/certificate/edit')">删除</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="qualify-box-page">
        <Pages :pageSize="pages.pageSize" :background="true" :pageNum="pages.pageNum" :total="pages.total" @changePage="changePage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Pages from "@/components/public/pages.vue";
import {routerJump, table_header_style, row_style} from "@/assets/js/utils.js";
const props = defineProps({});
const tableData = reactive([]);
const searchData = reactive({
  name: "",
  type: "",
});

const optionsSearchType = [
  {label: "全部", value: ""}, 
  {label: "处理中", value: "2"}, 
  {label: "已关闭", value: "4"},
];

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

//跳转
function gotoOrder() {
  window.location.href = "/workorder/workcreate";
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
