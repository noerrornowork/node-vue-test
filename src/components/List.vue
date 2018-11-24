<template>
  <div class="list">
    <v-header :back="true">列表</v-header>
    <div class="content">
      <loading v-if="loading"></loading>
      <template v-else>
        <ul>
          <router-link :to="{name:'detail', params: {id: book.bookId}}" v-for="(book, index) in allBooks" :key="index" tag="li">
            <img :src="book.bookCover" alt="xxx">
            <div>
              <h4>{{ book.bookName }}</h4>
              <p>{{ book.bookInfo }}</p>
              <b>{{ book.bookPrice }}</b>
              <button @click.stop="remove(book.bookId)">删除</button>
            </div>
          </router-link>
        </ul>
      </template>
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
      loading: true
    }
  },
  methods: {
    async getData () {
      // this.allBooks = await getAllBooks()
      if (this.hasMore) { // 有更多的时候获取数据
        let {hasMore, books} = await pagination(this.offset)
        // this.allBooks = this.allBooks.concat(books)
        this.allBooks = [...this.allBooks, ...books]
        this.hasMore = hasMore
        this.offset = this.allBooks.length
        this.loading = false
      }
    },
    async remove (id) {
      await removeBook(id)
      this.allBooks = this.allBooks.filter(item => item.bookId !== id)
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  .content {
    ul {
      li {
        padding: 10px;
        display: flex;
        border-bottom: 1px solid #999999;
        img {
          width: 160px;
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
