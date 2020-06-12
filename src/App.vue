<template>
  <div id="app">
    <componentsA></componentsA>
    <componentCount></componentCount>
  </div>
</template>

<script>
import componentsA from './components/componentsA'
import componentCount from './components/componentCount'
export default {
  name: 'App',
  components: {
    componentsA,
    componentCount
  }
}
</script>

<style>

</style>
