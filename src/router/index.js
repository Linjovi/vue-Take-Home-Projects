import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Weather from '@/views/weather/index'
import Wiki from '@/views/wiki/index'

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
        {path:'weather',component:Weather,name:"weather",
        // children:[
        //   {path:'add',component:AddConsumer,name:"AddConsumer"}
        // ]
        },
        {path:'wiki',component:Wiki,name:"wiki"}
      ]
    },
  ]
})
