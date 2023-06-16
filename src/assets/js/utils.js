/*
 * @Description: 公共方法
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-15
 * @FilePath: /project/src/assets/js/utils.js
 */
import {ElNotification, ElMessage, ElMessageBox} from "element-plus";

//table 表头样式
//表格表头样式==================================>>>>>>>>>
export const table_header_style = {
  backgroundColor: "#eff3f8",
  color: "#606266",
  padding: "8px 0",
  fontSize: "12px",
  textAlign: "center", 
  borderBottom: "1px solid #e3e4e6",
};
//表格单元格样式==================================>>>>>>>>>
export const row_style = {
  padding: "4px 0",
  fontSize: "12px",
  textAlign: "center",
};

//路由跳转========================================>>>>>>>>>
import routers from "@/router";
export const routerJump = (path, query = {}, params = {}) => {
  routers.push({
    path: path,
    query: query,
    params: params,
  });
};

//弹框封装========================================>>>>>>>>>
export function confirmBox(msg, btnName, type) {
  let confirmName = btnName == "是" ? "是" : "确定";
  let cancelsName = btnName == "否" ? "否" : "取消";
  return ElMessageBox.confirm(msg, "提示", {
    type: type || "warning",
    confirmButtonText: confirmName,
    cancelButtonText: cancelsName,
    closeOnClickModal: false,
    closeOnPressEscape: false,
  });
}

// el-table表单验证========================================>>>>>>>>>
// export validateObj={
//   // 验证手机号
//   validatePhone:{},
// }