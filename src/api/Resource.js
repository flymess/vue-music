/**
 * Created by tao on 2017/3/8.
 */
import Vue from 'vue'
import upload from './upload'
import axios from 'axios'
import user from './user'
import special from './special'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:3000/api';

let uploading = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  data: FormData
})

export default {
  usersign: (data) => axios.post(user.userSign,data),
  userlogin: (data) => axios.post(user.userLogin, data),
  userInfo: () => axios.get(user.userInfo),
  uploadSpecial: (data) => uploading.post(upload.uploadFile, data),
  getSpecial: () => axios.get(special.getSpecial)
}
