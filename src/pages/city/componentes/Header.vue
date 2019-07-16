<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="el-icon-arrow-left header-back"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style scoped>
.header {
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background-color: #00bcd4;
  font-size: 0.32rem;
  position: relative;
}
.header .header-back {
  widows: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  position: absolute;
  top: .23rem;
  left: 0.2rem;
  color: #fff;
}
</style>
