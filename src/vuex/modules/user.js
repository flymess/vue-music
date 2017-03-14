/**
 * Created by Administrator on 2017/3/12.
 */
import * as types from '../mutation-types'
import API from '../../api/Resource'

const state = {
  userinfo: {},
  token: ''
}

const actions = {
  signUserInfo: function ({commit}, data) {
    return new Promise((res, rej) => {
      API.usersign(data).then((data) => {
        res(data.data)
      },(err) => {
        rej()
      })
    })
  },
  Login: function ({commit}, data) {
    return new Promise((res, rej) => {
      API.userlogin(data).then((data) => {
        res(data.data)
        commit(types.TOKEN, data.data.result)
      }).catch(() => {
        rej()
      })
    })
	}
}

const mutations = {
  [types.TOKEN](state, data){
    state.token = data.token
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}