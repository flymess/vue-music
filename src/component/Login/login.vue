<template>
    <div class="login" flex="dir:top main:center cross:center">
        <div>
            <x-input placeholder="请输入用户名" type="tel" v-model="username" is-type="china-name">
                <span slot="label" class="td-icon td-icon-username"></span>
            </x-input>
            <x-input title="密码" placeholder="请输入密码" v-model="password" type="password">
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
  import {mapActions} from 'vuex'
  import {go} from '../../libs/router'

  export default{
    data() {
      return {
        show: false,
        username: '',
        password: ''
      }
    },
    methods: {
      submit: function () {
        this.show = !this.show
        let data = {
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('Login', data).then((user) => {
          if(user.error_code){
            this.$vux.toast.show({
              text: user.error_message,
              position: 'bottom',
              width: '10em',
              type: 'text'
            })
          }else {
            var _this = this
            this.$vux.toast.show({
              text: '登录成功',
              type: 'success',
              position: 'default',
              onHide(){
                go({path: '/'}, _this.$router)
              }
            })
          }
        }).catch(() => {
          this.$vux.toast.show({
          text: '登录失败',
          type: 'warn'
        })
        })
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

    .login-button {
        margin: 10px 70px;
    }
</style>