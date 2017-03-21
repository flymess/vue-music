/**
 * Created by Administrator on 2017/3/21.
 */
import * as types from '../mutation-types'
import API from '../../api/Resource'

const state = {
  detail: {},
  musicList: []
}

const actions = {
  setSpecialDetail: function ({commit}, id) {
    return new Promise((res, rej) => {
      API.getSpecialDetail(id).then((data) => {
        commit('GETSPECIALDETAIL', data.data.result)
        res()
      },(err) => {
        rej(err)
      })
    })
  },

  setSpecialMusicList: function ({commit}, id) {
    return new Promise((res, rej) => {
      API.getSpecialMusicList(id).then((data) => {
        commit('GETSPECIALMUSICLIST', data.data.result)
        rej()
      },err => {
        rej(err)
      })
    })
  }
}

const mutations = {
  [types.GETSPECIALDETAIL](state, data){
    state.detail = data
  },

  [types.GETSPECIALMUSICLIST](state, data){
    state.musicList = data
  }
}

const getters = {
  getSpecialDetail: function (state) {
    return state.detail
  },

  getSpecialMusicList: function (state) {
    return state.musicList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}