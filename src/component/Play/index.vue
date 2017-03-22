<template>
    <div>
        <audio-player :data-url="musicPath"></audio-player>
        {{musicPath}}
    </div>
</template>
<style>

</style>
<script>
    import AudioPlayer from './Audio.vue'

    export default{
        data() {
            return {
            }
        },
        components: {
            AudioPlayer
        },
        computed:{
            musicPath:function () {
                return 'http://localhost:3000/' + this.$route.query.path
            }
        }
    }
</script>
