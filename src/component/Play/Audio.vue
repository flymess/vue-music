<template>
    <div>
        <x-progress :show-cancel="false" :percent="$store.state.percent"></x-progress>
        <!--播放进度条和时间  time=总时间  nowTime=当前播放时间-->
        <div class="audio-time" flex="main:justify">
            <span>{{$store.state.nowTime}}</span>
            <span>{{$store.state.time}}</span>
        </div>
        <!--播放进度条和时间 end-->

        <!--播放控件-->
        <div flex="main:justify cross:center" class="audio">
            <div class="audio-methods" @click="changeMode"><i class="td-icon" :class="[$store.state.playMode == 0 ? 'td-icon-listrecord' : $store.state.playMode == 1 ? 'td-icon-random' : 'td-icon-single']"></i></div>
            <div class="audio-lastmusic" @click="lastPlay"><i class="td-icon td-icon-last"></i></div>
            <div class="audio-play" @click="play"><i class="td-icon" :class="[$store.state.playMusic ? 'td-icon-play' : 'td-icon-pause']"></i></div>
            <div class="audio-nextmusic" @click="nextPlay"><i class="td-icon td-icon-next"></i></div>
            <div class="audio-list" @click="showMusicList"><i class="td-icon td-icon-list"></i></div>
        </div>
        <!--播放控件 end-->
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .audio {
        margin: 5px 40px;
    }

    .audio .td-icon {
        display: inline-block;
        font-size: 30px;
        font-style: normal;
        color: #fff;
    }

    .td-icon-listrecord {
        font-size: 24px;
    }

    .td-icon-listrecord:before {
        font-family: xiang;
        content: '\e911';
    }

    .td-icon-last:before {
        font-family: xiang;
        content: '\e90d';
    }

    .td-icon-play:before {
        font-family: xiang;
        content: '\e90c';
    }

    .td-icon-pause:before {
        font-family: xiang;
        content: '\e90f';
    }

    .td-icon-next:before {
        font-family: xiang;
        content: '\e90e';
    }

    .td-icon-single:before {
        font-size: 25px;
        font-family: xiang;
        content: '\e910';
    }

    .td-icon-random:before {
        font-family: xiang;
        content: '\e912';
    }

    .td-icon-list:before {
        font-family: xiang;
        content: '\e904';
    }

    .audio-time {
        margin: 5px 20px;
        color: #af1d4e;
        font-size:12px;
    }

    .weui-progress__bar .weui-progress__inner-bar{
        background: #af1d4e;
    }

</style>
<script>
  import {XProgress} from 'vux'

  export default{
    props: {
      dataUrl: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        playMusic: true,
        time: '0:0',
        nowTime: '0:0',
        percent: 0
      }
    },
    components: {
      XProgress
    },
    methods: {
      play() {
        if (this.$store.state.playMusic) {
          this.playmusic()
        } else {
          this.pausemusic()
        }
      },
      playmusic() {
        window.music.play()
        this.$store.dispatch('playMusicAction', false)
        this.$emit('run', 'running')
      },
      pausemusic() {
        window.music.pause()
        this.$store.dispatch('playMusicAction', true)
        this.$emit('run', 'paused')
      },
      showMusicList() {
        this.$emit('show', true)
      },
      changeMode() {
        let index = (this.$store.state.playMode + 1) % 3
        this.$store.commit('chagePlayMode', index)
      },
      nextPlay() {
          let index = 0

          //playMode 0=循环播放 1=随机播放 2=单曲循环
          if (this.$store.state.playMode == 1){
              // 更新音乐索引为随机数
              index = parseInt(Math.random()*(this.$store.state.musicList.length - 1))
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
      }
    }
  }
</script>
