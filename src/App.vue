<template>
    <div>
        <div flex="box:justify cross:center" class="header">
            <span class="td-icon-sidebar" @click="showSidebar" :style="[showsidebar ? activeColor : '']"></span>
            <div class="tab" flex="main:center">
                <span class="td-icon-recommend"></span>
                <span class="td-icon-unload" @click="upload"></span>
                <span class="td-icon-find"></span>
            </div>
            <span class="td-icon-search"></span>
        </div>

        <sign ref="sidebar"></sign>

        <Scroller lockX
                  ref="scroller"
                  style="position: relative"
                  height="-50"
                  use-pulldown
                  @on-pulldown-loading="refresh"
                  :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}">
            <div>
                <state @loadData="ready"
                       :loading="loading"
                       :error="error"
                       :empty="empty">
                </state>

                <Masker v-for="(item, index) in items" @click.native="goSpecial(item.id)">
                    <div class="m-img" :style="{backgroundImage: 'url('+item.backgroundImage+')'}"></div>
                    <div slot="content" class="m-title" flex="dir:top box:last">
                        <p flex="main:center cross:center">{{item.title}}</p>
                        <div class="content-bottom" flex="main:justify">
                            <div flex="cross:center">
                                <span class="td-icon-play">800</span>
                                <span class="td-icon-add">200</span>
                            </div>
                            <div>
                                <span class="td-icon-heart"></span>
                                <span class="td-icon-bubble"></span>
                            </div>
                        </div>
                    </div>
                </Masker>
            </div>
        </Scroller>
    </div>
</template>

<script>
  import {Masker, Scroller} from 'vux'
  import sign from './component/sidebar/sidebar.vue'
  import state from './component/Loading/stateLine.vue'
  import {go} from './libs/router'
  import {isEmptyObject} from './libs/isEmptyObject'
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {
        activeColor: {
          color: '#FF005A'
        },
        showsidebar: false,
        loading: false,
        error: false,
        empty: false,
      }
    },
    computed: {
      ...mapGetters({
        items: 'GetSpecialList'
      })
    },
    components: {
      Masker,
      sign,
      Scroller,
      state
    },
    mounted() {
      this.$store.dispatch('getUserInfo')
    },
    methods: {
      goSpecial(id) {
        go({name: 'special', params: { id: id }}, this.$router)
      },
      refresh() {
        var _this = this
        this.$store.dispatch('getSpecialAction').then(() => {
          setTimeout(function () {
            _this.$refs.scroller.donePulldown()
          }, 1000)
        })
      },
      ready() {
        this.loading = true
        this.error = false
        this.empty = false
        this.$store.dispatch('getSpecialAction').then((data) => {
            this.$nextTick(() => {
                this.$refs.scroller.reset()
            })
          if (isEmptyObject(data)) this.empty = true
          this.loading = false
          this.error = false
        }, (err) => {
          this.loading = false
          this.error = true
        })
      },
      showSidebar() {
        this.showsidebar = !this.showsidebar
        this.$refs.sidebar.changeLeft = !this.$refs.sidebar.changeLeft
      },
      upload() {
        let _this = this
        if (this.$store.state.user.token == '') {
          this.$vux.toast.show({
            text: '请先登录',
            position: 'default',
            type: 'cancel',
            onHide() {
              go({name: 'login'}, _this.$router)
            }
          })
        } else {
          go({name: 'upload'}, this.$router)
        }
      }
    }
  }
</script>

<style lang="less">
    @import '~/vux/src/styles/reset.less';

    .header {
        height: 50px;
        width: 100%;
        font-size: 24px;
        color: #FF005A;
    }

    .tab {
        font-size: 18px;
    }

    .tab span {
        margin: 0 20px 0 20px;
    }

    .td-icon-sidebar {
        margin-left: 10px;
        color: #dbdbdb;
    }

    .td-icon-sidebar:before {
        font-family: xiang;
        content: '\e904';
    }

    .td-icon-search {
        margin-right: 10px;
        color: #dbdbdb;
    }

    .td-icon-search:before {
        font-family: xiang;
        content: '\e905';
    }

    .td-icon-recommend:before {
        font-family: xiang;
        content: '\e906';
    }

    .td-icon-unload:before {
        font-family: xiang;
        content: '\e907';
    }

    .td-icon-find:before {
        font-family: xiang;
        content: '\e908';
    }

    .m-img {
        padding-bottom: 40%;
        display: block;
        position: relative;
        max-width: 100%;
        background-size: cover;
        background-position: center center;
        cursor: pointer;
        border-radius: 2px;
    }

    .m-title {
        width: 100%;
        height: 100%;
        color: #fff;
    }

    .m-title p {
        text-align: center;
        font-size: 18px;
        padding-left: 20px;
    }

    .content-bottom {
        width: 100%;
        height: 30px;
        font-size: 12px;
        padding-left: 16px;
    }

    .content-bottom img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }

    .content-bottom span {
        font-size: 16px;
    }

    .content-bottom > div:first-child img {
        margin-right: 10px;
    }

    .content-bottom .td-icon-play {
        margin-right: 5px;
        position: relative;
        top: -2px;
    }

    .content-bottom .td-icon-play:before {
        font-family: xiang;
        content: '\e901';
        margin-right: 5px;
        font-size: 22px;
        position: relative;
        top: 3px;
    }

    .content-bottom .td-icon-add:before {
        font-family: xiang;
        content: '\e903';
        margin-right: 5px;
        font-size: 18px;
        position: relative;
        top: 1px;
    }

    .content-bottom .td-icon-heart {
        font-size: 24px;
        margin-right: 5px;
        color: #af1d4e;
        opacity: .8;
    }

    .content-bottom .td-icon-bubble {
        font-size: 24px;
        margin-right: 5px;
        color: #e6e6e6;
        opacity: .8;
    }

    .td-icon-bubble:before {
        font-family: xiang;
        content: '\e902';
    }
</style>