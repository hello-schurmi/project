<!--
 * @Description: 默认
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-02
 * @FilePath: /project/src/components/home/homeTest.vue
-->

<template>
  <div class="">
    <span style="color: red" @click="testBtn">关闭</span>
  </div>
</template>
<script>
export default {
    name: "homeTest",
};
</script>
<script setup> 
const props = defineProps({});
const emit = defineEmits(["test"]);

onMounted(() => {
  console.log("mounted");
})

function testBtn() {
  emit("test");
}
defineExpose({
  testBtn,
});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
</style>
