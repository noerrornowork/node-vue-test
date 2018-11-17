<template>
  <div class="tab">
    <router-link to="/home">
    <i class="iconfont icon-shouye"></i>
    <span>首页</span>
    </router-link>
    <router-link to="/list">
    <i class="iconfont icon-list"></i>
    <span>列表页</span>
    </router-link>
    <router-link to="/collect">
    <i class="iconfont icon-shoucang"></i>
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
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: 1px solid #000;

  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
