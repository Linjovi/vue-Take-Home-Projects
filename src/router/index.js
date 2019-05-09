import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Weather from '@/views/weather/index'
import Wiki from '@/views/wiki/index'
import Bingo from '@/views/bingo/index'
import Simon from '@/views/simon/index'
import Recipe from '@/views/recipe/index'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/weather',//设置默认指向的路径
      component: Home,
      children:[
        {path:'weather',component:Weather,name:"weather"},
        {path:'wiki',component:Wiki,name:"wiki"},
        {path:'bingo',component:Bingo,name:"bingo"},
        {path:'simon',component:Simon,name:"simon"},
        {path:"recipe",component:Recipe,name:"recipe"},
      ]
    },
  ]
})
