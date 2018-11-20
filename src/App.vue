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
  z-index: 10;
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
.swiper-container {
    height: 200px;
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
