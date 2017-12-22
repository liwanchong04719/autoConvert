<template>
  <div class="loading">
    <img src="../img/photo-load.gif" alt="loading">
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .loading{
    position: absolute;
    top:0px;
    right:0px;
    bottom: 0px;
    left:0px;
    margin: auto;
    z-index:3;
    width: 60px;
    height: 60px;
  }
</style>
