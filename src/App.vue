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

<style>
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
</style>
