/**
 * Created by Administrator on 2017/2/28.
 */
const App = resolve => require(['./App.vue'], resolve)
const main = resolve => require(['./component/index.vue'], resolve)
const special = resolve => require(['./component/special/index.vue'], resolve)
const profile = resolve => require(['./component/myprofile/index.vue'], resolve)
const login = resolve => require(['./component/Login/login.vue'], resolve)
const signin = resolve => require(['./component/Login/signin.vue'], resolve)
const upload = resolve => require(['./component/issue/index.vue'], resolve)

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
    component:upload
  }
]
