<template>
  <div class="wrapperCount">
    <h1>计数器</h1>
    <div class="count">
      <button>+</button>
      <span>{{num}}</span>
      <button>-</button>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      num:0
    }
  },
}
</script>

<style scoped>
  .wrapperCount{
    width:500px;
    margin:10px auto; 
    border:1px solid salmon;
  }
  h1{
    text-align: center;
  }
  .count{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center; 
    margin:10px auto 20px;
    
  }
</style>