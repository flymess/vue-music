<template>
    <div>
        <blur url="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture" :height="xHeight">
            <audio-player :data-url="musicPath"></audio-player>
            {{musicPath}}
        </blur>
    </div>
</template>
<style>

</style>
<script>
    import AudioPlayer from './Audio.vue'
    import {Blur} from 'vux'

    export default{
        data() {
            return {
            }
        },
        components: {
            AudioPlayer,
            Blur
        },
        computed:{
            musicPath:function () {
                return 'http://localhost:3000/' + this.$route.query.path
            },
            xHeight: function () {
                let xheight = window.innerHeight
                console.log(xheight)
                return xheight
            }
        }
    }
</script>
