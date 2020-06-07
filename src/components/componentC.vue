<template>
    <div class="wrapper-c">
        <h5>我是组件C</h5>
        <input type="text" v-model="val" @input="tell">
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return {
                val:''
            }
        },
        methods:{
            tell(){
                this.$store.commit('setVal', this.val)
                //箭头函数会绑定父级的作用域
                setTimeout(() => {
                    //this指vue,把父级的方法拿过来，把this.val传进去
                    this.$emit('tellyou',this.val)
                },500)
            }
        }
    }
</script>

<style>
    .wrapper-c{
        border:1px solid red;
    }
</style>