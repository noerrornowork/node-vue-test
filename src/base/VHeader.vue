<template>
  <div class="v-header">
    <slot></slot>
    <i class="iconfont icon-back" v-if="back" @click="goBack"></i>
  </div>
</template>
<script>
export default {
  name: 'v-header',
  props: {
    back: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.v-header {
  position: fixed;
  left: 0;
  top: 0;

  background-color: #afdeee;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-weight: bold;
  i {
    position: absolute;
    left: 10px;
    font-size: 20px;
  }
}
</style>
