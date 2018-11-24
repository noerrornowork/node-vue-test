import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import List from '@/components/List.vue'
import Collect from '@/components/Collect.vue'
import Add from '@/components/Add.vue'
import Detail from '@/components/Detail.vue'

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
        keePAlive: true
      }
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
