<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'carrousel',
  props: ['swiperSlides'],
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 1000
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>
