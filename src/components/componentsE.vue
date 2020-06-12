<template>
  <div id="comE">
    <h3>组件E</h3>
    <div>D传给E:{{val}}</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  props:['val']
}
</script>

<style>
  #comE{
    width: 300px;
    margin:0 auto;
    border:1px solid rgb(211, 243, 30);
  }
</style>