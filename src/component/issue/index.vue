<template>
    <div>
        <div class="upload">
            <group>
                <x-input placeholder="标题"></x-input>
                <x-textarea :max="200" name="description" placeholder="描述" :rows="5"></x-textarea>
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
                <ul>

                </ul>
                <div style="margin:10px 20px;position:relative">
                    <input type="file" @change="musiclist" class="file" multiple>
                    <x-button style="border:1px solid #43cf76;color:#43cf76">上传音乐</x-button>
                </div>
            </group>
        </div>
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

    .file{
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
</style>
<script>
  import {Group, XTextarea, XInput, XButton} from 'vux'

  export default{
    data() {
        return {
            url: '',
            musicList: []
        }
    },
    components: {
      Group,
      XTextarea,
      XInput,
      XButton
    },
    methods: {
        addImage: function () {

        },
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

        }
    }
  }
</script>
