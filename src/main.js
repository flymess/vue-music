import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './vuex/store'
import { AjaxPlugin } from 'vux'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(AjaxPlugin)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router
})
