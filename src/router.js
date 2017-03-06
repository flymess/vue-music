/**
 * Created by Administrator on 2017/2/28.
 */
import signin from './component/Login/signin.vue'

export default [
  {
    path: '/',
    component: resolve => require(['./App.vue'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./component/Login/login.vue'], resolve)
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  }
]