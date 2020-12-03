import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signin from "../views/Signin.vue" 
import Dog from "../views/dog.vue"
import Cat from "../views/cat.vue"
import Norm from "../views/norm.vue"
import Notice from "../views/notice.vue"
import Connection from "../views/connection.vue"

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
  },
  {
    path: "/dog",
    name: 'Dog',
    component: Dog,
    meta: { title: '宠物狗'}
  },
  {
    path: "/cat",
    name: 'Cat',
    component: Cat,
    meta: { title: '宠物猫'}
  },
  {
    path: "/norm",
    name: 'Norm',
    component: Norm,
    meta: { title: '领养准则'}
  },
  {
    path: "/notice",
    name: 'Notice',
    component: Notice,
    meta: { title: '系统公告'}
  },
  {
    path: "/connection",
    name: 'Connection',
    component: Connection,
    meta: { title: '联系我们'}
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// title自定义
router.beforeEach((to, form, next) => {
  if (to.meta.title) {//判断是否有标题
    console.log(to.meta.title)
      document.title = to.meta.title
    }
  next()

})
export default router;
