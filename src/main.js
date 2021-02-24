import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 使用框架
Vue.use(ElementUI); // Element UI

Vue.config.productionTip = false;

/**
 * beforeEach 方法接收三个参数：
 #  to: Route: 即将要进入的目标 路由对象
 #  from: Route: 当前导航正要离开的路由
 #  next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 * */
/**
 *
 * 将所有未登录会话重定向到 /login页面
 * */
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        sessionStorage.removeItem('user');
    }
  const user = sessionStorage.getItem('user');
  if (!user && to.path !== '/login') {
        next({
            path: '/login'
        })
    } else {
        next();
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
