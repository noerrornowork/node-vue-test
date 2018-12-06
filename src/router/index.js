import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/Home.vue'
// import List from '@/components/List.vue'
// import Collect from '@/components/Collect.vue'
// import Add from '@/components/Add.vue'
// import Detail from '@/components/Detail.vue'

const Home = (resolve) => { require(['@/components/Home.vue'], resolve) }
const List = (resolve) => { require(['@/components/List.vue'], resolve) }
const Collect = (resolve) => { require(['@/components/Collect.vue'], resolve) }
const Add = (resolve) => { require(['@/components/Add.vue'], resolve) }
const Detail = (resolve) => { require(['@/components/Detail.vue'], resolve) }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { // 路由元信息
        keepAlive: true,
        title: '首页'
      }
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      meta: {
        title: '列表页'
      }
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      meta: {
        title: '添加也'
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      meta: {
        title: '详情页'
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
