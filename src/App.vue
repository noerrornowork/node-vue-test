<template>
  <div id="app">
    <!-- 需要实现页面缓存的 -->
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <!-- 不需要缓存的 -->
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <tab></tab>
  </div>
</template>

<script>
import Tab from '@/base/Tab.vue'
export default {
  name: 'App',
  components: {
    'tab': Tab
  }
}
</script>

<style lang="less">
#app {
  z-index: 1;
}
// 公共重置样式START
* {
  margin: 0;
  padding: 0;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
body, p {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
input, button {
  appearance: none;
}
// 公共重置样式END
.content {
  width: 100%;
  overflow: auto;

  position: fixed;
  top: 40px;
  bottom: 50px;
}
// 路由动画样式
.fadeIn-enter {
  opacity: 0;
}
.fadeIn-enter-active {
  transition: all 0.5s linear;
  opacity: 1;
}
.fadeIn-leave-active {
  transition: all 0.5s linear;
  opacity: 1;
}
.fadeIn-leave {
  opacity: 0;
}
</style>
