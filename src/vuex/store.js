/**
 * Created by Administrator on 2017/3/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import * as actions from './actions'
import user from './modules/user'

Vue.use(Vuex)

const  state = {
  authCode: ''
}

const mutations = {
  [types.SEND_MESSAGE](state, data){
    state.authCode = data
  }
}

const getters = {
  getAuthCode: function (state) {
    return state.authCode
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    user: user
  },
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})