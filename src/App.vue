<template>
  <div id="app" class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss" scoped>
  @import './style/common';
  #app{
    width:1300px;
    overflow: auto;
    border:1px solid yellow;

  }

</style>
