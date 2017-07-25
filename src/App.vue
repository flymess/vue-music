<template>
    <div class="main">
        <router-view></router-view>
        <!--固定在下方的播放器-->
        <blur :url="$store.state.bgImg" v-show="!$store.state.show" :height="50" style="position: fixed;bottom: 0;width: 100%;" @click.native="showPlayer">
            <div class="play-fixed" flex="main:justify box:last">
                <div flex="cross:center">
                    <img :src="$store.state.bgImg" alt="">
                    <span style="display: inline-block;max-width: 200px;" class="td-white-1">{{$store.state.XTitle}}</span>
                </div>
                <div>
                    <span class="td-icon td-icon-last" @click.stop="lastPlay"></span>
                    <span class="td-icon td-icon-play" @click.stop="play" :class="[$store.state.playMusic ? 'td-icon-play' : 'td-icon-pause']"></span>
                    <span class="td-icon td-icon-next" @click.stop="nextPlay"></span>
                    <audio id="music" :src="musicPath" @canplaythrough="play" v-on:timeupdate="updateNowTime" @ended="autoPlayNext"></audio>
                </div>
            </div>
        </blur>
        <!--固定在下方的播放器 end-->
        <transition name="custom-classes-transition" enter-active-class="animated slideInUp fast" leave-active-class="animated slideOutDown" mode="out-in">
            <player v-if="$store.state.show"></player>
        </transition>
    </div>
</template>

<script>
  import {Blur} from 'vux'
  import axios from 'axios'
  import player from './component/Play/index.vue'

  export default {
    data() {
      return {
        playMusic: true
      }
    },
    components: {
      player,
      Blur
    },
    computed:{
      musicPath: function () {
        return 'http://localhost:3000/' + this.$store.state.musicPath
      }
    },
    mounted() {
      let url = "http://source.unsplash.com/random/" + window.innerWidth + "x" + window.innerHeight
      axios.get(url).then(req => {
        this.$store.dispatch('playMusicBackground', req.request.responseURL)
      })
    },
    methods: {
      showPlayer() {
        this.$store.dispatch('showMusicAction', true)
      },
      play: function () {
        let time = parseInt(window.music.duration / 60) + ":" + parseInt(window.music.duration % 60)
        this.$store.dispatch('musicTimeAction', time)
        if (this.$store.state.playMusic) {
          this.playmusic()
        } else {
          this.pausemusic()
        }
      },
      playmusic() {
        window.music.play()
        this.$store.dispatch('playMusicAction', false)
      },
      pausemusic() {
        window.music.pause()
        this.$store.dispatch('playMusicAction', true)
      },
      updateNowTime() {
        let nowTime = parseInt(window.music.currentTime / 60) + ":" + parseInt(window.music.currentTime % 60)
        let percent = window.music.currentTime/window.music.duration * 100
        this.$store.dispatch('musicNowTimeAction', nowTime)
        this.$store.dispatch('musicProgressAction', percent)
      },
      nextPlay() {
        let index = 0
        //playMode 0=循环播放 1=随机播放 2=单曲循环
        if (this.$store.state.playMode == 1){
            // 更新音乐索引为随机数
            index = parseInt(Math.random()*(this.$store.state.musicList.length - 1))
            console.log(index)
        }else{
            index = (this.$store.state.index + 1) % this.$store.state.musicList.length
        }

          //防止随机值是当前播放导致播放状态改变
          if (this.$store.state.musicList[index].path == this.$store.state.NowPlay){
              return
          }

          //更新当前播放 下一曲
          this.$store.commit('index', index)
          this.$store.dispatch('musicPathAction', this.$store.state.musicList[index].path)
          this.$store.dispatch('musicTitleAction', this.$store.state.musicList[index].name)

          //更新播放按钮状态
          this.$store.dispatch('playMusicAction', true)
      },
      lastPlay() {
          let index = 0
          //playMode 0=循环播放 1=随机播放 2=单曲循环
          if (this.$store.state.playMode == 1){
              // 更新音乐索引为随机数
              index = parseInt(Math.random()*(this.$store.state.musicList.length - 1))
          }else{
              index = (this.$store.state.index - 1 + this.$store.state.musicList.length) % this.$store.state.musicList.length
          }

          //防止随机值是当前播放导致播放状态改变
          if (this.$store.state.musicList[index].path == this.$store.state.NowPlay){
              return
          }

          //更新当前播放 上一曲
          this.$store.commit('index', index)
          this.$store.dispatch('musicPathAction', this.$store.state.musicList[index].path)
          this.$store.dispatch('musicTitleAction', this.$store.state.musicList[index].name)

          //更新播放按钮状态
          this.$store.dispatch('playMusicAction', true)
      },
      autoPlayNext() {
          //playMode 0=循环播放 1=随机播放 2=单曲循环
          let index = 0
          if (this.$store.state.playMode == 1){
              // 更新音乐索引为随机数
              index = parseInt(Math.random()*(this.$store.state.musicList.length - 1))
          }else if (this.$store.state.playMode == 2){
              window.music.load()
              window.music.play()
              console.log(1)
              index = this.$store.state.index
              this.$store.dispatch('playMusicAction', true)

          }else{
              index = (this.$store.state.index + 1) % this.$store.state.musicList.length
          }

          //防止随机值是当前播放导致播放状态改变
          if (this.$store.state.musicList[index].path == this.$store.state.NowPlay){
              return
          }

          //更新当前播放 上一曲
          this.$store.commit('index', index)
          this.$store.dispatch('musicPathAction', this.$store.state.musicList[index].path)
          this.$store.dispatch('musicTitleAction', this.$store.state.musicList[index].name)

          //更新播放按钮状态
          this.$store.dispatch('playMusicAction', true)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    @import '~vux/src/styles/reset.less';

    .play-fixed{
        height:50px;
        width:100%;
        position: fixed;
        bottom:0px;
        div{
            img {
                width: 40px;
                height: 40px;
                margin: 5px;
                border-radius: 5px;
            }
            span{
                margin-left:10px;
                font-size:14px;
            }
            span.td-icon{
                display: inline-block;
                font-size:30px;
                color: #fff;
            }
        }
    }
</style>