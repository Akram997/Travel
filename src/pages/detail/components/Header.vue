<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="el-icon-arrow-left header-abs-back"></div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="el-icon-arrow-left header-fixed-back"></div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetaiHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.header .header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
}
.header .header-abs .header-abs-back {
  color: #fff;
  font-size: 0.6rem;
  line-height: 0.75rem;
}
.header .header-fixed {
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background-color: #00bcd4;
  font-size: 0.32rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.header .header-fixed .header-fixed-back {
  widows: 0.64rem;
  text-align: center;
  font-size: 0.4rem;
  position: absolute;
  top: 0.23rem;
  left: 0.2rem;
  color: #fff;
}
</style>
