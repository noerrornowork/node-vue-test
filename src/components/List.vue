<template>
  <div class="list">
    <v-header :back="true">列表</v-header>
    <div class="content" ref="scroll" @scroll="scrollLoad">
      <loading v-if="loading"></loading>
      <template v-else>
        <ul>
          <router-link :to="{name:'detail', params: {id: book.bookId}}" v-for="(book, index) in allBooks" :key="index" tag="li">
            <img v-lazy="book.bookCover" alt="xxxkkkkkkkk">
            <div>
              <h4>{{ book.bookName }}</h4>
              <p>{{ book.bookInfo }}</p>
              <b>{{ book.bookPrice }}</b>
              <button @click.stop="remove(book.bookId)">删除</button>
            </div>
          </router-link>
        </ul>
      </template>
      <div class="more" @click.stop="loadMore">加载更多</div>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
import { pagination, removeBook } from '@/api'
import Loading from '@/base/Loading.vue'
export default {
  name: 'list',
  components: {
    VHeader,
    Loading
  },
  created () {
    this.getData()
  },
  data () {
    return {
      allBooks: [],
      offset: 0, // 偏移量
      hasMore: true, // 是否有更多
      loading: true,
      isLoading: false
    }
  },
  methods: {
    scrollLoad () { // 滚动加载更多
      clearTimeout(this.timer) // 函数防抖
      this.timer = setTimeout(() => { // 函数节流
        let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll
        if (scrollTop + clientHeight + 40 > scrollHeight) {
          this.getData()
        }
      }, 13)
    },
    loadMore () { // 点击加载更多
      if (!this.hasMore) {
        this.$vux.toast.show('我是有底线的')
      }
      this.getData()
    },
    async getData () {
      // this.allBooks = await getAllBooks()
      if (this.hasMore && !this.isLoading) { // 有更多的时候获取数据
        this.isLoading = true
        let {hasMore, books} = await pagination(this.offset)
        // this.allBooks = this.allBooks.concat(books)
        this.allBooks = [...this.allBooks, ...books]
        this.hasMore = hasMore
        this.isLoading = false
        this.offset = this.allBooks.length
        this.loading = false
      }
    },
    async remove (id) {
      await removeBook(id)
      this.allBooks = this.allBooks.filter(item => item.bookId !== id)
    }
  },
  mounted () {
    let scroll = this.$refs.scroll
    let offsetTop = scroll.offsetTop
    let disY = 0
    scroll.addEventListener('touchstart', (e) => {
      // 滚动条在顶端 容器的距顶部的偏移量为offsetTop时, 不能上拉
      if (scroll.scrollTop !== 0 || scroll.offsetTop !== offsetTop) return
      let start = e.touches[0].pageY // 开始位置
      let move = scroll.addEventListener('touchmove', (e) => {
        let current = e.touches[0].pageY // 移动后, 停下来的点的位置
        disY = current - start // 滑动的距离
        if (disY > 0) {
          if (disY <= 40) {
            scroll.style.top = disY + offsetTop + 'px'
          } else {
            disY = 40
            scroll.style.top = offsetTop + 40 + 'px'
          }
        } else {
          scroll.removeEventListener('touchmove', move)
          scroll.removeEventListener('touchend', end)
        }
      })
      let end = (e) => {
        clearInterval(this.timer) // 函数防抖
        this.timer = setInterval(() => {
          if (disY <= 0) {
            clearInterval(this.timer)
            disY = 0
            scroll.style.top = offsetTop + 'px'
            scroll.removeEventListener('touchmove', move)
            scroll.removeEventListener('touchend', end)
            console.log('获取数据')
            this.allBooks = [] // 先清空原有数组中的数据
            this.offset = 0
            this.getData()
            return
          }
          disY--
          scroll.style.top = offsetTop + disY + 'px'
        }, 10)
      }
      scroll.addEventListener('touchmove', move)
      scroll.addEventListener('touchend', end)
    }, false)
  }
}
</script>
<style lang="less" scoped>
.list {
  .content {
    .more {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #888888;
      color: #ffffff;
    }
    ul {
      li {
        padding: 10px;
        display: flex;
        border-bottom: 1px solid #999999;
        img {
          width: 130px;
          height: 150px;
        }
        div {
          padding-left: 5px;
          h4 {
            font-size: 20px;
            line-height: 35px;
          }
          p {
            color: #2a2a2a;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
          }
          b {
            color: red;
          }
          button {
            display: block;
            outline: none;
            border: none;
            width: 60px;
            height: 25px;
            line-height: 25px;
            background-color: orangered;
            color: #ffffff;
            border-radius: 15px;
          }
        }
      }
    }
  }
}
</style>
