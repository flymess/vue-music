<template>
    <div>
        <blur :url="$store.state.userInfo.avatar">
            <div class="myprofile" flex="main:center cross:center">
                <img :src="$store.state.userInfo.avatar">
            </div>
        </blur>
        <group>
            <cell title="昵称" is-link>{{$store.state.userInfo.username}}</cell>
            <selector title="性别" :options="items" direction="rtl" v-model="sex" @on-change="changeSex"></selector>
            <x-address title="地区" :list="addressData" :min-year=2000 :max-year=2016 v-model="address" @on-hide="changeAddress" :value="$store.state.userInfo.address"></x-address>
        </group>
    </div>
</template>

<script type="text/javascript">
    import {Blur,Cell,Group,Selector,XAddress,ChinaAddressV1Data} from 'vux'
    import axios from 'axios'

    export default {
        components: {
            Blur,
            Cell,
            Group,
            Selector,
            XAddress
        },
        data() {
            return {
                items: [
                    {
                        key: 0,
                        value: '男'
                    },
                    {
                        key: 1,
                        value: '女'
                    }
                ],
                sex: this.$store.state.userInfo.sex,
                addressData: ChinaAddressV1Data,
                address: this.$store.state.userInfo.address
            }
        },
        methods: {
            changeAddress(str) {
                if (str) {
                    axios.defaults.headers.post['x-access-token'] = window.localStorage.token
                    axios.post('/profile',{
                        address: this.address
                    }).then(() => {

                    }, () => {
                        this.$vux.toast.show({
                            text: '修改失败',
                            type: 'warn'
                        })
                    })
                }
            },
            changeSex(str) {
                axios.defaults.headers.post['x-access-token'] = window.localStorage.token
                axios.post('/profile',{
                    sex: str
                }).then(() => {

                },() => {
                    this.$vux.toast.show({
                        text: '修改失败',
                        type: 'warn'
                    })
                })
            }
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
