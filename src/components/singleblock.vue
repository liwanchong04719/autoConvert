<template>
  <div class="flexItem" @click="enterOperate(option)">
    <div class="pic">
      <i class="changeIcon"></i>
    </div>
    <div class="words">
      {{taskTitle}}
    </div>
  </div>

</template>

<script type='text/ecmascript-6'>
  import Vue from 'vue';
  export default {
    props:{
      taskTitle: {
        type: [String],
        default: '代码重载'
      },
      colorVal:{
        type:[String]
      },
      option:{
        type:[String]
      }
    },
    methods:{
      enterOperate:function (option) {
        console.log(option);
        this.$router.push(option);
      }
    }
  }
  //全局指令
  Vue.directive("bgcolor", function (el, binding) {
    el.style.background = binding.value
  })
</script>

<style lang="scss" scoped>
  .flexItem {
    width: 22%;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
    margin-right: 3%;
    padding: 20px;
    transition: all 0.3s ;
    position: relative;
  &::before{
     content: '';
     position: absolute;
     top: 0;
     left: 0;
     width: calc(100% - 35px);
     height: calc(100% - 35px);
     border: 1px solid #e5e7e9;
     border-width: 1px 0 0 1px;
     pointer-events: none;
     transition: .3s all ease;
     display: block;
   }
  &::after{
     content: '';
     position: absolute;
     bottom: 0;
     right: 0;
     width: calc(100% - 35px);
     height: calc(100% - 35px);
     border: 1px solid #e5e7e9;
     border-width: 0 1px 1px 0;
     pointer-events: none;
     transition: .3s all ease;
     display: block;
   }
  .pic{
    text-align: center;
    vertical-align: middle;
    width: 100%;
    height:90px;
    .changeIcon{
      display: inline-block;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: #e5e7e9 url(../img/typeIcon.png) no-repeat 2px -125px;
      transition: background 0.3s linear;
    }

  }
  .words{
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  &::after{
     content: "";
     display: block;
     position: absolute;
     height: 2px;
     width: 45px;
     background-color: #37ccf4;
     transition: all 0.3s;
     left: 110px;
     text-align: center;
     bottom: 10px;
   }
  }

  }
  .flexItem:hover :after{
    width: 105px;
    left:80px;
  }
  .flexItem:hover:before{
    width: 100%;
    height: 100%;
    border-color:#37ccf4;
  }
  .flexItem:hover:after{
    width: 100%;
    height: 100%;
    border-color:#37ccf4;
  }
  .flexItem:hover .changeIcon{
    background-position: 2px -190px;
    background-color: #37ccf4;
  }

</style>
