<template>
  <div class="flexItem" v-on:click="enterOperate(option)">
    <div class="pic">
      <img src="../img/block.png" alt="">
    </div>
    <div class="words">
      {{blockname}}
    </div>
  </div>

</template>

<script type='text/ecmascript-6'>
  import Vue from 'vue';
  export default {
      props:{
        blockname: {
           type: [String],
           default: '代码重载'
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
    box-shadow: -1px 13px 34px 8px rgb(237,237,237);
    transition: all 0.3s ;
    .pic{
      text-align: center;
      vertical-align: middle;
      width: 100%;
      padding: 20px;
      img{
        width:50px;
        height: 50px;
      }
    }
    .words{
      text-align: center;
      color:rgb(0, 180, 255);
      font-size: 16px;
      font-weight: 700;
    }

    &:hover {
      transform: translateY(-10px);
    }

  }

</style>
