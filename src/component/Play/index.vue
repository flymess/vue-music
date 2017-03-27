<template>
    <div class="audio-warp"
         style="position: fixed;top: 0;width: 100%;height: 100%;z-index: 999;overflow: scroll;background:#fff">
        <blur :height="xHeight"
              :url="$store.state.bgImg">
            <header class="td-white-1">
                <span @click="hiddenMusic"><i class="td-icon td-icon-back"></i></span>
                <span>{{$store.state.XTitle}}</span>
            </header>
            <div class="play-img"
                 flex="cross:center main:center">
                <img alt=""
                     class="imgAnimate"
                     :style="[{'animation-play-state': start, backgroundImage: 'url('+$store.state.bgImg+')'}]"
                />
            </div>
            <audio-player :data-url="musicPath"
                          @show="show"
                          @run="ready">

            </audio-player>
        </blur>
        <!--控制播放列表的显示-->
        <transition name="custom-classes-transition" enter-active-class="animated slideInUp fast" leave-active-class="animated slideOutDown" mode="out-in">
            <div class="audio-musicList" v-show="$store.state.showMusicList">
                <header class="td-white-1 audio-musicList-header" flex="main:left cross:center">
                    <span @click="hiddenMusicList"><i class="td-icon td-icon-back"></i></span>
                    <span style="margin-left:10px">{{$store.state.XTitle}}</span>
                </header>
                <cell :title="item.name"
                      class="weui-cell-first"
                      :key="index"
                      v-for="(item,index) in $store.state.musicList"
                      @click.native="play(item.path, item.name)">
                    <span class="td-icon-heart" :class="[item.path === $store.state.NowPlay ? 'play-color-red' : '']"></span>
                </cell>
            </div>
        </transition>
        <!--控制播放列表的显示 end-->
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @keyframes a {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
        }
    }

    .audio-warp {
        &::-webkit-scrollbar {
            display: none;
        }
        header {
            margin: 5px 20px;
            span {
                &:last-child {
                    text-align: center;
                    display: inline-block;
                    width: 100%;
                    color: #af1d4e;
                }
            }
        }
    }

    .td-icon-back {
        font-style: normal;
        font-size: 22px;
        color: #af1d4e;
        &:before {
            font-family: xiang;
            content: '\e913';
        }
    }

    .play-img {
        height: 80%;
        width: 100%;
    }

    .play-img img {
        border-radius: 50%;
        height: 250px;
        width: 250px;
        -webkit-animation: a 18s linear infinite;
        animation: a 18s linear infinite;
    }

    .imgAnimate {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    .audio-musicList{
        position: fixed;
        top:0;
        width:100%;
        height:100%;
        background: #fff;
        .audio-musicList-header{
            span:last-child{
                width:auto;
            }
        }
        .weui-cell-first{
            padding-left: 15px;
        }
    }
</style>
<script>
  import AudioPlayer from './Audio.vue'
  import {Blur, Cell} from 'vux'

  export default{
    data() {
      return {
        start: 'running'
      }
    },
    components: {
      AudioPlayer,
      Blur,
      Cell
    },
    computed: {
      musicPath: function () {
        return 'http://localhost:3000/' + this.$store.state.musicPath
      },
      xHeight: function () {
        let xheight = window.innerHeight
        return xheight
      },
      xUrl: function () {
        let url = "http://source.unsplash.com/random/" + window.innerWidth + "x" + window.innerHeight
        return url
      }
    },
    methods: {
      ready(run) {
        this.start = run
      },

      hiddenMusic() {
        this.$store.dispatch('showMusicAction', false)
      },

      show(show) {
        this.$store.dispatch('showMusicListAction', show)
      },

      hiddenMusicList() {
        this.$store.dispatch('showMusicListAction', false)
      },

      play(path, name) {
          if (path == this.$store.state.NowPlay){

          }else {
              this.$store.dispatch('playMusicAction', true)
          }

        this.$store.dispatch('musicPathAction', path)
        this.$store.dispatch('musicTitleAction', name)
      }
    }
  }
</script>
