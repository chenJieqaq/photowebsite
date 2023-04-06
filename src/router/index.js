import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home/Home'
import logout from '../views/logout/logout.vue'
import challenge from '../views/Challenge/index'
import UserMessage from '../views/UserMessage/index'
import realtime from "@/views/RealTime/index.vue";
import Live from "@/views/home/live.vue";
Vue.use(VueRouter)
const whiteList = ['/login','/']
const routes = [

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      // 页面标题title
      title: '首页'
  }
  },

  {
    path: "/", redirect: { path:'/home' },

  },

  {
    path: "/home",   component: Home,
    children: [
      {
        //直播拍照 路由
        path: '/live',
        name: 'live',
        component: Live
      },
      {
        //实时拍照 路由
        path: '/realtime',
        name: 'realtime',
        component: realtime,
      },
      {
        //摄影挑战 路由
        path: '/challenge',
        name: 'challenge',
        component: challenge,
      },
      {
        //个人用户中心 路由
        path: '/user',
        name: 'UserMessage',
        component: UserMessage,
      },
    ],
    meta:{
      // 页面标题title
      title: '主页'
  }
  }
  ,
,
  {
    name:'logout',
    path:'/logout',
    component:logout
  },
]




const router = new VueRouter({
  mode:'history',//开启history模式需要服务器支持
  // base: '',// 配置单页应用的基路径,我的理解就是访问这个地址的时候开始是/，根据路由时/跳转到登录页面
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (localStorage.token) {  // 获取当前的token是否存在
//       console.log("token存在");
//       next();
//     } else {
//       console.log("token不存在");
      // next({
      //   path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
      //   query: {redirect: to.fullPath}
      // })
//     }
//   }
//   else { // 如果不需要权限校验，直接进入路由界面
//     next();
//   }
// });


export default router;

