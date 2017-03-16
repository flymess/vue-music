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
                <div class="uploadBackground">
                </div>
                <div style="margin:10px 20px">
                    <x-button style="border:1px solid #43CF76;color:#43CF76;" :plain="true"></x-button>
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
    }

    .img{
        height:200px;
    }
</style>
<script>
  import {Group, XTextarea, XInput, XButton} from 'vux'

  export default{
    components: {
      Group,
      XTextarea,
      XInput,
      XButton
    }
  }
</script>
