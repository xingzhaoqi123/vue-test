import Vue from "vue";
import Router from "vue-router";
import home from "../components/home.vue";
import about from "../components/about.vue";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      meta: { title: "home" },
      component: home
    },
    {
      path: "/about:id",
      meta: { title: "about" },
      component: about
    },
    {
      path: "/login",
      meta: { title: "login" },
      name: "登录",
      component: () => import("../components/login.vue")
    },
    {
      path: "/main",
      component: () => import("../../views/Layout"),
      redirect:'/main/home',
      children: [
        {
          path: "home",
          name:'home1',
          meta: { title: "home" },
          component: home
        },
        {
          path: "about:id",
          name:'about1',
          meta: { title: "about" },
          component: about
        },
        {
          path: "login",
          meta: { title: "login" },
          name: 'login1',
          component: () => import("../components/login.vue")
        }
      ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  Nprogress.start();
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
router.afterEach((to, from) => {
  Nprogress.done();
});
export default router;
