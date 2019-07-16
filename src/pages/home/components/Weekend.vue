<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-botton"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:['weekendList'],
  data() {
    return {};
  }
};
</script>

<style scoped>
.weekend .title {
  line-height: 0.7rem;
  background-color: #eee;
  text-indent: 0.2em;
  font-size: 0.2.5rem;
}
.weekend .item .item-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 37.09%;
}
.weekend .item .item-img-wrapper .item-img {
  width: 100%;
}
.weekend .item .item-info {
  padding: 0.1rem;
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
  font-size: 0.24rem;
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
