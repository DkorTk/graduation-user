import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signin from "../views/Signin.vue" 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: '首页'}
    
  },
  {
    path: "/login",
    name: 'Login',
    component: Login,
    meta: { title: '登录'}
  },
  {
    path: "/signin",
    name: 'Signin',
    component: Signin,
    meta: { title: '注册'}
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, form, next) => {
  if (to.meta.title) {//判断是否有标题
    console.log(to.meta.title)
      document.title = to.meta.title
    }
  next()

})
export default router;
