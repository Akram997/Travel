<template>
  <div class="list" ref="wrapper">
    <div>
      <div id="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div id="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div id="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscrool from "better-scroll";
import { log } from "util";
export default {
  name: "CityList",
  props: ["cities", "hot", "letter"],
  mounted() {
    this.scroll = new Bscrool(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  methods: {
    handleCityClick(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/"); 
    }
  }
};
</script>   

<style scoped>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
}
.list .title {
  line-height: 0.54rem;
  background-color: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}
.list .border-topbottom {
  border-top: 1px solid #ccc;
}
.list .border-topbottom {
  border-bottom: 1px solid #ccc;
}
.list .button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;
}
.list .button-list .button-wrapper {
  widows: 33.33%;
  float: left;
}
.list .button-list .button-wrapper .button {
  text-align: center;
  margin: 0.1rem;
  border: 0.02rem solid #ccc;
  padding: 0.1rem 0;
  border-radius: 0.06rem;
  width: 2.02rem;
}
.list .item-list .item {
  line-height: 0.76rem;
  padding-left: 0.2rem;
  border-bottom: 1px solid #ccc;
}
</style>
