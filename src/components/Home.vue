<template>
  <div class="home">
    <v-header>首页</v-header>
    <div class="content">
      <swiper :swiperSlides="slidersData"></swiper>
      <h3>热门图书</h3>
      <ul>
        <li v-for="(hot, index) in hotBooks" :key="index">
          <img :src="hot.bookCover" alt="">
          <b>{{ hot.bookName }}</b>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
import Swiper from '@/base/Swiper.vue'
import { getSliders, getHotBooks } from '@/api'
export default {
  name: 'home',
  components: {
    VHeader,
    Swiper
  },
  created () {
    this.getSlider()
    this.getHot()
  },
  data () {
    return {
      slidersData: [],
      hotBooks: []
    }
  },
  methods: {
    async getSlider () {
      this.slidersData = await getSliders()
    },
    async getHot () {
      this.hotBooks = await getHotBooks()
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  .content {
    .swiper-container {
    height: 200px;
    .swiper-slide {
      width: 100%;
      img {
        display: block;
      }
    }
  }
    h3 {
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 16px;
      border-bottom: 1px solid red;
    }
    ul {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.333333%;
        img {
          width: 100px;
          height: 150px;
        }
        b {
          width: 20px;
          height: 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 14px;
          text-align: center;
          color: green;
        }
      }
    }
  }
}
</style>
