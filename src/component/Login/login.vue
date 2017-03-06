<template>
    <div class="login" flex="dir:top main:center cross:center">
        <div>
            <x-input placeholder="请输入用户名" type="tel" is-type="china-mobile" required>
                <span slot="label" class="td-icon td-icon-username"></span>
            </x-input>
            <x-input title="密码" placeholder="请输入密码" type="password" required>
                <span slot="label" class="td-icon td-icon-password"></span>
            </x-input>
            <div class="login-button">
                <x-button text="登录" @click.native="submit" :show-loading="show" style="border:1px solid #FF005A;background:none;color: #FF005A;">
                </x-button>
            </div>
        </div>
    </div>
</template>

<script>
  import {XInput, XButton} from 'vux'

  export default{
    data() {
      return {
        show: false
      }
    },
    methods: {
      submit: function () {
        this.show = !this.show
      }
    },
    components: {
      XInput,
      XButton
    }
  }
</script>

<style lang="less" scoped>
    .login {
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

    .td-icon {
        color: #FF005A;
    }

    .td-icon-username {
        margin-right: 10px;

        &:before {
            font-family: xiang;
            content: '\e90a';
        }

    }

    .td-icon-password {
        margin-right: 10px;

        &:before {
            font-family: xiang;
            content: '\e909';
        }
    }

    .login-button {
        margin: 10px 70px;
    }
</style>