<template>
    <div>
        <header flex="cross:center">
            <img src="https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg"/>
            <span>转角处</span>
        </header>
        <cell title="我的消息" is-link></cell>
        <cell title="我的收藏" is-link></cell>

    </div>
</template>
<style scoped lang="less">
    header{
        height:100px;
        background-image: url("/images/infobackground.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size:cover;
        color: #fff;
    }
    header img{
        width:60px;
        height:60px;
        border-radius: 50%;
        margin-left:15px;
    }
    header span{
        margin-left:20px;
    }
</style>
<script>
    import {Cell,Group} from 'vux'

    export default{
        components: {
            Cell,
            Group
        }
    }
</script>
