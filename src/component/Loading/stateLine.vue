<template>
    <div>
        <div v-if="loading" class="td-loading">
            <spinner type="ripple"></spinner>
        </div>
        <div v-if="error" class="td-error-line">
            <a href="javascript:;" @click="refresh">网络异常,点击刷新</a>
        </div>

        <div v-if="empty" class="td-error-line">
            <p class="text-center">暂无相关内容~</p>
        </div>
    </div>
</template>

<style>
    .td-loading {
        padding: 40px 0;
        text-align: center;
    }

    .td-error-line {
        padding: 40px 0;
        text-align: center;
    }

    .td-error-line a {
        color: #333333;

    }

    .text-center {
        text-align: center;
    }
</style>


<script>
    import { Spinner } from 'vux'

    export default{
        components: {
            Spinner
        },
        props: {
          loading: {
            type: Boolean,
            default: false
          },
          error: {
            type: Boolean,
            default: false
          },
          empty: {
            type: Boolean,
            default: false
          }
        },
        mounted: function () {
          this.refresh()
        },
        methods: {
            refresh: function () {
                this.$emit('loadData')
            }
        }

    }

</script>