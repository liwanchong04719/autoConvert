<template>
  <div class="header clear">
    <div class="wrapper" style="width: 1200px">
      <div class="fl" style="color:#ffffff;font-size: 20px;font-weight: 600">
        自动化出品管理
      </div>
      <div class="fr">
        <router-link to="/monitor" class="btnmonitor">监控页</router-link>
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
    height: 56px;
    line-height:56px;
    position: fixed;
    width: 100%;
    z-index: 3;
    box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
    background-color:#4264fb;
    .btnmonitor{
      text-align: center;
      margin-right: 20px;
      cursor: pointer;
      color: #fff;
      padding: 0 22px;
      font-size: 14px;
      border-right: 1px solid #ffffff;
      font-weight:600;
      background:url(../img/monitorIcon.png) no-repeat left center;
      &:hover{
        color:rgba(255,255,255,.8);
      }
    }
    .btnbg{
      display: inline-block;
      width: 90px;
      line-height: 30px;
      text-align: center;
      margin-right: 20px;
      cursor: pointer;
      color: #fff;
      background-color: rgba(255,255,255,.25);
      border-color: #1478ff;
      padding: 0 13px;
      font-size: 14px;
      border-radius: 15px;
      font-weight:600;
      &:hover{
        background-color:rgba(255,255,255,.5);
      }
    }
  }

</style>



