<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <a href=""></a>
    <ul>
        <router-link tag="li"
          class="item border-botton"
          v-for="item in recommendList"
          :key="item.id"
          :to="'/detail/' + item.id"
        >
          <img :src="item.imgUrl" class="item-img" />
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc }}</p>
            <button class="item-button">查看详细</button>
          </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: ["recommendList"],
  data() {
    return {};
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
