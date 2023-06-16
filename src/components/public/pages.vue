<!--
 * @Description: 分页
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-02
 * @FilePath: /project/src/components/public/pages.vue
-->

<template>
  <div class="pagination">
    <el-pagination :page-size="props.pageSize" :current-page="pageNum" @current-change="changePage" :total="props.total" :pager-count="5" :background="props.background" small layout="prev, pager, next" />
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
const props = defineProps({
  //是否显示背景色
  background: {
    type: Boolean,
    default: false,
  },
  //当前页
  pageNum: [String, Number],
  //每页显示条数
  pageSize: [String, Number],
  //数据总数
  total: [String, Number],
});

//点击页数
const emit = defineEmits(["changePage"]);
function changePage(val) {
  emit("changePage", val);
}
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.pagination {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>
