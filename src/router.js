/**
 * Created by Administrator on 2017/2/28.
 */
import App from './App.vue'
import signin from './component/Login/signin.vue'

export default [
  {
    path: '/',
    component: App
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