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
            <div class="audio-methods"><i class="td-icon td-icon-listrecord"></i></div>
            <div class="audio-lastmusic"><i class="td-icon td-icon-last"></i></div>
            <div class="audio-play" @click="play"><i class="td-icon" :class="[$store.state.playMusic ? 'td-icon-play' : 'td-icon-pause']"></i></div>
            <div class="audio-nextmusic"><i class="td-icon td-icon-next"></i></div>
            <div class="audio-list"><i class="td-icon td-icon-list"></i></div>
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
      play: function () {
        if (this.$store.state.playMusic) {
          this.playmusic()
        } else {
          this.pausemusic()
        }
      },
      playmusic: function () {
        window.music.play()
        this.$store.dispatch('playMusicAction', false)
        this.$emit('run', 'running')
      },
      pausemusic: function () {
        window.music.pause()
        this.$store.dispatch('playMusicAction', true)
        this.$emit('run', 'paused')
      }
    }
  }
</script>
