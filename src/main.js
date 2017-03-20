import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import { AjaxPlugin } from 'vux'
import { ToastPlugin } from 'vux'
import { LoadingPlugin } from 'vux'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router
})
