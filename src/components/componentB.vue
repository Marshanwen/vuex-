<template>
    <div class="wrapper-b">
        <h4>我是组件B</h4>
        <div>C->B{{ val }}</div>
        <component-c @tellyou="tell"></component-c>
    </div>
</template>

<script>
    import componentC from './componentC'
    export default {
        components: {
            componentC
        },
        data(){
            return {
                val:''
            }
        },
        methods:{
            tell(val){
                this.val = val;
                setTimeout(() => {
                    this.$emit('tellyou',this.val)
                },500)
            }
        }
    }
</script>

<style>
    .wrapper-b{
        border:1px solid greenyellow;
    }
</style>