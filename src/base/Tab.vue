<template>
  <div class="tab">
    <router-link to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-list"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-collect"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-add"></i>
      <span>添加</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'tab'
}
</script>
<style lang="less" scoped>
.tab {
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 50px;

  display: flex;
  a {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: yellowgreen ;
    &.router-link-active {
      color: red;
    }
  }
}
</style>
