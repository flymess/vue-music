<template>
    <div class="noLogin" flex="main:center cross:center dir:top">
        <button class="login" @click="goLogin">登录</button>
        <button class="signin" @click="goSignin">注册</button>
    </div>
</template>

<style lang="less">
    .noLogin{
        width:100%;
        height:100%;
        button {
            margin:0;
            padding: 0;
            background: none;
            list-style: none;
            border:none;
            -webkit-appearance: none;
        }
        .login{
            width:80%;
            height:80px;
            margin:0 auto;
            border:1px solid #af1d4e;
            border-radius: 10px;
            margin-bottom:50px;
            color: #af1d4e;
        }
        .signin{
            width:80%;
            height:80px;
            margin:0 auto;
            border:1px solid #af1d4e;
            border-radius: 10px;
            color: #af1d4e;
        }
    }
</style>

<script>
    import {go} from '../../libs/router'

    export default{
      methods:{
        goLogin: function () {
          go({name: 'login'}, this.$router)
        },
        goSignin: function() {
          go({name: 'signin'}, this.$router)
        }
      }
    }
</script>