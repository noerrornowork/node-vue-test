<template>
  <div id="app">
    <router-view></router-view>
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
</style>
