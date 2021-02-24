import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Layout from "../views/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout
  },
  {
    path: "/epms",
    name: "Layout",
    component: Layout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
