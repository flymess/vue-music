<template>
    <blur :url="$store.state.userInfo.avatar">
        <div class="myprofile" flex="main:center cross:center">
            <img :src="$store.state.userInfo.avatar">
        </div>
    </blur>
</template>

<script type="text/javascript">
    import {Blur} from 'vux'

    export default {
        components: {
            Blur
        }
    }
</script>

<style type="text/css" lang="less" rel="stylesheet/less">
    .myprofile{
        height: 100%;
        & img{
            width: 150px;
            height: 150px;
            border-radius:50%;
        }
    }
</style>
