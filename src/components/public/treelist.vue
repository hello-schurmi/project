<!--
 * @Description: 树状图
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-15
 * @FilePath: /project/src/components/public/treelist.vue
-->
<template>
  <div class="tree-box">
    <el-tree :data="dataSource" :expand-on-click-node="false" node-key="id">
      <template #default="{node, data}">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <a @click="append(data)"><Icons name="add" /></a>
            <a style="margin:0 4px" @click="append(data)"><Icons name="edit" /></a>
            <a @click="remove(node, data)"><Icons name="delete" /></a>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
import Icons from "@/components/public/icons.vue";
const props = defineProps({});
const dataSource = reactive([
  {
    id: 1,
    label: "部门一",
    children: [
      {
        id: 4,
        label: "基础部门二",
        children: [
          {
            id: 9,
            label: "基础部门三",
          },
          {
            id: 10,
            label: "基础部门四",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "高级部门一",
    children: [
      {
        id: 5,
        label: "高级部门二",
      },
      {
        id: 6,
        label: "高级部门三",
      },
    ],
  },
  {
    id: 3,
    label: "高级部门二",
    children: [
      {
        id: 7,
        label: "高级部门五",
      },
      {
        id: 8,
        label: "高级部门六",
      },
    ],
  },
]);
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.tree-box {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .el-tree-node__content{
    height: 32px; 
  }
  :deep(.is-current) {
   > .el-tree-node__content {
      background-color: #e3efff;
      .custom-tree-node{
       span:nth-child(1){
        color: #333;
         font-weight: bold;
       }
      }
    }
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color:#606266;
    padding-right: 8px;
  }
}
</style>
