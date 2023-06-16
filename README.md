# Vue 3 + Vite
###  图标库
图标暂时使用的是 https://iconpark.oceanengine.com/official  
在按钮中使用以下方案 引入注意使用大驼峰命名
 import {Search} from '@icon-park/vue-next';
<el-button type="primary" size="small" >
     <el-icon class="el-icon--left"><search theme="outline"   fill="#fff" :strokeWidth="3"/></el-icon>
    点击
</el-button> 
