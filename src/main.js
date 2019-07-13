import Vue from 'vue'
import App from './App.vue'
// 解决手机端link链接延迟执行的问题  npm install fastclick --save 
import FastClick from 'fastclick'
// 引入router.js文件
import router from './router/index.js'
// 引入统一各个手机浏览器初始样式的不一致
import './assets/styles/reset.css'
// 解决各个分辨率手机的初始像素问题
import './assets/styles/border.css'


Vue.config.productionTip = false
// 调用方法 就可解决延迟执行链接问题
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
