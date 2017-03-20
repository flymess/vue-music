/**
 * Created by Administrator on 2017/3/8.
 */
import * as types from './mutation-types'
import api from '../api/Resource'

export const sendMessage = ({commit}, accountSid, smsContent, to, timestamp, sig, respDataType) => {
  api.sendMessage()
    .then((req) => {
      commit(types.SEND_MESSAGE, req.data)
    })
}

export const getUserInfo = ({commit}) => {
  api.userInfo().then(() => {

  })
}

export const upload = ({commit}, data) => {
  return new Promise((res, rej) => {
    api.uploadSpecial(data).then((data) => {
      res(data.data.status)
    },() => {
      rej()
    })
  })
}

export const getSpecialAction = ({commit}) => {
  return new Promise((res, rej) => {
    api.getSpecial().then((data) => {
      commit(types.GETSPECIAL, data.data.result)
      res(data.data.result)
    },(err) => {
      rej(err)
    })
  })
}