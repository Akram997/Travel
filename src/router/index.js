import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) 

let router = new VueRouter({
    routes:[
        {path:'/',name:'Home',component:() => import ('../pages/home/Home.vue')},
        {path:'/city',name:'City',component:() => import ('../pages/city/City.vue')},
        {path:'/detail/:id',name:'Detail',component:() => import ('../pages/detail/Detail.vue')},
    ],
    scrollBehavior(){
        return {x:0,y:0}
    }
})

export default router;