<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style scoped>
.header {
  display: flex;
  line-height: 0.86rem;
  background: #00bcd4;
  color: #fff;
}
.header .header-left {
  width: 0.64rem;
  float: left;
}
.header .header-left .back-icon{
  text-align: center;
  font-size: .4rem;
}
.header .header-input {
  flex: 1;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.12rem;
  height: 0.64rem;
  margin-left: 0.2rem;
  color: #ccc;
  line-height: 0.64rem;
  font-size: 13px;
  padding-left: .2rem;
}
.header .header-right {
  width: 1.24rem;
  float: right;
  text-align: center;
}
.header .header-right .arrow-icon{
  margin-left: .1rem;
  font-size: .24rem;
}
</style>

