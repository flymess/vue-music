<template>
    <div class="signin" flex="dir:top main:center cross:center">
        <div>
            <x-input name="mobile" placeholder="请输入用户名" type="tel" is-type="china-mobile" keyboard="number">
                <span slot="label" class="td-icon td-icon-username"></span>
                <x-button slot="right" class="send" mini @click.native="send">发送验证码</x-button>
            </x-input>
            <x-input title="密码" placeholder="请输入密码" type="password">
                <span slot="label" class="td-icon td-icon-password"></span>
            </x-input>
            
        </div>
    </div>
</template>

<script>
    import {XInput, XButton} from 'vux'

    export default{
        components:{
            XInput,
            XButton
        },
        methods:{
            send: function () {
                console.log(1)
            }
        }
    }
</script>

<style scoped lang="less">
    .signin{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }

    .weui-cell {
        margin: 10px 70px;
        border: 1px solid #FF005A;
        margin-bottom: 40px;
        border-radius: 10px;

        &:before {
            border-top: 0;
        }

    }
    .send{
        background:none;
        border:1px solid rgba(238, 238, 238, 0.27);
        color: rgba(238, 238, 238, 0.27);
    }

    .td-icon {
        color: #FF005A;
    }
</style>