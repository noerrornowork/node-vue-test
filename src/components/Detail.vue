<template>
  <div class="detail">
    <v-header>详情页</v-header>
    <div class="content">
      <ul>
        <li>
          <label for="book-name">书籍名称:</label>
          <input type="text" v-model="detail.bookName">
        </li>
        <li>
          <label for="book-info">书籍信息:</label>
          <input type="text" v-model="detail.bookInfo">
        </li>
        <li>
          <label for="book-price">书籍价格:</label>
          <p>{{ detail.bookPrice | priceFilter }}</p>
          <!-- <input type="text" v-model="detail.bookPrice" v-show="detail.bookPrice"> -->
        </li>
      </ul>
      <!-- 按钮区 -->
      <div class="button">
        <button @click="putBook">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
import { getBookById, addBook } from '@/api'
export default {
  name: 'detail',
  components: {
    VHeader
  },
  created () {
    this.getBook(this.bookId)
  },
  data () {
    return {
      msg: '详情页',
      bookId: this.$route.params.bookId, // 路由参数
      detail: {}
    }
  },
  methods: {
    async getBook (id) {
      // 数组解构
      [this.detail] = await getBookById(id)
    },
    async putBook () {
      let book = {}
      book.bookName = this.detail.bookName
      book.bookInfo = this.detail.bookInfo
      book.bookPrice = this.detail.bookPrice
      await addBook(book)
    }
  }
}
</script>
<style lang="less" scoped>
  .detail {
    position: absolute;
    left: 0;
    top: 0;
    .content {
      ul {
        margin-top: 2px;
        li {
          padding: 0 10px;
          height: 60px;
          line-height: 60px;
          border-bottom: 1px solid #cfcfcf;
          display: flex;
          align-items: center;
          label {
            width: 100px;
            font-size: 18px;
          }
          p {
            height: 60px;
            line-height: 60px;
            font-size: 16px;
          }
          input {
            flex: 1;
            height: 56px;
            line-height: 56px;
            outline: none;
            border: none;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 16px;
          }
        }
      }
      .button {
        margin-top: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          width: 90%;
          height: 100%;
          border: none;
          outline: none;
          background-color: #259bec;
          color: #ffffff;
          font-size: 20px;
          border-radius: 8px;
        }
      }
    }
  }
</style>
