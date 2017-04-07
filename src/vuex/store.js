/**
 * Created by Administrator on 2017/3/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import * as actions from './actions'
import user from './modules/user'
import special from './modules/special'

Vue.use(Vuex)

const state = {
  authCode: '',
  SpecialList: {},
  musicPath: '',
  playBackground: "",
  time: '0:0',
  nowTime: '0:0',
  percent: 0,
  playMusic: true,
  bgImg: '',
  XTitle: '',
  show: false,
  NowPlay: '',
  musicList: [],
  showMusicList: false,
  index: 0,
  playMode: 0,
  userInfo: {},
  collectionId: 0
}

const mutations = {
  [types.SEND_MESSAGE](state, data){
    state.authCode = data
  },
  [types.GETSPECIAL](state, data){
    state.SpecialList = data
  },
  [types.SETMUSICURL](state, url){
    state.musicPath = url
    state.NowPlay = url
  },
  [types.SETMUSICTIME](state, time){
    state.time = time
  },
  [types.SETMUSICNOWTIME](state, nowtime){
    state.nowTime = nowtime
  },
  [types.SETMUSICPROGRESS](state, percent){
    state.percent = percent
  },
  [types.SETPLAYMUSIC](state, playmusic) {
    state.playMusic = playmusic
  },
  [types.SETMUSICBACKGROUND](state, bgImg) {
    state.bgImg = bgImg
  },
  [types.SETMUSICTITLE](state, title) {
    state.XTitle = title
  },
  [types.SETSHOWMUSIC](state, show) {
    state.show = show
  },
  [types.PUSHMUSICLIST](state, musicList){
    state.musicList = musicList
  },
  [types.SHOWMUSICLIST](state, showMusicList){
    state.showMusicList = showMusicList
  },
  index(state, index) {
    state.index = index
  },
  chagePlayMode(state, index){
    state.playMode = index
  },
  getUserInfo(state, userinfo){
    state.userInfo = userinfo
  },
  collection(state, collectionId) {
    state.collectionId = collectionId
  }
}

const getters = {
  getAuthCode: function (state) {
    return state.authCode
  },
  GetSpecialList: function (state) {
    return state.SpecialList
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  modules: {
    user: user,
    special: special
  },
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
