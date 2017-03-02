import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import VueResource from 'vue-resource'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.use(VueResource)

new Vue({
  el: '#app',
  router
})
