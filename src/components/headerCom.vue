<template>
  <div class="header clear">
    <div class="wrapper" style="width: 1160px">
      <div class="fl" style="color:#009a61;font-size: 22px;font-weight: 600">
        自动化出品管理
      </div>
      <div class="fr">
        <router-link to="/monitor" class="btnbg">监控页</router-link>
        <router-link to="/login" class="btnbg">退出登录</router-link>
      </div>

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
    height: 64px;
    line-height:64px;
    position: fixed;
    width: 100%;
    z-index: 3;
    border-top: 3px solid #009a61;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.1), 0 1px rgba(0,0,0,0.1);
    background: #fafafa;
    .btnbg{
      display: inline-block;
      width: 90px;
      height: 35px;
      line-height: 35px;
      text-align: center;
      margin-right: 20px;
      cursor: pointer;
      color: #fff;
      background-color: #009a61;
      border-color: #008151;
      padding: 0 13px;
      font-size: 14px;
      border-radius: 4px;
      &:hover{
        color: #fff;
        background-color: #006741;
        border-color: #00432a;
      }
    }
  }
</style>



