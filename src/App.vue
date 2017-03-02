<template>
    <div>
        <Masker style="border-radius: 3px;box-shadow: 3px 3px 3px #000;margin: 10px;">
            <div class="m-img" style="background: url('https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1488462982&di=a1c48ab76d2ce980f873253b7ce2c1fc&src=http://img002.21cnimg.com/photos/album/20160326/m600/B920004B5414AE4C7D6F2BAB2966491E.jpeg') no-repeat"></div>
            <div slot="content" class="m-title">
                床上日用品
                <br/>
                <span class="m-time">2016-03-18</span>
            </div>
        </Masker>
    </div>
</template>

<script>
  import {Masker} from 'vux'

  export default {
    components: {
      Masker
    }
  }
</script>

<style lang="less">
    @import '../../vux/src/styles/reset.less';
    body{
        background: #F2F4F5;
    }
    .m-img {
        padding-bottom: 33%;
        display: block;
        position: relative;
        max-width: 100%;
        background-size: cover;
        background-position: center center;
        cursor: pointer;
        border-radius: 2px;
    }
    .m-title {
        color: #fff;
        text-align: center;
        text-shadow: 0 0 2px rgba(0, 0, 0, .5);
        font-weight: 500;
        font-size: 16px;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
    }
    .m-time {
        font-size: 12px;
        padding-top: 4px;
        border-top: 1px solid #f0f0f0;
        display: inline-block;
        margin-top: 5px;
    }
</style>