<template>
  <div>
    <header-com></header-com>
    <div class="scrollBox wrapper">
      <div>
        <div class="itemTitle">
            任务管理
        </div>
        <div class="everySpc">
          <single-Module option="recode"></single-Module>
          <single-Module taskTitle="任务重转" colorVal="rgb(255, 87, 130)" option="retask"></single-Module>
          <single-Module taskTitle="云端同步" colorVal="rgb(111, 239, 152)"></single-Module>
          <single-Module taskTitle="任务重转" colorVal="rgb(255, 87, 130)"></single-Module>
          <single-Module taskTitle="数据恢复" colorVal="rgb(85, 195, 252)"></single-Module>
          <single-Module taskTitle="废弃任务" colorVal="rgb(111, 239, 152)"></single-Module>
          <single-Module taskTitle="任务加锁" colorVal="rgb(111, 239, 152)"></single-Module>
        </div>
      </div>
      <!--<div style="width:100%;border-bottom: 1px solid #e0e0e0"></div>-->
      <div style="margin-top: 20px">
        <div class="itemTitle">
          统计信息
        </div>
        <div class="everySpc">
          <single-Module taskTitle="任务重转" colorVal="rgb(85, 195, 252)" ></single-Module>
          <single-Module taskTitle="数据恢复" colorVal="rgb(255, 87, 130)"></single-Module>
          <single-Module taskTitle="废弃任务" colorVal="rgb(111, 239, 152)"></single-Module>
          <single-Module taskTitle="任务加锁" colorVal="rgb(111, 239, 152)"></single-Module>
          <single-Module taskTitle="任务加锁" colorVal="rgb(111, 239, 152)"></single-Module>
        </div>
      </div>
      <!--<div style="width:100%;border-bottom:1px solid #e0e0e0"></div>-->
      <div style="margin-top: 20px">
        <div class="itemTitle">
          系统管理
        </div>
        <div class="everySpc">
          <single-Module taskTitle="任务重转" colorVal="rgb(85, 195, 252)"></single-Module>
          <single-Module taskTitle="数据恢复" colorVal="rgb(255, 87, 130)"></single-Module>
          <single-Module taskTitle="废弃任务" colorVal="rgb(111, 239, 152)"></single-Module>
          <single-Module taskTitle="任务加锁" colorVal="rgb(85, 195, 252)"></single-Module>
          <single-Module taskTitle="任务加锁" colorVal="rgb(111, 239, 152)"></single-Module>
          <single-Module taskTitle="数据恢复" colorVal="rgb(255, 87, 130)"></single-Module>
        </div>

      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import headerCom from '../components/headerCom.vue';
  import singleModule from '../components/singleModule.vue';
  export default {
    name: 'menuList',
    data() {
      return {

      }
    },
    components: {
      headerCom,
      singleModule
    },
    methods: {


    }
  }



</script>

<style lang="scss" scoped>
  .scrollBox{
    padding-top:100px;
    width: 1160px;
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
      justify-content: flex-start;
    }
  }

</style>
