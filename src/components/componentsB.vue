<template>
  <div id="comB">
    <h2>组件B</h2>
    <div>C给B数据:{{val}}</div>
    <componentsC @tellyou="tell"></componentsC>
  </div>
</template>

<script>
import componentsC from './componentsC'

export default {
  name: 'App',
  components: {
    componentsC
  },
  data(){
    return{
      val:''
    }
  },
  methods:{
    tell(val){
      this.val = val;
      setTimeout(() => {
        this.$emit('tellyou', this.val)
      }, 500);
    }
  }
}
</script>

<style>
  #comB{
    width: 400px;
    margin:0 auto;
    border:1px solid green;
  }
</style>