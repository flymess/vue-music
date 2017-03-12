/**
 * Created by Administrator on 2017/3/12.
 */
import * as types from '../mutation-types'
import API from '../../api/Resource'

const state = {
  userinfo: {}
}

const actions = {
  signUserInfo: function ({commit}, data) {
    return new Promise((res, rej) => {
      API.usersign(data).then(() => {
        res()
      })
    })
  }
}

const mutations = {}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}