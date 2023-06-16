<!--
 * @Description: 通用图标组件
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-13
 * @FilePath: /project/src/components/public/icons.vue
-->

<template>
  <el-icon :class="[stay == 'left' ? 'el-icon--left' : stay == 'right' ? 'el-icon--right' : '']">

    <worker v-if="props.name == 'worker'" theme="outline" :strokeWidth="props.strokeWidth"/>
    <edit v-if="props.name == 'edit'" theme="outline" :strokeWidth="props.strokeWidth"/>

    <hourglass-full v-if="props.name == 'HourglassFull'" theme="outline" :strokeWidth="props.strokeWidth"/>
    <download v-if="props.name == 'download'" theme="outline" :strokeWidth="props.strokeWidth"/>

    <local-two v-if="props.name == 'local-two'" theme="outline" :strokeWidth="props.strokeWidth"/>
    <System v-if="props.name == 'system'" theme="outline" :strokeWidth="props.strokeWidth"/>
    <hamburger-button v-if="props.name == 'hamburger'" theme="outline" :strokeWidth="props.strokeWidth"/>

    <avatar v-if="props.name == 'avatar'" theme="outline" :strokeWidth="props.strokeWidth"/> 
    <lock v-if="props.name == 'lock'" theme="outline" :strokeWidth="props.strokeWidth"/>
    <me  v-if="props.name == 'me'" theme="outline" :strokeWidth="props.strokeWidth" /> 
    <editor  v-if="props.name == 'editor'" theme="outline" :strokeWidth="props.strokeWidth"/>
    <delete v-if="props.name == 'delete'" theme="outline" :strokeWidth="props.strokeWidth"/>
    <add-four v-if="props.name == 'add-four'" theme="outline" :strokeWidth="props.strokeWidth"/>
    <add v-if="props.name == 'add'" theme="outline" :strokeWidth="props.strokeWidth" />
    <close-small v-if="props.name == 'close-small'" theme="outline" :strokeWidth="props.strokeWidth" />
    <network-tree v-if="props.name == 'network-tree'" theme="outline" :strokeWidth="props.strokeWidth" />
    <helpcenter v-if="props.name == 'helpcenter'" theme="outline" :strokeWidth="props.strokeWidth" />
    <certificate v-if="props.name == 'certificate'" theme="outline" :strokeWidth="props.strokeWidth" />
    <data-user v-if="props.name == 'data-user'" theme="outline" :strokeWidth="props.strokeWidth" />
    <treasure-chest v-if="props.name == 'treasure-chest'" theme="outline" :strokeWidth="props.strokeWidth" />
    <figma-component v-if="props.name == 'figma-componen'" theme="outline" :strokeWidth="props.strokeWidth" />
    <workbench v-if="props.name == 'workbench'" theme="outline" :strokeWidth="props.strokeWidth" />
    <qiyehao v-if="props.name == 'qiyehao'" theme="outline" :strokeWidth="props.strokeWidth" />
    <commodity v-if="props.name == 'commodity'" theme="outline" :strokeWidth="props.strokeWidth" />
    <bookmark v-if="props.name == 'bookmark'" theme="outline" :strokeWidth="props.strokeWidth" />
    <search v-if="props.name == 'search'" theme="outline" :strokeWidth="props.strokeWidth" />
    <lightning v-if="props.name == 'lightning'" theme="outline" :strokeWidth="props.strokeWidth" />
    <setting-two v-if="props.name == 'setting-two'" theme="outline" :strokeWidth="props.strokeWidth" />
  </el-icon>
</template>

<script setup>
import {Search, Bookmark, Lightning, SettingTwo, Workbench, Qiyehao, Commodity, FigmaComponent, TreasureChest, DataUser, Certificate, Helpcenter, NetworkTree, CloseSmall,Add,Delete,Me,Editor,AddFour,Avatar,Lock,HamburgerButton,System,LocalTwo,Download,HourglassFull,Edit,Worker} from "@icon-park/vue-next";
const props = defineProps({
  strokeWidth: {
    type: Number,
    default: 4,
  },
  stay: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "bookmark",
  },
});
</script>
<style scoped lang="scss">
/*@import url(); 引入公共css类*/
.el-icon {
  .i-icon {
    height: 1em;
  }
}
</style>
