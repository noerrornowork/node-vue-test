<template>
  <div class="v-header">
    <div class="left"></div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-header'
}
</script>
<style lang="less" scoped>
.v-header {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-weight: bold;
  box-shadow: 0px 0px 3px #cfcfcf;
  .left {
    width: 40px;
    position: relative;
    &:after {
      display: block;
      content: '';
      width: 12px;
      height: 12px;
      border-color: #259bec;
      border-style: solid;
      border-width: 0 0 2px 2px;
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: absolute;
      left: 0;
      top: 50%;
      margin-left: 16px;
      margin-top: -6px;
    }
  }
  .right {
    margin-left: -40px;
    margin: 0 auto;
    font-size: 20px;
  }
}
</style>
