<template>
    <div flex="main:justify cross:center" class="audio">
        <div class="audio-methods"><i class="td-icon td-icon-listrecord"></i></div>
        <div class="audio-lastmusic"><i class="td-icon td-icon-last"></i></div>
        <div class="audio-play"><i class="td-icon td-icon-play"></i></div>
        <div class="audio-nextmusic"><i class="td-icon td-icon-next"></i></div>
        <div class="audio-list"><i class="td-icon td-icon-list"></i></div>
        <audio id="music" :src="dataUrl" @canplaythrough="play"></audio>
    </div>
</template>
<style>
    .audio{
        margin: 5px 40px;
    }

    .td-icon{
        display: inline-block;
        color: #fff;
        font-style: normal;
        font-size: 30px;
    }

    .td-icon-listrecord{
        font-size: 24px;
    }

    .td-icon-listrecord:before{
        font-family: xiang;
        content: '\e911';
    }

    .td-icon-last:before{
        font-family: xiang;
        content: '\e90d';
    }

    .td-icon-play:before{
        font-family: xiang;
        content: '\e90c';
    }

    .td-icon-pause:before{
        font-family: xiang;
        content: '\e90f';
    }

    .td-icon-next:before{
        font-family: xiang;
        content: '\e90e';
    }

    .td-icon-single:before{
        font-family: xiang;
        content: '\e910';
    }

    .td-icon-random:before{
        font-family: xiang;
        content: '\e912';
    }

    .td-icon-list:before{
        font-family: xiang;
        content: '\e904';
    }

</style>
<script>
    export default{
        props: {
            dataUrl: {
                type: String,
                default: ''
            }
        },
        methods: {
            play: function (e) {
                window.music.play()
            }
        }
    }
</script>
