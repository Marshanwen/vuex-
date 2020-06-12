<template>
  <div id="comA">
    <h1>组件A</h1>
    <div>B给A数据:{{val}}</div>
    <componentsB @tellyou="tell"></componentsB>
    <componentsD :val="val"></componentsD>
    <div class="show">在组件A中展示计数器的数据
      <div>{{num}}</div>
    </div>
    
  </div>
</template>

<script>
import componentsB from './componentsB'
import componentsD from './componentsD'


export default {
  name: 'App',
  components: {
    componentsB,
    componentsD
  },
  data(){
    return{
      val:'',
      num:0
    }
  },
  methods:{
    tell(val){
      this.val = val
    }
  }
}
</script>

<style>
  #comA{
    width: 500px;
    /* height: 100px; */
    margin:0 auto;
    border:1px solid red;
  }
  .show{
    margin-top:20px;
  }
</style>