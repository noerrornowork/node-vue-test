// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as custom from '@/assets/js/filter.js'
import axios from 'axios'
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { ToastPlugin, LoadingPlugin } from 'vux'
Vue.use(Swiper)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

// 全局注册过滤器
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
