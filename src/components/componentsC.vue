<template>
  <div id="comC">
    <h3>组件C</h3>
    <div>
      用$emit方法传：<input type="text" v-model="val" @input="tell">
    </div>
    <div>
      store.val数据输入:
      <input type="text" v-model="val" @input="setVal(val)">
    </div>
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      val:''
    }
  },
  methods: {
    tell(){
      //调用store内mutations的setVal方法
      // this.$store.commit('setVal', this.val)
      setTimeout(()=>{
        this.$emit('tellyou',this.val)
      },500)
    },
    //数组形式
    ...mapMutations(['setVal'])
    //对象形式
    // ...mapMutations({
    //   setVal:'setVal'
    // })
  }
}
</script>

<style>
  #comC{
    width: 300px;
    margin:0 auto;
    border:1px solid orange;
  }
</style>