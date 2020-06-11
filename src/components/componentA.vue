<template>
    <div class="wrapper-a">
        <h3>我是组件A</h3>
        <div>B->A{{ val }}</div>
        <div>store:{{ $store.state.val }}</div>
        <div>store:{{ $store.state.val }}</div>
        <component-b @tellyou="tell"></component-b>
        <component-d :val="val"></component-d>
    </div>
</template>

<script>
    import componentB from './componentB'
    import componentD from './componentD'
    export default{
        data(){
            return {
                val:''
            }
        },
        components:{
            componentB,
            componentD
        },
        methods:{
            tell(val){
                this.val = val
            }
        }
    }
</script>

<style>
    .wrapper-a{
        border:1px solid blue;
    }
</style>