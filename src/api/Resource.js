/**
 * Created by tao on 2017/3/8.
 */
import Vue from 'vue'
import axios from 'axios'
import user from './user'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:3000/api';

export default {
  usersign: (data) => axios.post(user.userSign,data),
  userlogin: (data) => axios.post(user.userLogin, data),
  userInfo: () => axios.get(user.userInfo)
}
