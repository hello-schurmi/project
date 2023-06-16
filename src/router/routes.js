/*
 * @Description:  路由配置
 * @Author: wumingchao
 * @LastEditors: wumingchao
 * @LastEditTime: 2023-06-14
 * @FilePath: /project/src/router/routes.js
 */
let Layout = () => import("@/layout/index.vue");
const routes = [
  //登录页
  {
    path: "/login",
    name: "登录",
    meta: {title: "登录", flag: false},
    component: () => import("@/pages/login/index.vue"),
  },
  //  / 重定向到首页
  {
    path: "/",
    redirect: "/work",
    meta: {title: "工作台", flag: false},
    component: Layout,
  },
  //工作台
  {
    path: "/work",
    name: "工作台",
    meta: {title: "工作台", icons: "workbench", flag: true},
    component: Layout,
    //子路由
    children: [
      {
        path: "",
        name: "工作台",
        component: () => import("@/pages/work/index.vue"),
        meta: {title: "工作台", flage: true},
      },
    ],
  },
  //主体
  {
    path: "/entity",
    name: "主体管理",
    meta: {title: "主体管理", icons: "qiyehao", flag: true},
    component: Layout,
    //子路由
    children: [
      {
        path: "",
        name: "主体管理",
        component: () => import("@/pages/entity/index.vue"),
        meta: {title: "主体管理", flage: true},
      },
    ],
  },
  //资质
  {
    path: "/qualify",
    name: "资质管理",
    meta: {title: "资质管理", icons: "commodity", flag: true},
    component: Layout,
    //子路由
    children: [
      {
        path: "",
        name: "资质管理",
        component: () => import("@/pages/qualify/index.vue"),
        meta: {title: "资质管理", flage: true},
      },
    ],
  },
  //项目
  {
    path: "/project",
    name: "项目管理",
    meta: {title: "项目管理", icons: "figma-componen", flag: true},
    component: Layout,
    //子路由
    children: [
      {
        path: "",
        name: "项目管理",
        component: () => import("@/pages/project/index.vue"),
        meta: {title: "项目管理", flage: true},
      },
    ],
  },
  //资质标准
  {
    path: "/qualifyStandard",
    name: "资质标准",
    meta: {title: "资质标准", icons: "treasure-chest", flag: true},
    component: Layout,
    //子路由
    children: [
      {
        path: "",
        name: "资质标准",
        component: () => import("@/pages/qualifyStandard/index.vue"),
        meta: {title: "资质标准", flage: true},
      },
    ],
  },
  //员工管理
  {
    path: "/person",
    name: "员工管理",
    meta: {title: "员工管理", icons: "data-user", flag: true},
    // redirect: "/person",
    component: Layout,
    //子路由
    children: [
      {
        path: "",
        name: "员工管理",
        component: () => import("@/pages/person/index.vue"),
        meta: {title: "员工管理", flage: true},
      },
      // {
      //   path: "department",
      //   name: "部门管理",
      //   component: () => import("@/pages/department/index.vue"),
      //   meta: {title: "员工管理", flage: true},
      // },
      // {
      //   path: "person",
      //   name: "员工管理",
      //   component: () => import("@/pages/person/index.vue"),
      //   meta: {title: "员工管理", flage: true},
      // },
    ],
  },
  //证书
  {
    path: "/certificate",
    name: "证书管理",
    meta: {title: "证书管理", icons: "certificate", flag: true},
    component: Layout,
    //子路由
    children: [
      {
        path: "",
        name: "证书管理",
        component: () => import("@/pages/certificate/index.vue"),
      },
    ],
  },
  //工单
  {
    path: "/workorder",
    name: "工单管理",
    meta: {title: "工单管理", icons: "data-user", flag: true},
    // redirect: "/person",
    component: Layout,
    //子路由
    children: [ 
      {
        path: "workcreate",
        name: "提交工单",
        component: () => import("@/pages/workorder/workcreate/index.vue"),
        meta: {title: "提交工单", flage: true},
      },
      {
        path: "workclist",
        name: "服务记录",
        component: () => import("@/pages/workorder/workclist/index.vue"),
        meta: {title: "服务记录", flage: true},
      },
      {
        path: "workdialogs",
        name: "对话",
        component: () => import("@/pages/workorder/dialogs/index.vue"),
        meta: {title: "对话", flage: false},
      },
    ],
  },
   
];
export default routes;
