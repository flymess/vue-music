<template>
    <div>
        <blur :blur-amount=40 url="https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg">
            <header class="specialContent" flex="cross:center box:first">
                <img src="" alt="">
                <div>
                    <p class="td-white-2">专辑标题</p>
                    <p class="specialContent-userinfo" flex="cross:center">
                        <img src="" alt="">
                        <span>昵称</span>
                    </p>
                </div>
            </header>
        </blur>
        <group class="specialContent-group">
            <div>
                <header>简介:</header>
                <p class="specialContent-detail">哦is的金佛is的金佛is的金佛is的金佛高就是DOI父级上DOI父级上DOI金佛is大姐夫iOS的金佛is的金佛生动风景生动风景是东方闪电哦哦的说法</p>
            </div>
        </group>
        <group title="列表:" class="specialContent-group">
            <cell title="不为谁而作的歌"></cell>
        </group>
    </div>
</template>
<style scoped lang="less">
    .specialContent{
        width:100%;
        height:200px;
    }

    .specialContent>img{
        width:130px;
        height:130px;
        border:1px solid #000;
        margin-left:20px;
        margin-right:10px;
    }

    .specialContent-userinfo{
        font-size:14px;
    }

    .specialContent-userinfo img{
        width:40px;
        height:40px;
        border-radius: 50%;
        margin-right:10px;
    }

    .td-white-2{
        height:46px;
    }

    .specialContent-detail{
        font-size:12px;
        color: #999;
        text-indent: 2em;
        margin:10px;
    }

    .weui-cells:before{
        border-top:0px;
    }

    div.specialContent-group{
        margin-top: -0.77em;
        background: #fff;
    }

    .specialContent-group header{
        margin-left:15px;
        margin-top: 5px;
        color: #666;
        font-size:14px;
    }
</style>
<script>
    import {Blur,Group,Cell} from 'vux'

    export default{
      components: {
        Blur,
        Group,
        Cell
      }
    }
</script>
