import Vue from "vue";
import VueRouter from "vue-router";

//import Layout from "../views/Layout";
import Login from "@/views/Login";
import Container from '@/components/container/Container'


Vue.use(VueRouter);
// 页面登录路由跳转
const routes = [
  {
    path: "/",
    name: "Container'",
    component: Container // 组件名称
  },
  {
    path: "/epms",
    name: "epms",
    component: Login
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
