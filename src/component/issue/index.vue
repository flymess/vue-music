<template>
    <div>
        <div class="upload">
            <group>
                <x-input placeholder="标题" v-model="title"></x-input>
                <x-textarea v-model="container" :max="200" name="description" placeholder="描述" :rows="5"></x-textarea>
            </group>
        </div>
        <div class="upload">
            <group>
                <p>上传背景图片</p>
                <div class="uploadBackground" :style="{backgroundImage: 'url('+url+')'}">
                </div>
                <div style="margin:10px 20px;position:relative;">
                    <input type="file" name="backgroundUrl" @change="filechooser" class="file"/>
                    <x-button style="border:1px solid #43fc76;color:#43fc76">上传图片</x-button>
                </div>
            </group>
        </div>
        <div class="upload">
            <group>
                <p>上传音乐列表</p>
                <ul class="upload-music-list">
                    <li v-for="item in musicList">
                        {{item}}
                    </li>
                </ul>
                <div style="margin:10px 20px;position:relative">
                    <input type="file" @change="musiclist" class="file" multiple="multiple" accept="audio/*">
                    <x-button style="border:1px solid #43cf76;color:#43cf76">上传音乐</x-button>
                </div>
            </group>
        </div>
        <x-button style="background:#43cf76;color: #fff;margin-top: 20px;height: 60px;border-radius: 0px;" @click.native="upload">发布</x-button>
    </div>
</template>
<style scoped lang="less">
    .upload {
        margin: 0 10px;
        border-radius: 10px;
    }

    .upload p {
        text-align: center;
        margin-top: 10px;
    }

    .upload .uploadBackground {
        height: 200px;
        margin: 10px auto;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .file {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        outline: 0;
        opacity: .01;
        filter: Alpha(opacity=1);
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        top: 0px;
        z-index: 1;
    }

    .upload-music-list li {
        margin: 5px 20px;
        list-style: none;
    }

    .upload-button{
        position: absolute;
        bottom:0;
        width:100%;
        height:60px;
        background: #43cf76;
        color: #fff;
    }
</style>
<script>
  import {Group, XTextarea, XInput, XButton} from 'vux'
  import {replace} from '../../libs/router'

  export default{
    data() {
      return {
        url: '',
        musicList: [],
        musicFile: [],
        container: '',
        title: ''
      }
    },
    components: {
      Group,
      XTextarea,
      XInput,
      XButton
    },
    methods: {
      filechooser: function (e) {
        let files = Array.prototype.slice.call(e.target.files);
        var _this = this

        files.forEach((file, i) => {
          if (!/\/(?:jpeg|png|gif)/i.test(file.type)) return;
          let render = new FileReader()
          render.readAsDataURL(file)
          render.onload = function (e) {
            let result = e.target.result
            _this.url = e.target.result
          }
        })
      },
      musiclist: function (e) {
        let files = Array.prototype.slice.call(e.target.files);
        var _this = this

        files.forEach((file, i) => {
          if (!/\/(?:mp3|wav|aac|wma)/i.test(file.type)) return;
          _this.musicList.push(file.name)
          _this.musicFile.push(file)
        })
      },
      upload: function () {
        this.$vux.loading.show({
            text: '请稍后'
        })
        let data = new FormData()
        data.append('title', this.title)
        data.append('content', this.container)
        data.append('backgroundImage', this.url)
        this.musicFile.map((item, index) => {
          data.append('file', item)
        })
        data.append('token', this.$store.state.user.token)

        this.$store.dispatch('upload', data).then((data) => {
            let _this = this
            this.$vux.loading.hide()
            this.$vux.toast.show({
                text: '发布成功',
                type: 'success',
                onHide() {
                    replace({path: '/'}, _this.$router)
                }
            })
        })
      }
    }
  }
</script>
