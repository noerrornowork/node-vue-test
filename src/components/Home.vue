<template>
  <div class="home">
    <v-header>首页</v-header>
    <div class="content">
      <loading v-if="loading"></loading>
      <template v-else>
        <swiper :swiperSlides="slidersData"></swiper>
        <h3>热门图书</h3>
        <ul>
          <li v-for="(hot, index) in hotBooks" :key="index">
            <img :src="hot.bookCover" alt="">
            <b>{{ hot.bookName }}</b>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
import Swiper from '@/base/Swiper.vue'
import Loading from '@/base/Loading.vue'
// import { getSliders, getHotBooks } from '@/api'
import { getAll } from '@/api'
export default {
  name: 'home',
  components: {
    VHeader,
    Swiper,
    Loading
  },
  created () {
    // this.getSlider()
    // this.getHot()
    this.getData()
  },
  data () {
    return {
      slidersData: [],
      hotBooks: [],
      loading: true,
      sliders: []
    }
  },
  methods: {
    // async getSlider () {
    //   this.sliders = await getSliders()
    //   this.sliders.forEach((item) => {
    //     this.slidersData.push(item.url)
    //   })
    // },
    // async getHot () {
    //   this.hotBooks = await getHotBooks()
    // }
    async getData () {
      this.loading = true
      let [slidersData, hotBooks] = await getAll()
      this.sliders = slidersData
      this.sliders.forEach((item) => {
        this.slidersData.push(item.url)
      })
      this.hotBooks = hotBooks
      this.loading = false
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
