<template>
    <div class="signin" flex="dir:top main:center cross:center">
        <div>
            <x-input name="mobile" placeholder="请输入用户名" v-model="username" type="text" is-type="china-name" keyboard="number">
                <span slot="label" class="td-icon td-icon-username"></span>
            </x-input>
            <x-input title="密码" placeholder="请输入密码" v-model="password" type="password">
                <span slot="label" class="td-icon td-icon-password"></span>
            </x-input>
            <x-input title="密码" placeholder="请再次输入密码" v-model="password_2" type="password" :equal-with="password">
                <span slot="label" class="td-icon td-icon-password"></span>
            </x-input>
            <div class="login-button">
                <x-button title="确认注册" @click.native="authCode" :show-loading="show" style="border:1px solid #FF005A;background:none;color: #FF005A;">确认注册</x-button>
            </div>
        </div>
    </div>
</template>

<script>
  import {XInput, XButton} from 'vux'
  import {mapGetters,mapActions} from 'vuex'
  import {go} from '../../libs/router'

  export default{
    data() {
      return {
        show: false,
        ImageUrl: '',
        password: '',
        username: '',
        password_2: ''
      }
    },
    computed: {
      ...mapGetters([
        'getAuthCode'
      ])
    },
    components: {
      XInput,
      XButton
    },
    methods: {
      authCode: function () {
        this.show = true
        let params = {
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('signUserInfo', params).then((data) => {
          this.show = false
          if (data.error_code){
            this.$vux.toast.show({
              text: data.error_message,
              position: 'bottom',
              type: 'text'
            })
          }else {
              this.$vux.toast.show({
                text: '注册成功',
                position: 'default',
                type: 'success',
                onHide() {
                  go('/', this.$router)
                }
              })
          }
        }).catch((res) => {
          this.$vux.toast.show({
            text: '注册失败',
            type: 'warn',
            position: 'default'
          })
        })
      }
    }
  }
</script>

<style scoped lang="less">
    .signin {
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
    .send {
        background: none;
        border: 1px solid rgba(238, 238, 238, 0.27);
        color: rgba(238, 238, 238, 0.27);
    }

    .td-icon {
        color: #FF005A;
    }

    .td-icon-authCode{
        margin-right:10px;
    }

    .login-button{
        margin:10px 70px;
    }
</style>