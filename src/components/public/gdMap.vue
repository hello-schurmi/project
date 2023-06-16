<!--
 * @Description: 高德地图组件
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-08
 * @FilePath: /project/src/components/public/gdMap.vue
-->

<template>
  <div class="app-container">
    <div style="background-color: #ffffff">
      <div class="app-container-select">
        <el-select v-model="mapAdd" filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading" :clearable="true" @change="currentSelect" style="width: 500px">
          <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item" class="one-text">
            <span style="float: left">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.district }}</span>
          </el-option>
        </el-select>
      </div>
      <div id="container"></div>
      <div class="app-container-address">
        <span>地址：{{ address }}</span>
        <el-button type="primary" size="default" @click="submit">添加地址</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
/*在Vue3中使用时,需要引入Vue3中的shallowRef方法(使用shallowRef进行非深度监听,
因为在Vue3中所使用的Proxy拦截操作会改变JSAPI原生对象,所以此处需要区别Vue2使用方式对地图对象进行非深度监听,
否则会出现问题,建议JSAPI相关对象采用非响应式的普通对象来存储)*/
import {shallowRef} from "@vue/reactivity";
import {reactive, ref} from "vue";

// const map = shallowRef(null);
const path = ref([]);
const current_position = ref([]);
let map = {};
let marker = {};
let location = {
  lng: 0,
  lat: 0,
};
let geoCoder = {};
let autoComplete = {};
function init() {
  window._AMapSecurityConfig = {
    securityJsCode: "83b29c4881b19bf04c314810d4d0eb8d",
  };
  AMapLoader.load({
    key: "2cefd7f79d67409c2955474191efc355", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    // plugins:[''], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then(AMap => {
      map = new AMap.Map("container", {
        //设置地图容器id
        viewMode: "2D", //是否为3D地图模式
        zoom: 11, //初始化地图级别
        center: [116.404, 39.915], //初始化地图中心点位置
      });

      // 添加插件
      AMap.plugin(["AMap.ToolBar", "AMap.Scale", "AMap.HawkEye", "AMap.Geolocation", "AMap.MapType", "AMap.MouseTool", "AMap.Geocoder", "AMap.AutoComplete"], function () {
        //异步同时加载多个插件
        // 添加地图插件
        map.addControl(new AMap.ToolBar()); // 工具条控件;范围选择控件
        map.addControl(new AMap.Scale()); // 显示当前地图中心的比例尺
        // map.addControl(new AMap.HawkEye()); // 显示缩略图
        // map.addControl(new AMap.Geolocation()); // 定位当前位置
        // map.addControl(new AMap.MapType()); // 实现默认图层与卫星图,实时交通图层之间切换

        // 以下是鼠标工具插件
        const mouseTool = new AMap.MouseTool(map);
        // mouseTool.rule();// 用户手动绘制折线图,测量距离
        // mouseTool.measureArea(); // 测量面积
      });
      geoCoder = new AMap.Geocoder({
        city: "010", //城市设为北京，默认：“全国”
        radius: 500, //范围，默认：500
      });

      autoComplete = new AMap.AutoComplete({city: "全国"});

      // 单击
      map.on("click", e => {
        // lng ==> 经度值  lat => 维度值
        location.lng = e.lnglat.lng;
        location.lat = e.lnglat.lat;
        clickMap();
      });
    })
    .catch(e => {
      console.log(e);
    });
}
//点击地图事件
function clickMap() {
  toGeoCoder();
  map.setFitView();
  map.remove(marker);
  marker = new AMap.Marker({
    map: map,
    position: [location.lng, location.lat],
  });
  map.setFitView();
  map.add(marker);
}
// 逆解析地址
let address = ref("");
function toGeoCoder(e) {
  let lnglat = [location.lng, location.lat];
  geoCoder.getAddress(lnglat, (status, result) => {
    if (status === "complete" && result.regeocode) {
      address.value = result.regeocode.formattedAddress;
    }
  });
}
//地图点击事件
 let options=ref([])
let loading = ref(false);
let mapAdd = ref("");
//下拉选择事件
function currentSelect(val) {
  if (!val) {
    return;
  }
  console.log(val);
  mapAdd.value=val.name 
  map.remove(marker);
  location.lng = val.location.lng;
  location.lat = val.location.lat;
  clickMap();
}

function remoteMethod(query) {
  if (query !== "") {
    loading.value = true;  
    autoComplete.search(query, (status, result) => {
      loading.value = false;
      console.log(result.tips, "------");
      options.value = result.tips.filter(item => {
        return item.location;
      });
    });
  } else {
    options.value = [];
  }
}
//提交
const emit = defineEmits(["submitData"]);
function submit() {
  emit("submitData", {
    address: address.value,
    location: location,
  });
}

defineExpose({
  init,
});
</script>

<style scoped lang="scss">
#container {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 300px;
}
.app-container {
  .app-container-select {
    margin-bottom: 10px;
  }
  .app-container-address {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
