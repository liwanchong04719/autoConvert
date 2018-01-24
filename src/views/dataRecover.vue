<template>
  <div>
    <header-com></header-com>
    <div class="content wrapper" >
      <ul class="indexNav">
        <li>
          <router-link to="/menu">功能模块</router-link>
        </li>
        <li>
          <a href="javascript:void(0);" style="color:#777;cursor: default">数据恢复</a>
        </li>
      </ul>
      <div class="Main">
        <div class="selectOption">
          <span class="demonstration">细分类型</span>
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
            >
            </el-table-column>
            <el-table-column
              prop="belongDay"
              label="所属日期"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="provinceNm"
              label="省份"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="provinceNmNosep"
              label="省份（份）"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="convStep"
              label="阶段"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="dbCopyId"
              label="备份子程序"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="copyStatus"
              label="状态"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="logFuseId"
              label="融合子程序"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="fuseStatus"
              label="状态"
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
    dataRecover
  } from '../dataService/service';
  export default {
    name: 'menuList',
    data() {
      return {
        convListId:'',
        detailsVal: '',
        configName: '',
        detailsType: [],
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
          this.detailsVal = data.configName[0].configValue;
          this.configName = data.configName[0].configKey;
          let param = `configName=${this.configName}&versionType=1`;
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
        let typeparam = `configName=${this.configName}&versionType=1`;
        this.changeOption(typeparam);
      },
      changeOption(param){
        getConfigId(param).then((data) => {
          this.convListId = data.convListId;
          console.log(data);
          console.log(this.convListId + 'as1');
          dataRecover(`convListId=${this.convListId}`).then((data)=>{
            console.log(data);
            this.tableData = data;
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
