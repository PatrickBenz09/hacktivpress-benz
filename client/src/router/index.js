import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import SumArticle from '@/components/SumArticle'
import DetailArticle from '@/components/DetailArticle'

Vue.use(Router)

let routes = [
  {
    path: '/test',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/',
    alias: '/home',
    component: Home,
    children: [
      { path: '/', component: SumArticle },
      { path: '/article/:id', component: DetailArticle }
    ]
  }
]

export default new Router({
  routes
})
