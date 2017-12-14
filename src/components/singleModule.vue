<template>
  <div class="flexItem" v-on:click="enterOperate(option)">
    <span class="picPos" v-bgcolor=colorVal>
      <img src="../img/task.png" alt="">
      <span style="display:inline-block;vertical-align: middle;height: 100%;width: 0px"></span>
    </span>
    <span class="bar">{{taskTitle}}</span>
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
           type:[String],
           default:'rgb(111, 239, 152)'
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
    display: flex;
    width: 22%;
    height: 110px;
    border-radius: 5px;
    background-color: #ffffff;
    cursor: pointer;
    margin-bottom: 30px;
    margin-right: 3%;
    .picPos {
      display: inline-block;
      height: 100%;
      background-color: rgb(85, 195, 252);
      border-radius: 5px 0px 0px 5px;
      width: 110px;
      text-align: center;
      img {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .bar {
      color: #505458;
      display: inline-block;
      font-size: 20px;
      height: 100%;
      flex: 1;
      text-align: center;
      line-height: 110px;
    }
    &:hover {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, .3);
    }
    &:hover img {
      transform: scale(1.1);
      transition: all 0.7s linear;
    }
  }

</style>
