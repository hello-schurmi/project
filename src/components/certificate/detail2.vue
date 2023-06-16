<!--
 * @Description: 详情
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-12
 * @FilePath: /project/src/components/certificate/detail2.vue
-->
<template>
  <div class="detail-info">
    <p class="detail-info-title">基本信息</p>
    <el-descriptions class="margin-top" size="small" :column="3" :size="size" border>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">姓名</div>
        </template>
        kooriookami
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">身份证</div>
        </template>
        18100000000
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">选择主体</div>
        </template>
        天津市和平区高科技有限公司
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">岗位</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">等级</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">专业</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">证书情况</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">B本</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">社保</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">年限</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">聘用周期</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">聘用时长(月)</div>
        </template>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">招聘类型</div>
        </template>
      </el-descriptions-item>
    </el-descriptions>
  </div>
  <div class="detail-list">
    <p class="detail-info-title">转调记录</p>
    <div class="detail-lis-l">
      <el-scrollbar height="60vh">
        <div class="detail-list-box" v-for="(item, index) in 10" :key="index">
          <el-tag>转入</el-tag>
          <span class="time">2011-11-22</span>
          <span class="info">转入积分多少华府丹郡客户撒舒服了哈转入积分多少华府丹郡客户撒舒服了哈  </span>
        </div>
      </el-scrollbar>
      <img src="" alt="" />
      
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
const props = defineProps({});
function init(val) {
  console.log(val);
}
function cancel() {
  emit("cancel");
}
defineExpose({
  init,
});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.detail-info {
  margin-bottom: 20px;
  .detail-info-title {
    margin-bottom: 10px;
    font-size: 12px;
    color: #333;
  }
}
.detail-lis-l { 
  
}
.detail-list {
  .detail-info-title {
    margin-bottom: 10px;
    font-size: 12px;
    color: #333;
  }
  .detail-list-box {
    font-size: 12px;
    color: #333;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    .time {
      margin-right: 10px;
      margin-left: 10px;
      margin-top: 5px;
      color: #909399;
      flex: none;
    }
    .info {
      flex: 1;
      color: #606266;
      line-height: 1.2em; 

    }
  }
}
</style>
