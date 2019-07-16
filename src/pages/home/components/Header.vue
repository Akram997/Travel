<template>
  <div class="header">
    <div class="header-left">
      <div class="el-icon-arrow-left back-icon"></div>
    </div>
    <div class="header-input">
      <span class="el-icon-search"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/City">
      <div class="header-right">
        {{ this.$store.state.city }}
        <span class="el-icon-caret-bottom arrow-icon"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style scoped>
.header {
  display: flex;
  line-height: 0.8rem;
  background: #00bcd4;
  color: #fff;
}
.header .header-left {
  width: 0.64rem;
  float: left;
  margin-top: 0.15rem;
  font-size: .6rem;
  padding-left: .05rem;
}
.header .header-left .back-icon {
  text-align: center;
  font-size: 0.55rem;
}
.header .header-input {
  flex: 1;
  background: #fff;
  border-radius: 0.1rem;
  margin-top: 0.2rem;
  height: 0.64rem;
  margin-left: 0.2rem;
  color: #ccc;
  line-height: 0.64rem;
  font-size: 13px;
  padding-left: 0.2rem;
}
.header .header-right {
  min-width: 1.04rem;
  padding: 0.1rem;
  float: right;
  text-align: center;
  color: #fff;
}
.header .header-right .arrow-icon {
  margin-left: 0.1rem;
  font-size: 0.24rem;
}
</style>

