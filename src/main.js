import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.use(VueResource)

new Vue({
  el: '#app',
  router
})
