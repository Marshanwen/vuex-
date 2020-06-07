<template>
    <div class="wrapper-e">
        <h5>我是组件E</h5>
        <div>D->E:{{val}}</div>
    </div>
</template>

<script>
    export default {
        props:['val']
    }
</script>

<style>
    .wrapper-e{
        border:1px solid red;
    }
</style>