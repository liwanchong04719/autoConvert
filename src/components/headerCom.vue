<template>
  <div class="header clear">
    <div class="fl" style="color:rgb(85, 195, 252);font-size: 22px;margin-left: 30px;font-weight: 800">
      自动化出品管理
    </div>
    <div class="fr" style="margin-right: 30px">
      <router-link to="/monitor" class="btnbg">监控页</router-link>
      <router-link to="/login" class="btnbg">退出登录</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'header'
  }

</script>

<style lang="scss" scoped>
  .header{
    height: 70px;
    background-color: white;
    line-height: 70px;
    position: fixed;
    width: 100%;
    z-index: 3;
    .btnbg{
      display: inline-block;
      background-color: rgb(85, 195, 252);
      width: 130px;
      height: 35px;
      line-height: 35px;
      color:#ffffff;
      text-align: center;
      border-radius: 10px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>



