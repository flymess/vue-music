<template>
    <div>
        <div class="side"
             :class="{'change-left': changeLeft}"
             :style="{height: height + 'px'}">
            <sign-up v-if="$store.state.user.token == ''"></sign-up>
            <user-sidebar v-else></user-sidebar>
        </div>
        <transition name="vux-actionsheet-mask">
            <div class="weui-mask weui-mask_transparent" @click="onClickingMask" v-show="changeLeft"></div>
        </transition>
    </div>
</template>

<style lang="less">
    .side{
        position: absolute;
        z-index: 9999;
        top: 0;
        width:70%;
        background: #f0f9ee;
        left:-100%;
        transition: left .2s;
    }
    .change-left{
        left:0;
    }
    .Mask{
        background-color: rgba(0,0,0,0.5);
    }
</style>

<script>
    import signUp from './nologin.vue'
    import userSidebar from './userSidebar.vue'

    export default{
      data() {
        return{
          height: 0,
          changeLeft: false
        }
      },
      methods: {
          onClickingMask: function () {
              this.changeLeft = false
          }
      },
      components:{
        signUp,
        userSidebar
      },
      mounted: function () {
        this.height = window.innerHeight
      }
    }
</script>