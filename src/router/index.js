import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/Home.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {path:'/',name:'Home',component:Home}
    ]
})

export default router;