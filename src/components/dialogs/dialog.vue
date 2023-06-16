<!--
 * @Description: 对话组件
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-14
 * @FilePath: /project/src/components/dialogs/dialog.vue
-->
<!-- 左侧对方对话 右侧我的对话 中间信息 -->
<template>
  <div class="dialog-box" >
    <!--通过css 变更显示方式 -->
    <div class="dialog-content" :class="{'dialog-my': item % 2 == 0}" v-for="(item, index) in 10" :key="index">
      <img v-if="item % 2 == 0" class="dialog-heard" src="@/assets/images/h-02.png" alt="" />
      <img v-else class="dialog-heard" src="@/assets/images/h-01.png" alt="" />
      <div class="dialog-waper">
        <p class="dialog-title"> {{ item % 2 != 0?'高级客服':'' }} 06-03 22:22:22</p>
        <div class="dialog-info">
          发多少厉害发给大开户，发多少厉害 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
const props = defineProps({});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.dialog-box {
  padding-top: 10px;
  .dialog-content {
    display: flex;
    align-items: flex-start;
    .dialog-heard {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .dialog-waper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      max-width: calc(100% - 100px);
      min-width: 10px;
      .dialog-title {
        font-size: 12px;
        margin-bottom: 7px;
        color: #999;
      }
      .dialog-info {
        border-radius: 0 8px 8px 8px;
        box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        font-size: 13px;
        padding: 16px 20px;
        color: #333;
      }
    }
  }
  .dialog-content + .dialog-content {
    margin: 20px 0;
  }
  .dialog-my {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    .dialog-heard {
      margin-right: 0px;
      margin-left: 15px;
    }
    .dialog-waper {
      .dialog-title {
        text-align: right;
      }
      .dialog-info {
        border-radius: 8px 0 8px 8px;
        box-shadow: 1px 1px 5px 0 rgba(0, 136, 255, 0.245);
        background-color: #e5f3ff;
      }
    }
  }
}
</style>
