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
  overflow: auto;
  height: auto;
  z-index: 1;
}
* {
  margin: 0;
  padding: 0;
}
ul, li {
  margin: 0;
  padding: 0;
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
.content {
  width: 100%;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 40px;
  bottom: 50px;
}
</style>
