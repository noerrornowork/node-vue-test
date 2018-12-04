// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as filters from '@/assets/js/filter.js'
import * as directives from '@/assets/js/directive.js'
import axios from 'axios'
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { ToastPlugin, LoadingPlugin } from 'vux'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img3.imgtn.bdimg.com/it/u=31820628,1906662201&fm=26&gp=0.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204194025.gif',
  attempt: 1
})
Vue.use(Swiper)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// 全局注册过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 全局注册指令
Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
