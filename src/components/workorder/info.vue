<!--
 * @Description: 帮助详情
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-13
 * @FilePath: /project/src/components/workorder/info.vue
-->
<template>
  <div class="workorder-info">
    <p class="title">
      <span>帮助文档</span>
      <span>
        更多支持：
        <i @click="jumpToDialog">
          <Icons name="worker" size="14" />
          专家服务
        </i>
      </span>
    </p>
    <el-divider style="margin: 10px 0" />
    <div class="workorder-info-detail">
      <p class="title">如何在Linux系统的ECS实例中安装图形界面</p>
      <p>阿里云云服务器ECS实例提供的公共Linux系统镜像，基于性能及通用性等因素的考虑，默认不安装图形化桌面组件。若您需要为Linux实例安装图形化界面，可参考本文进行操作。</p>
      <p>请在安装之前，为ECS实例创建快照，做好数据备份，请参见创建一个云盘快照。</p>
      <p>安装图形化桌面会降低服务器的性能，若安装不当，则会导致操作系统无法正常启动。</p>
    </div>
  </div>
</template>

<script setup>
import Icons from "@/components/public/icons.vue";
import {reactive, ref} from "vue";
import {routerJump, table_header_style, row_style} from "@/assets/js/utils.js";
const props = defineProps({});
let emit = defineEmits(["cancel"]);
function init() {
  console.log("info");
}
function cancel() {
  emit("cancel");
}
function jumpToDialog() {
  routerJump("/workorder/workdialogs");
}

defineExpose({
  init,
});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.workorder-info {
  > .title {
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
      &:first-child {
        color: #0064c8;
      }
      &:last-child {
        color: #555;
        display: flex;
        align-items: center;
        > i {
          cursor: pointer;
          font-size: 12px;
          color: #0064c8;
          display: inline-block;
          display: flex;
          align-items: center;
          height: 24px;
          line-height: 24px;
          padding: 0 10px;
          background-image: linear-gradient(180deg, #f1f8ff 50%, #bdf 99%);
          border-radius: 4px;
        }
      }
    }
  }
}
.workorder-info-detail {
  > .title {
    font-size: 14px;
    color: #333;
    font-weight: bold;
    line-height: 20px;
    margin-bottom: 10px;
  }
  > p {
    color: #555;
    font-size: 12px;
    line-height: 20px;
    margin-top: 6px;
  }
}
</style>
