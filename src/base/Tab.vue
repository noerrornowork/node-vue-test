<template>
  <div class="tab">
    <router-link to="/home">
    <span>首页</span>
    <i class="iconfont icon-"></i>
    </router-link>
    <router-link to="/list">
    <span>列表</span>
    <i class="iconfont icon-"></i>
    </router-link>
    <router-link to="/collect">
    <span>收藏</span>
    <i class="iconfont icon-"></i>
    </router-link>
    <router-link to="/add">
    <span>添加</span>
    <i class="iconfont icon-"></i>
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
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #259bec;

  position: absolute;
  left: 0;
  bottom: 0;

  display: flex;
  a {
    flex: 1;
    color: #FFFFFF ;
    font-size: 16px;
    &.router-link-active {
      color: #000;
    }
  }
}
</style>
