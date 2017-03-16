/**
 * Created by Administrator on 2017/2/28.
 */
import App from './App.vue'
import signin from './component/Login/signin.vue'
import login from './component/Login/login.vue'
import upload from './component/issue/index.vue'

export default [
  {
    path: '/',
    component: App
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  }
]