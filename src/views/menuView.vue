<template>
  <div class="menubg">
    <header-com></header-com>
    <div class="scrollBox wrapper">
      <div>
        <div class="itemTitle">
            任务管理
        </div>
        <div class="everySpc">
          <singleblock option="recode" :bgImage="bg1"></singleblock>
          <singleblock taskTitle="任务重转"  option="retask"></singleblock>
          <singleblock taskTitle="云端同步" :bgImage="bg2"></singleblock>
          <singleblock taskTitle="任务重转" :bgImage="bg3"></singleblock>
          <singleblock taskTitle="数据恢复" :bgImage="bg4"></singleblock>
          <singleblock taskTitle="废弃任务" :bgImage="bg5"></singleblock>
          <singleblock taskTitle="任务加锁" :bgImage="bg6"></singleblock>
        </div>
      </div>
      <div style="margin-top: 20px">
        <div class="itemTitle">
          统计信息
        </div>
        <div class="everySpc">
          <singleblock></singleblock>
          <singleblock taskTitle="代码重载" :bgImage="bg2"></singleblock>
          <singleblock taskTitle="任务恢复" :bgImage="bg1"></singleblock>
          <singleblock taskTitle="本地上传" :bgImage="bg6"></singleblock>
          <singleblock taskTitle="任务加锁" :bgImage="bg5"></singleblock>
        </div>
      </div>
      <div style="margin-top: 20px">
        <div class="itemTitle">
          系统管理
        </div>
        <div class="everySpc">
          <singleblock></singleblock>
          <singleblock taskTitle="代码重载"></singleblock>
          <singleblock taskTitle="任务恢复" :bgImage="bg4"></singleblock>
          <singleblock taskTitle="本地上传" :bgImage="bg3"></singleblock>
          <singleblock taskTitle="任务加锁" :bgImage="bg2"></singleblock>
        </div>

      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import headerCom from '../components/headerCom.vue';
  import singleModule from '../components/singleModule.vue';
  import singleblock from '../components/singleblock.vue';
  import singleTask from '../components/singleTask.vue';
  export default {
    name: 'menuList',
    data() {
      return {
        bg1:require('../assets/blockIcon2.png'),
        bg2:require('../assets/blockIcon3.png'),
        bg3:require('../assets/blockIcon4.png'),
        bg4:require('../assets/blockIcon5.png'),
        bg5:require('../assets/blockIcon6.png'),
        bg6:require('../assets/blockIcon8.png')
      }
    },
    components: {
      headerCom,
      singleModule,
      singleblock,
      singleTask

    },
    methods: {


    }
  }



</script>

<style lang="scss" scoped>
  .scrollBox{
    padding-top:95px;
    width: 1200px;
    .itemTitle{
      line-height: 24px;
      font-size: 18px;
      color: #333333;
      margin-bottom: 20px;
      background: url(../img/item1.png) left center no-repeat;
      text-indent: 30px;
    }
    .everySpc{
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }
  .menubg{
    background:url(../assets/menubg.jpg) 100% 100%;
  }

</style>
