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
                    <span class="td-icon td-icon-last"></span>
                    <span class="td-icon td-icon-play" @click.stop="play" :class="[$store.state.playMusic ? 'td-icon-play' : 'td-icon-pause']"></span>
                    <span class="td-icon td-icon-next"></span>
                    <audio id="music" :src="musicPath" @canplaythrough="play" v-on:timeupdate="updateNowTime"></audio>
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
      playmusic: function () {
        window.music.play()
        this.$store.dispatch('playMusicAction', false)
      },
      pausemusic: function () {
        window.music.pause()
        this.$store.dispatch('playMusicAction', true)
      },
      updateNowTime: function () {
        let nowTime = parseInt(window.music.currentTime / 60) + ":" + parseInt(window.music.currentTime % 60)
        let percent = window.music.currentTime/window.music.duration * 100
        this.$store.dispatch('musicNowTimeAction', nowTime)
        this.$store.dispatch('musicProgressAction', percent)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
    @import '~/vux/src/styles/reset.less';

    .main{
        &::-webkit-scrollbar{
            display:none;
        }
    }

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