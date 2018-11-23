<template>
  <div class="list">
    <v-header>列表</v-header>
    <div class="content">
      <ul>
        <router-link :to="'/detail/' + book.bookId" v-for="(book, index) in allBooks" :key="index" tag="li">
          <img :src="book.bookCover" alt="">
          <div>
            <h4>{{ book.bookName }}</h4>
            <p>{{ book.bookInfo }}</p>
            <b>{{ book.bookPrice }}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
import { getAllBooks, removeBook } from '@/api'
export default {
  name: 'list',
  components: {
    VHeader
  },
  created () {
    this.getData()
  },
  data () {
    return {
      allBooks: []
    }
  },
  methods: {
    async getData () {
      this.allBooks = await getAllBooks()
      console.log(this.allBooks)
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
        border-bottom: 1px solid #f1f1f1;
        img {
          width: 130px;
          height: 150px;
        }
        div {
          h4 {
            font-size: 20px;
            line-height: 35px;
          }
          p {
            color: #2a2a2a;
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
