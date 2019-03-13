import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Records from '@/views/Records'
import Cart from '@/views/Cart'
import Login from '@/views/Login'
import Register from '@/views/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/records',
      name: 'records',
      component: Records
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    }
  ]
})
