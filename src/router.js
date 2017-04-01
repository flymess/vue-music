/**
 * Created by Administrator on 2017/2/28.
 */
import App from './App.vue'
import main from './component/index.vue'
import signin from './component/Login/signin.vue'
import login from './component/Login/login.vue'
import upload from './component/issue/index.vue'
import special from './component/special/index.vue'
import profile from './component/myprofile/index.vue'

export default [
  {
    path: '/',
    component: App,
    children:[
      {
        path:'/',
        component: main
      },
      {
        path: '/special/:id',
        name: 'special',
        component: special
      },
      {
        path: '/profile',
        component: profile,
        name: 'profile'
      }
    ]
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
