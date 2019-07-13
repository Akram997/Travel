<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-botton" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
            <img :src="item.imgUrl" class="item-img"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        { id: "0001", imgUrl: "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg", title: "京城周末撒欢", desc: "在帝都过周末，不仅仅是城中游！" },
        { id: "0002", imgUrl: "http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg", title: "京城溜娃必去", desc: "德智体美劳全面发展的亲子日，这些地方该去看看…" },
        { id: "0003", imgUrl: "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg", title: "帝都必打卡", desc: "来北京必去的景点非这些地方莫属" },
        { id: "0004", imgUrl: "http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg", title: "漂流勇进，烧烤露营", desc: "轻松水上漂，任我乐逍遥" },
        { id: "0005", imgUrl: "http://img1.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg", title: "北京清凉避暑胜地", desc: "到大自然中享受“天然空调”的清凉" },
      ]
    };
  }
};
</script>

<style scoped>
.weekend .title {
  line-height: 0.7rem;
  background-color: #eee;
  text-indent: 0.2em;
  margin-top: 0.2rem;
  font-size: 0.2.5rem;
}
.weekend .item .item-img-wrapper{
    height: 0;
    overflow: hidden;
    padding-bottom: 33.9%
}
.weekend .item .item-img-wrapper .item-img {
  width: 100%;
}
.weekend .item .item-info {
  padding: .1rem;
}
.weekend .item .item-info .item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.weekend .item .item-info .item-desc {
  line-height: 0.4rem;
  color: #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .24rem;
}
.weekend .item .item-info .item-button {
  background-color: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
  color: #fff;
  margin-top: 0.16rem;
  line-height: 0.44rem;
}
</style>
