<template>
  <div class="wrapper" v-if="showSwiper ">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: ["swiperList"],
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed:{
    showSwiper(){
      return this.swiperList.length
    }
  }
};
</script>

<style scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30.75%;
  background-color: #eee;
}
.wrapper .swiper-img {
  width: 100%;
}
</style>
