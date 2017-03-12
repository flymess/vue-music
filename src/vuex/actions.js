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