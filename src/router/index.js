import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Collect from '../components/Collect.vue'
import Add from '../components/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
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
    }
  ]
})
