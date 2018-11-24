<template>
  <div class="add">
    <v-header :back="true">添加</v-header>
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
          <input type="text" v-model="book.bookPrice">
        </li>
        <li>
          <label for="book-cover">书籍封面:</label>
          <input type="text" v-model="book.bookCover">
        </li>
      </ul>
      <div class="button">
        <button @click="add">添加</button>
      </div>
    </div>
  </div>
</template>
<script>
import VHeader from '@/base/VHeader.vue'
import { addBook } from '@/api'
export default {
  name: 'add',
  components: {
    VHeader
  },
  data () {
    return {
      book: {}
    }
  },
  methods: {
    async add () {
      await addBook(this.book)
      this.$router.push({
        name: 'list'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.add {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 20;
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
