<!--
 * @Description: 主体详情
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-05
 * @FilePath: /project/src/components/entity/detail.vue
-->

<template>
  <div class="entity-detail">
    <div class="entity-detail-title">
      <p class="title">汽车集团股份有限公司</p>
      <div class="info">
        <span class="info-box" >
          <span style=" width: 73px;">主体联系人：</span>
          xxxxxx
        </span>
        <span class="info-box">
          <span>设立时间：</span>
          xxxxxx
        </span>

        <span class="info-box">
          <span>法人信息：</span>
          xxxxxx
        </span>

        <span class="info-box" style="color: #fe9024">
          <span> 注册资本：</span>9999
        </span>

        <span class="info-box">
          <span>企业地区：</span>
          xxxxxx
        </span>
        <span class="info-box">
          <span>父级主体：</span>
          xxxxxx
        </span>

        <span class="info-box">
          <span>营业范围：</span>
          制造业 汽车制造业 汽车整车制造 汽柴油车整车制造
        </span>
        <span class="info-box">
          <span>企业地址：</span>
          中国(上海)自由贸易试验区松涛路563号1号楼509室
        </span>
      </div>
    </div>
    <div class="entity-detail-list">
      <el-tabs type="border-card" v-model="tabValue" >
        <el-tab-pane name="1" label="资质信息"></el-tab-pane>
        <el-tab-pane name="2" label="员工信息"></el-tab-pane>
        <el-tab-pane name="3" label="证书信息"></el-tab-pane> 
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
const props = defineProps({});
let tabValue= ref("1");

</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.entity-detail {
  width: 100%;
  .entity-detail-title {
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    .title {
      color: #404040;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 15px;
      padding: 10px;
      background: rgba(0,136,255,.1);
    }
    .info {
      margin-top: 10px; 
      .info-box {
        display: inline-block;
        max-width: 30em;
        min-width: 225px;
        color: #404040;
        font-size: 13px;
        line-height: 20px; 
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 8px; 
        text-overflow: ellipsis;
        > span {
          display: inline-block;
          color: rgba(0, 0, 0, 0.4);
          width: 60px;
          text-align: left;
        }
      }
    }
  }
  .entity-detail-list {
    :deep(.el-tabs__item) {
      font-size: 12px!important;
    } 
  }
}
</style>
