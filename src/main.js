// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'vant/lib/index.css'
import '@/assets/css/reset.css'

import {NavBar, Icon, Tabbar, TabbarItem, Swipe, SwipeItem, Lazyload, Field, Button} from 'vant'
Vue.config.productionTip = false
Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Lazyload).use(Field).use(Button)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
})
