<template>
    <div>
        <div flex="box:justify cross:center" class="header">
            <span class="td-icon-sidebar" @click="showSidebar" :style="[showsidebar ? activeColor : '']"></span>
            <div class="tab" flex="main:center">
                <span class="td-icon-recommend"></span>
                <span class="td-icon-unload"></span>
                <span class="td-icon-find"></span>
            </div>
            <span class="td-icon-search"></span>
        </div>

        <sign></sign>

        <Masker v-for="n in 10">
            <div class="m-img" style="backgroundImage: url('https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg')"></div>
            <div slot="content" class="m-title" flex="dir:top box:last">
                <p flex="main:left cross:bottom">点点</p>
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
</template>

<script>
  import {Masker} from 'vux'
  import sign from './component/sidebar/sidebar.vue'

  export default {
    data() {
        return {
            activeColor: {
                color: '#FF005A'
            },
            showsidebar: false
        }
    },
    components: {
      Masker,
      sign
    },
    methods: {
        showSidebar() {
            this.showsidebar = !this.showsidebar
        }
    }
  }
</script>

<style lang="less">
    @import '~/vux/src/styles/reset.less';

    .header{
        height:50px;
        width: 100%;
        font-size:24px;
        color: #FF005A;
    }

    .tab{
        font-size: 18px;
    }

    .tab span{
        margin:0 20px 0 20px;
    }

    .td-icon-sidebar{
        margin-left:10px;
        color: #dbdbdb;
    }
    .td-icon-sidebar:before{
        font-family: xiang;
        content: '\e904';
    }
    .td-icon-search{
        margin-right:10px;
        color: #dbdbdb;
    }

    .td-icon-search:before{
        font-family: xiang;
        content: '\e905';
    }

    .td-icon-recommend:before{
        font-family: xiang;
        content: '\e906';
    }

    .td-icon-unload:before{
        font-family: xiang;
        content: '\e907';
    }

    .td-icon-find:before{
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
    .m-title{
        width:100%;
        height:100%;
        color: #fff;
    }
    .m-title p{
        text-align: center;
        font-size:18px;
        padding-left:20px;
    }
    .content-bottom{
        width:100%;
        height:30px;
        font-size:12px;
        padding-left:16px;
    }
    .content-bottom img{
        width:30px;
        height:30px;
        border-radius: 50%;
    }
    .content-bottom span{
        font-size:16px;
    }
    .content-bottom>div:first-child img{
        margin-right:10px;
    }

    .content-bottom .td-icon-play{
        margin-right: 5px;
        position: relative;
        top:-2px;
    }

    .content-bottom .td-icon-play:before{
        font-family: xiang;
        content: '\e901';
        margin-right:5px;
        font-size:22px;
        position: relative;
        top:3px;
    }

    .content-bottom .td-icon-add:before{
        font-family: xiang;
        content: '\e903';
        margin-right:5px;
        font-size:18px;
        position: relative;
        top:1px;
    }

    .content-bottom .td-icon-heart{
        font-size:24px;
        margin-right:5px;
        color: #af1d4e;
        opacity: .8;
    }
    .content-bottom .td-icon-bubble{
        font-size:24px;
        margin-right:5px;
        color: #e6e6e6;
        opacity: .8;
    }
    .td-icon-heart:before{
        font-family: xiang;
        content: '\e900';
    }
    .td-icon-bubble:before{
        font-family: xiang;
        content: '\e902';
    }
</style>