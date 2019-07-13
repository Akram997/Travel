<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <a href=""></a>
    <ul>
      <li class="item border-botton" v-for="item in recommendList" :key="item.id">
        <img
          :src="item.imgUrl"
          class="item-img"
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详细</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        { id: "0001", imgUrl: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg", title: "故宫", desc: "世界五大宫之首，穿越与您近在咫尺" },
        { id: "0002", imgUrl: "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg", title: "八达岭长城", desc: "不到长城非好汉" },
        { id: "0003", imgUrl: "http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg", title: "北京欢乐谷", desc: "亚洲唯一飞行式过山车等你来挑战" },
        { id: "0004", imgUrl: "http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg", title: "北京动物园", desc: "极地极美，带孩子去看涨知识，和海豚亲密接触。" },
        { id: "0005", imgUrl: "http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg", title: "京东石林峡", desc: "谷内山峰挺立峭拔，天上美景落人间" },
        { id: "0006", imgUrl: "http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg", title: "恭王府", desc: "一座恭王府，半部清代史" },
        { id: "0007", imgUrl: "http://img1.qunarzz.com/sight/p0/1510/8e/8eea8eb6f41698290.img.jpg_200x200_595cfa1d.jpg", title: "金隅凤山温泉", desc: "在温泉汤池中增添独享欢乐的私密空间" },
        { id: "0008", imgUrl: "http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg", title: "北京野生动物园", desc: "敢与森林之王近距离接触吗？" },
        { id: "0009", imgUrl: "http://img1.qunarzz.com/sight/p0/1608/4f/4fc3f5a1b838f279a3.water.jpg_200x200_e6528ef6.jpg", title: "北京杜莎夫人蜡像馆", desc: "听说能遇到杰伦哟" },
      ]
    };
  }
};
</script>

<style scoped>
.recommend .title {
  line-height: 0.7rem;
  background-color: #eee;
  text-indent: 0.2em;
  margin-top: 0.2rem;
  font-size: 0.2.5rem;
}
.recommend .item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
}
.recommend .item .item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}
.recommend .item .item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;
}
.recommend .item .item-info .item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recommend .item .item-info .item-desc {
  line-height: 0.4rem;
  color: #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recommend .item .item-info .item-button {
  background-color: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
  color: #fff;
  margin-top: 0.16rem;
  line-height: 0.44rem;
}
</style>
