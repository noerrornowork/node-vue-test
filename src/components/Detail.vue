<template>
  <div class="detail">
    <v-header :back="true">详情页</v-header>
    <div class="content">
      <ul>
        <li>
          <label for="book-name">书籍名称:</label>
          <input type="text" v-model="book.bookName">
        </li>
        <li>
          <label for="book-info">书籍信息:</label>
          <input type="text" v-model="book.bookInfo">
        </li>
        <li>
          <label for="book-price">书籍价格:</label>
          <p>{{ book.bookPrice | priceFilter }}</p>
          <!-- <input type="text" v-model="detail.bookPrice" v-show="detail.bookPrice"> -->
        </li>
      </ul>
      <div class="button">
        <button @click="update">确认</button>
      </div>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
import { getBookById, updateBook } from '@/api'
export default {
  name: 'detail',
  components: {
    VHeader
  },
  created () {
    this.getBook()
  },
  computed: {
    bId () {
      return this.$route.params.id
    }
  },
  watch: {
    $route () {
      // 路由发生改变,重新发送请求获取数据
      this.getBook()
      // 如果是空对象 需要跳转回到列表页
      if (Object.keys(this.book).length > 0) {
        this.$router.push({
          name: 'list'
        })
      }
    }
  },
  data () {
    return {
      msg: '详情页',
      book: {}
    }
  },
  methods: {
    async getBook () {
      this.book = await getBookById(this.bId)
    },
    async update () {
      await updateBook(this.bId, this.book)
      // 修改完成后,跳转页面
      this.$router.push({
        name: 'list'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .detail {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: #ffffff;
    .content {
      ul {
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
        position: fixed;
        left: 0;
        bottom: 20px;

        width: 100%;
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
