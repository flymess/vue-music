<template>
    <div class="login" flex="dir:top main:center cross:center">
        <div>
            <x-input title="用户名" placeholder="请输入用户名" type="tel" is-type="china-mobile"></x-input>
            <x-input title="密码" placeholder="请输入密码" type="password"></x-input>
        </div>
    </div>
</template>

<script>
    import {XInput} from 'vux'

    export default{
        components: {
            XInput
        }
    }
</script>

<style lang="less" scoped>
    .login{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:0;
        right: 0;
        bottom:0;
        margin:auto;
    }
    .weui-cell{
        margin:10px 70px;
        border:1px solid #FF005A;
        margin-bottom:40px;
        border-radius: 10px;
        &:before{
            border-top:0;
        }
    }
</style>