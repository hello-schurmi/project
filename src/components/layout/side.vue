<!--
 * @Description: 侧边导航
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-16
 * @FilePath: /project/src/components/layout/side.vue
-->
<template>
  <div class="mian-side">
    <el-menu :default-active="fullPath" router default-active="2" class="el-menu-vertical">
      <template v-for="(item, index) in stores.userStore.routeList" :key="index">
        <el-menu-item :index="item.path" v-if="item.children.length == 1">
          <Icons size="14" :name="item.meta.icons" stay="left" />
          <span>{{ item.name }}</span>
        </el-menu-item>
        <el-sub-menu :index="item.path" v-else>
          <template #title>
            <Icons size="14" :name="item.meta.icons" stay="left" />
            <span>{{ item.name }}</span>
          </template>
          <template v-for="(child, index) in item.children" :key="index"   >
            <el-menu-item :index="item.path + '/' + child.path" v-if="child.meta.flage==true" >
              <span>{{ child.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import stores from "@/store";
import {reactive, ref} from "vue";
import Icons from "../public/icons.vue";
import {useRouter} from "vue-router";
const router = useRouter();
const props = defineProps({});
let fullPath = ref(router.currentRoute.value.fullPath);
</script>
<style>
:root {
  --el-menu-item-height: 35px;
}
</style>
<style scoped lang="scss">
.mian-side {
  flex: none;
  width: 180px;
  padding-top: 16px;
  border-right: 1px solid #e4e7ed !important;
  :deep(.el-menu) {
    border-right: none !important;
  }
}
/*@import url(); 引入公共css类*/
.el-menu-vertical {
  .el-menu-item {
    font-size: 12px !important;
    padding: 0 35px !important;
  }

  .el-sub-menu {
    font-size: 12px !important;
    padding-left: 15px !important;
  }
  .el-menu-item.is-active {
    background: rgb(239, 243, 248) !important;
  }
  .el-menu-item.is-active::after {
    content: "";
    position: absolute;
    display: block;
    top: 0px;
    bottom: 0px;
    right: 0px;
    width: 2px;
    height: 100%;
    background: #0064c8;
  }
  :deep(.el-sub-menu) {
    .el-sub-menu__title {
      font-size: 12px !important;
      
    }

    .el-sub-menu__icon-arrow {
      // display: none;
    }
    .el-menu--inline {
      .el-menu-item {
        font-size: 12px !important;
        padding-left: 57px!important;
      }
    }
  }
}
</style>
