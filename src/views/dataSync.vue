<template>
  <div>
    <header-com></header-com>
    <div class="content wrapper" >
      <ul class="indexNav">
        <li>
          <router-link to="/menu">功能模块</router-link>
        </li>
        <li>
          <a href="javascript:void(0);" style="color:#777;cursor: default">云端同步</a>
        </li>
      </ul>
      <div class="Main">
        <div class="selectOption">
          <span class="demonstration">任务类型</span>
          <el-select v-model="typeVal" placeholder="请选择" size="small"  @change="selectTasktype">
            <el-option
              v-for="item in taskType"
              :key="item.versionValue"
              :label="item.label"
              :value="item.versionValue">
            </el-option>
          </el-select>
          <span class="demonstration" style="margin-left: 30px">细分类型</span>
          <el-select v-model="detailsVal" placeholder="请选择" size="small"  @change="selectDetail" >
            <el-option
              v-for="one in detailsType"
              :key="one.configValue"
              :label="one.label"
              :value="one.configValue">
            </el-option>
          </el-select>
          <el-button type="primary" style="margin-right: 20px;float:right"  size="small">执行<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
        <div style="margin-top: 20px">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%; background-color: #F5F5F5;"
            @selection-change="handleSelectionChange"
            @select="selectOnecol"
            @select-all="selectAllcol">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="主任务号"
              prop = "convListId"
              width="80"
            >
            </el-table-column>
            <el-table-column
              prop="convName"
              label="任务名称"
              width="230">
            </el-table-column>
            <el-table-column
              prop="convVersion"
              label="作业季"
              width="80"
            >
            </el-table-column>
            <el-table-column
              prop="belongDay"
              label="所属日期"
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop="status"
              label="总体状态"
              width="90"
            >
            </el-table-column>
            <el-table-column
              prop="releaseFlag"
              label="发布状态"
              width="100"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="versionType"
              label="任务类型"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="beginTime"
              label="开始时间"
              width="180"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="endTime"
              label="结束时间"
              width="180"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>

        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import headerCom from '../components/headerCom.vue';
  import {
    getconfig,
    getConfigId,
    getMaintask
  } from '../dataService/service';
  export default {
    name: 'menuList',
    data() {
      return {
        typeVal: '',
        detailsVal: '',
        configName: '',
        versionType: '',
        taskType: [],
        detailsType: [],
        convConfigId:'',
        tableData: [],
        multipleSelection: []

      }
    },
    components: {
      headerCom
    },
    mounted:function(){
      this.initConfig()
    },
    methods: {
      initConfig: function () {
        getconfig().then((data) => {
          this.detailsType = data.configName;
          this.taskType = data.versionType;
          this.typeVal = data.versionType[0].versionValue;
          this.detailsVal = data.configName[0].configValue;
          this.configName = data.configName[0].configKey;
          this.versionType = data.versionType[0].versionKey;
          let param = `configName=${this.configName}&versionType=${this.versionType}`;
          getConfigId(param).then((data) => {
            this.convConfigId = data.convConfigId;
            console.log(this.convConfigId + 'as1');
            getMaintask(`convConfigId=${data.convConfigId}`).then((data) => {
              this.tableData = [];
              this.tableData.push(data);
              console.log(data);

            })
          })
        })
      },
      selectDetail(param) {
        let spr = {};
        spr = this.detailsType.find((item) => {
          return item.configValue === param
        })
        this.configName = spr.configKey;
        console.log(this.configName+'---'+this.versionType);
        let typeparam = `configName=${this.configName}&versionType=${this.versionType}&convVersion=${this.seasonVal}`;
        //  this.changeType(typeparam);
      },
      selectTasktype(param) {
        let obj = {};
        obj = this.taskType.find((item) => {
          return item.versionValue === param;
        });
        this.versionType = obj.versionKey;
        console.log(this.configName+'---'+this.versionType);
        let typeparam = `configName=${this.configName}&versionType=${this.versionType}&convVersion=${this.seasonVal}`;
        // this.changeType(typeparam);
      },
      handleSelectionChange(val) {
        console.log('aaa');
        this.multipleSelection = val;
      },
      selectOnecol(selection, row){
        console.log('---selectOne---');
        console.log(selection, row);
      },
      selectAllcol(selection){
        console.log('---selectAll---');
        console.log(selection);
      },
      pageSize(num){
        console.log('---onepageSize---');
        console.log(num);
      },
      currentPage(cur){
        console.log('---currentPageNum---');
        console.log(cur);

      }

    }
  }



</script>

<style lang="scss" scoped>
  .content {
    width: 1200px;
    padding-top: 56px;
  .indexNav {
    padding-top: 25px;
    line-height: 40px;
    border-bottom: 1px solid #dfe4ed;
  li {
    display: inline-block;
  a {
    color:#3399ff;
    font-size: 16px;
  }
  }
  }
  .Main{
    margin-bottom: 30px;
  .selectOption{
    margin-top: 30px;
  .demonstration{
    font-size: 14px;
    color:#3399ff;
    font-weight: 700;
  }
  }

  }
  }
  .indexNav > li + li:before {
    content: ">";
    padding: 0 8px;
    color: #ccc;
  }
  .el-pagination{
    float: right;
  }

</style>
