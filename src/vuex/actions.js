/**
 * Created by Administrator on 2017/3/8.
 */
import * as types from './mutation-types'
import api from '../api'

export const sendMessage = ({ dispatch }, accountSid, smsContent, to, timestamp, sig, respDataType) => {
  api.sendMessage
  dispatch(types.SEND_MESSAGE)
}
