import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'

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
    name: 'Home',
    component: Home
  }
]

export default new Router({
  routes
})
