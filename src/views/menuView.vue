<template>
  <div class="menubg">
    <header-com></header-com>
    <div class="scrollBox wrapper">
      <div>
        <div class="itemTitle">
            任务管理
        </div>
        <div class="everySpc">
          <singleblock option="recode"></singleblock>
          <singleblock taskTitle="任务重转"  option="retask"></singleblock>
          <singleblock taskTitle="云端同步"></singleblock>
          <singleblock taskTitle="任务重转"></singleblock>
          <singleblock taskTitle="数据恢复"></singleblock>
          <singleblock taskTitle="废弃任务"></singleblock>
          <singleblock taskTitle="任务加锁"></singleblock>
        </div>
      </div>
      <div style="margin-top: 20px">
        <div class="itemTitle">
          统计信息
        </div>
        <div class="everySpc">
          <singleblock></singleblock>
          <singleblock taskTitle="代码重载"></singleblock>
          <singleblock taskTitle="任务恢复"></singleblock>
          <singleblock taskTitle="本地上传"></singleblock>
          <singleblock taskTitle="任务加锁"></singleblock>
        </div>
      </div>
      <div style="margin-top: 20px">
        <div class="itemTitle">
          系统管理
        </div>
        <div class="everySpc">
          <singleblock></singleblock>
          <singleblock taskTitle="代码重载"></singleblock>
          <singleblock taskTitle="任务恢复"></singleblock>
          <singleblock taskTitle="本地上传"></singleblock>
          <singleblock taskTitle="任务加锁"></singleblock>
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
    background: url(../assets/menubg.jpg);
  }

</style>
