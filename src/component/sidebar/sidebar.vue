<template>
    <div class="side" :style="{height: height + 'px'}">
        <sign-up></sign-up>
    </div>
</template>

<style lang="less">
    .side{
        position: absolute;
        z-index: 9999;
        top: 0;
        left:0;
        width:60%;
        background-image: url("/images/sidebarBackground.jpg");
    }
</style>

<script>
    import signUp from './nologin.vue'

    export default{
      data() {
        return{
          height: 0
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