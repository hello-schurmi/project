<!--
 * @Description:主体内容
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-15
 * @FilePath: /project/src/pages/entity/index.vue
-->

<template>
  <div class="entity content-box">
    <p class="content-title" >主体管理</p>
    <!-- <div class="entity-top">
      <el-button type="primary" @click="addEntity">添加主体</el-button>
    </div> -->
    <div class="entity-box">
      <vue3-tree-org :data="nodeData.data" :center="nodeData.center" :node-draggable="false" :scalable="nodeData.scalable" :horizontal="nodeData.horizontal" :label-style="nodeData.style" :default-expand-level="3" :tool-bar="nodeData.toolBar">
        <template v-slot="{node}">
          <div class="tree-org-node__text node-label">
            <div class="tree-org-node-box" v-if="node.id != 1" @click.stop="onNodeClick(node)">
              <img class="tree-org-bg" src="@/assets/images/card-bg.jpg" alt="" />
              <div class="tree-title">
                {{ node.label }}
                <p style="display: flex; align-items: center">
                  <Icons color="#409EFF" name="editor" size="14" @click.stop="addNode(node)" />
                  <Icons style="margin: 0 4px" color="#409EFF" name="add" size="14" @click.stop="addNode(node)" />
                  <el-popconfirm v-if="!node.children || (node.children && node.children.length < 1)" width="170" confirm-button-text="确认" cancel-button-text="取消" title="是否删除该节点？" @confirm="confirmEvent(node)">
                    <template #reference>
                      <Icons style="margin-bottom: 2px" color="#F56C6C" name="delete" size="15" @click.native.stop />
                    </template>
                  </el-popconfirm>
                </p>
              </div>
              <p class="tree-info">
                <span>联系人：</span>
                <span>xxx</span>
              </p>
              <p class="tree-info">
                <span>法人：</span>
                <span>{{ node.id }}</span>
              </p>
              <p class="tree-info">
                <span>住所：</span>
                <span>xxx</span>
              </p>
              <p class="tree-info">
                <span>成立时间：</span>
                <span>xxsssx</span>
              </p>
            </div>
            <div class="tree-org-node-box1" v-if="node.id == 1">
              <p>
                <Icons name="network-tree" stay="left" />
                主体管理 
                <el-button link size="small" @click="addNode(node)">
                  <Icons color="#409EFF" name="add" size="14" />
                </el-button>

                <!-- <span style="cursor: pointer;"> <Icons name="add" stay="right" size="14" style="margin-left: 10px;color: #409EFF"/></span> -->
              </p>
            </div>
          </div>
        </template>
      </vue3-tree-org>
    </div>
    <Drawer ref="drawer" title="添加主体">
      <AddEntiry ref="addentiry" @submitData="submitData" @cancel="cancel" />
    </Drawer>
    <Drawer size="55%" title="主体详情" ref="drawer2">
      <EntityDetail />
    </Drawer>
  </div>
</template>

<script setup>
import EntityDetail from "@/components/entity/detail.vue";
import AddEntiry from "@/components/entity/addEntiry.vue";
import Drawer from "@/components/public/drawer.vue";
import Icons from "@/components/public/icons.vue";
const props = defineProps({});
const nodeData = reactive({
  data: {
    id: 1,
    pid: 0,
    label: "xxx科技有限公司",
    children: [
      {
        id: 2,
        pid: 1,
        label: "xxx科技子公司",
        children: [],
      },
      {
        id: 3,
        pid: 1,
        label: "xxx科技高级子公司",
        children: [{id: 9, pid: 3, label: "科技高级子公司一部", children: []}],
      },
    ],
  },
  horizontal: false,
  expandAll: true,
  toolBar: false,
  scalable: false,
  center: true,
  style: {
    background: "#fff",
    color: "#5e6d82",
    fosntSize: "14px",
  },
});

const drawer = ref(null);
const addentiry = ref(null);

//主体点击事件
const drawer2 = ref(null);
function onNodeClick(data) {
  drawer2.value.openDrawer();
}

//主体添加
function addNode(data) {
  drawer.value.openDrawer().then(() => {
    addentiry.value.initData(data);
  }); 
}
//主体删除
function delNode(data) {
  console.log(data);
}
//主体确认删除
function confirmEvent(data) {
  console.log(data);
  findNodeDel(nodeData.data, data.id, data.pid);
}

//主体提交
function submitData(dat) {
  console.log(dat);
  //时间戳毫秒
  let _d = new Date().getTime();
  let _data = {
    id: _d,
    pid: dat.pid,
    label: dat.name,
    children: [],
  };
  console.log(_data);
  findNode(nodeData.data, _data, _data.pid);
  drawer.value.closeDrawer();
}
//递归寻找添加子公司
function findNode(data, addData, id) {
  if (data.id === id) {
    data.children.push({
      ...addData,
    });
  } else {
    data.children &&
      data.children.forEach(item => {
        findNode(item, addData, id);
      });
  }
}
//递归寻找删除子公司
function findNodeDel(data, id, pid) {
  if (data.id === pid) {
    console.log(111);
    data.children = data.children.filter(item => item.id !== id);
  } else {
    data.children &&
      data.children.forEach(item => {
        findNodeDel(item, id, pid);
      });
  }
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
.entity {
 
  .entity-top {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    
  }
  .entity-box {
    height: calc(100% - 40px);
    width: 100%;
   
    .zm-tree-org{ 
      margin: 0 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      height: calc(100% - 35px);
    }
    :deep(.tree-org-node__inner) {
      .tree-org-node__text {
        padding: 0 !important;
      }
      .tree-org-node__text:hover {
        box-shadow:0 4px 8px 0 rgba(0,0,0,.16)!important;
      }
    }
    .tree-org-node-box {
      display: flex;
      position: relative;
      flex-direction: column;
      width: 240px;
      cursor: pointer;
      padding: 10px 15px;
      // padding-bottom: 5px;
      // height: 110px;
      .tree-org-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0.1;
        z-index: 0;
      }
      
      .tree-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        font-weight: bold;
        color: #606266;
        margin-bottom: 15px;
        padding-bottom: 8px;
        border-bottom: 1px solid #d6d6d6;
      }
      .tree-info {
        display: flex;
        font-size: 12px;
        margin-bottom: 8px;
        span {
          &:first-child {
            display: inline-block;
            width: 60px;
            text-align: left;
            margin-right: 0px;
            color: rgba(0, 0, 0, 0.4);
          }
        }
      }
    }
    .tree-org-node-box1 {
      color: #e6a23c;
      padding: 10px 15px;
      > p {
        display: flex;
        align-items: center;
        font-size: 16px;
      }
    }
  }
}
</style>
