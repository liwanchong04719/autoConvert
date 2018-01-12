<template>
  <div class="flexItem" @click="enterOperate(option)">
    <div class="pic">
      <img src='../img/blockIcon1.png' alt="">
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
      bgImage:{
        type:[String],
        default:'../img/blockIcon1.png'
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

  }
  .words{
    text-align: center;
    font-size: 18px;
    margin: 15px 0px 10px;
    color: #5cb7f4;
  &::after{
     content: "";
     display: block;
     position: absolute;
     height: 3px;
     width: 45px;
     background-color: #5cb7f4;
     transition: all 0.3s;
     left: 110px;
     text-align: center;
     bottom: 10px;
     border-radius: 20px;
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
    border-color: #5cb7f4;
  }
  .flexItem:hover:after{
    width: 100%;
    height: 100%;
    border-color: #5cb7f4;
  }
  .flexItem:hover img{
    animation: rotate 1s ease-out 0s 1;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }



</style>
