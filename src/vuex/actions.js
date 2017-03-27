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

export const clearSpecialAction = ({commit}) => {
  commit(types.GETSPECIAL, {})
}

// 更改播放的歌曲url
export const musicPathAction = ({commit}, url)=> {
  commit(types.SETMUSICURL, url)
}

//更新正在播放歌曲的总时间
export const musicTimeAction = ({commit}, time) => {
  commit(types.SETMUSICTIME, time)
}

//更新当前播放位置
export const musicNowTimeAction = ({commit}, nowtime) => {
  commit(types.SETMUSICNOWTIME, nowtime)
}

//更新播放进度条
export const musicProgressAction = ({commit}, percent) => {
  commit(types.SETMUSICPROGRESS, percent)
}

//改变播放按钮样式
export const playMusicAction = ({commit}, playmusic) => {
  commit(types.SETPLAYMUSIC, playmusic)
}

//更改播放时的背景图片
export const playMusicBackground = ({commit}, backgroundImage) => {
  commit(types.SETMUSICBACKGROUND, backgroundImage)
}

//更改播放页面标题
export const musicTitleAction = ({commit}, title) => {
  commit(types.SETMUSICTITLE, title)
}

//控制播放页的显示和隐藏
export const showMusicAction = ({commit}, show) => {
  commit(types.SETSHOWMUSIC, show)
}

//加载播放列表
export const  pushMusicListAction = ({commit}, musicList) => {
  commit(types.PUSHMUSICLIST, musicList)
}

//显示播放列表
export const showMusicListAction = ({ commit }, showMusicList) => {
  commit(types.SHOWMUSICLIST, showMusicList)
}