<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="this.bannerImg" class="banner-img" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="el-icon-picture banner-icon"></span
          >{{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <fade>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade>
  </div>
</template>

<script>
import CommonGallary from "../../../commom/gallary/Gallary.vue";
import Fade from "../../../commom/fade/Fade.vue";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary,
    Fade
  },
  props: ["sightName", "bannerImg", "gallaryImgs"],
  data() {
    return {
      showGallary: false
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    }
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
}
.banner .banner-img {
  width: 100%;
}
.banner .banner-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.6rem;
  display: flex;
  color: #fff;
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
.banner .banner-info .banner-title {
  font-size: 0.32rem;
  padding: 0 0.2rem;
  flex: 1;
}
.banner .banner-info .banner-number {
  margin-top: 0.14rem;
  padding: 0 0.4rem;
  line-height: 0.32rem;
  height: 0.32rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 0.24rem;
}
.banner .banner-info .banner-number .banner-icon {
  font-size: 0.24rem;
}
</style>
