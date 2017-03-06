<template>
    <div class="side"
         :class="{'change-left': changeLeft}"
         :style="{height: height + 'px'}">
        <sign-up></sign-up>
    </div>
</template>

<style lang="less">
    .side{
        position: absolute;
        z-index: 9999;
        top: 0;
        width:60%;
        background-image: url("/images/loginBackground.jpg");
        left:-100%;
        transition: left .2s;
    }
    .change-left{
        left:0;
    }
</style>

<script>
    import signUp from './nologin.vue'

    export default{
      data() {
        return{
          height: 0,
          changeLeft: false
        }
      },

      components:{
        signUp
      },
      mounted: function () {
        this.height = window.innerHeight
      }
    }
</script>