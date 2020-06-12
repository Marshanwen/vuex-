<template>
  <div id="comD">
    <h2>组件D</h2>
    <div>A传给D的数据:{{val}}</div>
    <div>store输入数据：{{newVal}}</div>
    <div>store其他数据：{{name+my+doc}}</div>
    <componentsE :val="val"></componentsE>
  </div>
</template>

<script>
import componentsE from './componentsE'
import { mapState } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      // val:''
    }
  },
  components: {
    componentsE
  },
  props: ['val'], 
  //不考虑数据冲突，不考虑vuex 的 module属性
  // computed: mapState(['name','my','doc'])
  computed:{
    //考虑module，考虑val名字冲突
    ...mapState({
      newVal: state => state.val
    }),
    ...mapState(['name','my','doc'])
  }

}
</script>

<style>
  #comD{
    width: 400px;
    margin:0 auto;
    border:1px solid #ba2bfc;
  }
</style>