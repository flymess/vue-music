<template>
    <div>        
        <audio :src="dataUrl"></audio>
    </div>
</template>
<style>

</style>
<script>
    export default{
        props: {
            dataUrl: {
                type: String,
                default: ''
            }
        }
    }
</script>
