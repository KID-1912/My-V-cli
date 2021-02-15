<template>
  <div>
    <h1>这是App.vue模块，位于vue页面应用下</h1>
    <p>时间{{time}}</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        time: new Date().toLocaleDateString()
      }
    }
  }
</script>

<style scoped>
  
</style>