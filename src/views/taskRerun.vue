<template>
  <div>
    <header-com></header-com>
    <div class="content wrapper" >
      <ul class="indexNav">
        <li>
          <router-link to="/menu">功能模块</router-link>
        </li>
        <li>
          <a href="javascript:void(0);" style="color:#777;cursor: default">任务重转</a>
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
              prop = "convListId"
              width="100"
              label="主任务号"
            >
            </el-table-column>
            <el-table-column
              prop="convListDetailRuntimeId"
              label="子任务号"
              width="120">
            </el-table-column>
            <el-table-column
              prop="belongDay"
              label="所属日期"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="provinceNM"
              label="省份"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="provinceNMNosep"
              label="省份（份）"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="programCode"
              label="程序"
              width="130"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="convStep"
              label="阶段"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="reconvert"
              label="重转次数"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>

        </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="200"
        @size-change="pageSize"
        @current-change="currentPage"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import headerCom from '../components/headerCom.vue';
  import {
    getconfig,
    getConfigId,
    getSubinfo
  } from '../dataService/service';
  export default {
    name: 'menuList',
    data() {
      return {
        typeVal: '',
        detailsVal: '',
        configName: '',
        versionType: '',
        convListId:'',
        taskType: [],
        detailsType: [],
        multipleSelection: [],
        tableData:[]

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
          this.changeOption(param);
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
        this.changeOption(typeparam);
      },
      selectTasktype(param) {
        let obj = {};
        obj = this.taskType.find((item) => {
          return item.versionValue === param;
        });
        this.versionType = obj.versionKey;
        console.log(this.configName+'---'+this.versionType);
        let typeparam = `configName=${this.configName}&versionType=${this.versionType}&convVersion=${this.seasonVal}`;
        this.changeOption(typeparam);
      },
      changeOption(param){
        getConfigId(param).then((data) => {
          this.convListId = data.convListId;
          console.log(data);
          console.log(this.convConfigId + 'as1');
          getSubinfo(`convListId=${this.convListId}`).then((data) => {
            this.tableData = data;
            console.log(data);
          })
        })
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
