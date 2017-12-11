<template>
  <div>
    <div class="header clear">
      <div class="fl" style="color:rgb(85, 195, 252);font-size: 22px;margin-left: 30px;font-weight: 800">
        自动化出品管理
      </div>
      <div class="fr" style="margin-right: 30px">
        <router-link to="/monitor" class="btnbg">监控页</router-link>
        <router-link to="/login" class="btnbg">退出登录</router-link>
      </div>
    </div>
    <div class="scrollBox">
      <div style="padding: 0px 50px">
        <div class="itemTitle">
            任务管理
        </div>
        <div class="everySpc">
          <div class="flexItem">
            <span class="picPos" v-bgcolor="'rgb(111, 239, 152)'">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos" v-bgcolor="'rgb(255, 87, 130)'">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
        </div>

      </div>
      <div style="width:100%;border-bottom: 1px solid #d0e4ff"></div>
      <div style="padding: 30px 50px">
        <div class="itemTitle">
          任务管理
        </div>
        <div class="everySpc">
          <div class="flexItem">
            <span class="picPos" v-bgcolor="'rgb(111, 239, 152)'">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos" v-bgcolor="'rgb(255, 87, 130)'">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
        </div>

      </div>
      <div style="width:100%;border-bottom: 1px solid #d0e4ff"></div>
      <div style="padding: 30px 50px">
        <div class="itemTitle">
          任务管理
        </div>
        <div class="everySpc">
          <div class="flexItem">
            <span class="picPos" v-bgcolor="'rgb(111, 239, 152)'">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos" v-bgcolor="'rgb(255, 87, 130)'">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
          <div class="flexItem">
            <span class="picPos">
               <img src="../img/task.png" alt="">
               <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
            </span>
            <span class="bar">代码重载</span>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script type='text/ecmascript-6'>
  import Vue from 'vue';
  //全局的指令:改变背景色 v-xxx
  Vue.directive("bgcolor", function (el, binding) {
    el.style.background = binding.value
  })


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
  .scrollBox{
    padding-top:100px;
    background-color: #f3f3f3;
    .itemTitle{
      line-height: 24px;
      font-size: 20px;
      font-weight: bold;
      color: #333;
      padding-bottom: 20px;
    }
    .everySpc{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .flexItem{
        display: flex;
         width: 22%;
         height: 120px;
        border-radius: 5px;
        background-color: #ffffff;
        cursor: pointer;
        margin-bottom:30px;
        .picPos{
          display: inline-block;
          height: 100%;
          background-color: rgb(85, 195, 252);
          border-radius: 5px 0px 0px 5px;
          width: 120px;
          text-align: center;
          img{
            display: inline-block;
            vertical-align: middle;

          }
        }
        .bar{
          color:#505458;
          display: inline-block;
          font-size: 20px;
          height: 100%;
          flex: 1;
          text-align: center;
          transform:translateY(38%);
        }
        &:hover{
          box-shadow: 0px 0px 15px rgba(0,0,0,.3);
        }
        &:hover img{
          transform:scale(1.2);
          transition: all 0.7s linear;
        }

      }


    }




  }

</style>
