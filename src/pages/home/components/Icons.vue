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
  data(){
      return{
          swiperOption:{},
          iconList:[
              {id:'0001',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',desc:'景点门票'},
              {id:'0002',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',desc:'故宫'},
              {id:'0003',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',desc:'北京必游'},
              {id:'0004',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',desc:'水上乐园'},
              {id:'0005',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',desc:'爬长城'},
              {id:'0006',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',desc:'北京欢乐谷'},
              {id:'0007',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',desc:'动植物园'},
              {id:'0008',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',desc:'北京野生动物园'},
              {id:'0009',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',desc:'北京世园会'}
          ]
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
