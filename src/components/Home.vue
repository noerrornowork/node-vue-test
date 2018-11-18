<template>
  <div class="home">
    <v-header>首页</v-header>
    <swiper></swiper>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
import Swiper from '@/base/Swiper.vue'
export default {
  name: 'home',
  components: {
    VHeader,
    Swiper
  }
}
</script>
<style lang="less" scoped>
.home {
  .swiper-container {
    height: 400px;
  }
}
</style>
