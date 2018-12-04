<template>
  <div class="add">
    <v-header :back="true">添加</v-header>
    <div class="content">
      <ul>
        <li>
          <label for="book-name">书籍名称:</label>
          <input type="text" v-model="book.bookName" required="required" v-color v-focus placeholder="请输入书籍名称">
        </li>
        <li>
          <label for="book-info">书籍信息:</label>
          <input type="text" v-model="book.bookInfo" maxlength="30" placeholder="请输入书籍信息">
        </li>
        <li>
          <label for="book-price">书籍价格:</label>
          <input type="text" v-model.number="book.bookPrice" placeholder="请输入书籍价格">
        </li>
        <li>
          <label for="book-cover">书籍封面:</label>
          <input type="text" v-model="book.bookCover" placeholder="请输入书籍封面">
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
      // 校验书籍名称
      // if (!this.book.bookName) {
      //   this.$vux.toast.show('请输入书籍名称')
      //   return
      // }
      if (this.book.bookName && this.book.bookName.length > 15) {
        this.$vux.toast.show('输入名称不能超过15个字符')
        this.book.bookName = ''
        return
      }
      // 校验书籍信息
      if (this.book.bookInfo && this.book.bookInfo.length > 30) {
        this.$vux.toast.show('输入信息不能超过30个字符')
        this.book.bookInfo = ''
        return
      }
      // 校验书籍价格
      // let reg = /^\d+$/ // 非负数
      // if (this.book.bookPrice && !reg.test(this.book.bookPrice)) {
      //   this.$vux.toast.show('输入价格不能为负或英文或汉字')
      //   this.book.bookPrice = ''
      //   return
      // }
      // 校验书籍封面: URL
      // let url = /^((ht|f)tps?):\/\/[\w\\-]+(\.[\w\\-]+)+([\w\\-\\.,@?^=%&:\\/~\\+#]*[\w\-\\@?^=%&\\/~\\+#])?$/
      // if (this.book.bookCover && !url.test(this.book.bookCover)) {
      //   this.$vux.toast.show('输入url路径必须以http,https,sftp,ftp开头')
      //   this.book.bookCover = ''
      //   return
      // }
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
