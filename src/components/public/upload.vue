<!--
 * @Description: 上传组件块 
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-09
 * @FilePath: /project/src/components/public/upload.vue
-->

<template>
  <div class="upload-block">
    <div class="upload-block-no" v-if="!picUrl">
      <Icons size="22" style="color: #a8abb2" name="add" />
    </div>
    <div class="upload-block-img" v-else>
      <Icons class="upload-block-img-del" name="delete" size="16" color="#F56C6C" />
      <img src="" alt="" />
    </div>
  </div>
</template>

<script setup>
import Icons from "@/components/public/icons.vue";
const props = defineProps({});
let picUrl = ref("");

</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.upload-block {
  border: 1px dashed #dcdfe6;
  border-radius: 6px;
  width: 80px;
  height: 80px;
  .upload-block-no {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .upload-block-img {
    position: relative;
    width: 100%;
    height: 100%;
    .upload-block-img-del {
      position: absolute;
      top: 2px;
      right: 2px;
      cursor: pointer;
    }
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
}
</style>
