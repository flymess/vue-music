/**
 * Created by tao on 2017/3/8.
 */
import Vue from 'vue'
import { AjaxPlugin } from 'vux'

Vue.use(AjaxPlugin)

const instance = Vue.$http.create({
  headers: 'application/x-www-form-urlencoded',
  responseType: 'json',
  method: 'post'
})
export const sendMessage =  instance.post('https://api.miaodiyun.com/20150822/industrySMS/sendSMS',{

})