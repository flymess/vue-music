<template>
    <div>
        <blur :blur-amount=40 :url="getSpecialDetail.backgroundImage">
            <header class="specialContent" flex="cross:center box:first">
                <img :src="getSpecialDetail.backgroundImage" alt="" style="width:130px;height:130px;">
                <div>
                    <p class="td-white-2">{{getSpecialDetail.title}}</p>
                    <p class="specialContent-userinfo" flex="cross:center">
                        <img :src="getSpecialDetail.avatar" alt="">
                        <span>{{getSpecialDetail.username}}</span>
                    </p>
                </div>
            </header>
        </blur>
        <group class="specialContent-group" label-align="right">
            <div>
                <header>简介:</header>
                <p class="specialContent-detail">{{getSpecialDetail.content}}</p>
            </div>
            <cell :title="item.name" class="weui-cell-first" v-for="(item,index) in getSpecialMusicList" @click.native="play(index, item.path)">
                <span slot="icon" style="margin-right: 5px;">{{index+1}}.</span>
                <span class="td-icon-heart" :class="[count === index ? 'play-color-red' : '']"></span>
            </cell>
        </group>
    </div>
</template>
<style lang="less">
    .specialContent{
        width:100%;
        height:200px;
    }

    .specialContent>img{
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

    .specialContent-detail .weui-cells:before{
        border-top:0px;
    }

    div.specialContent-group{
        margin-top: -1.17647059em;
        background: #fff;
    }

    .specialContent-group header{
        margin-left:15px;
        margin-top: 5px;
        color: #666;
        font-size:14px;
    }

    .weui-cell-first{
        padding-left:5px;
    }

    .play-color-red{
        color: #af1d4e;
    }

</style>
<script>
    import {Blur,Group,Cell} from 'vux'
    import {mapActions,mapGetters} from 'vuex'
    import {go} from '../../libs/router'

    export default{
      data() {
        return {
          count: null
        }
      },
      components: {
        Blur,
        Group,
        Cell
      },
      computed: {
        ...mapGetters([
          'getSpecialDetail',
          'getSpecialMusicList'
        ])
      },
      mounted() {
        let id = this.$route.params.id
        this.$store.dispatch('setSpecialDetail', id)
        this.$store.dispatch('setSpecialMusicList', id)
                .then(() => {

                })
                .catch(err => {

                })
      },
      methods: {
        play: function (index, path) {
            this.count = index
            go({name: 'player', query: {path: path}}, this.$router)
        }
      }
    }
</script>
