<template>
  <div class="home">
    <v-header>首页</v-header>
    <swiper :swiperSlides="slidersData"></swiper>
    <div class="container">
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
  overflow: auto;
  .container {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    h3 {
      color: #999999;
      text-align: center;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        box-shadow: 0px 0px 3px #cfcfcf;
        width: 30%;
        margin: 15px 5px;
        img {
          width: 100%;
        }
        b {
          font-size: 12px;
          width: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
