<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,i) in pages" :key="i">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props:['iconList'],
  data(){
      return{
          swiperOption:{}
      }
  },
  computed:{
      pages(){
          const pages = []
          this.iconList.forEach((item,index) => {
              const page = Math.floor(index/8)
              if(!pages[page]){
                  pages[page] = []
              }
              pages[page].push(item)
          })
          return pages;
      }
  }
};
</script>

<style scoped>
.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons{
    margin-top: .1rem;
}
.icons .icon {
  width: 25%;
  float: left;
  padding-bottom: 25%;
  overflow: hidden;
  position: relative;
  height: 0;
}
.icons .icon .icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}
.icons .icon .icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  color: #333;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.icons .icon .icon-img .icon-img-content {
  height: 100%;
  display: block;
  margin: 0 auto;
}
</style>
