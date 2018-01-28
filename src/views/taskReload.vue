<template>
  <div>
    <header-com></header-com>
    <div class="content wrapper" >
      <ul class="indexNav">
        <li>
          <router-link to="/menu">功能模块</router-link>
        </li>
        <li>
          <a href="javascript:void(0);" style="color:#777;cursor: default">代码重载</a>
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
             @select-all="selectAllcol"
             @filter-change="filterMultcol"
           >
             <el-table-column
               type="selection"
               width="55">
             </el-table-column>
             <el-table-column
               label="主任务号"
               prop = "convListId"
               width="100"
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
               :filters="provinceList"
               filter-placement="bottom"
               column-key="provinceNM"
             >
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
               :filters="programList"
               filter-placement="bottom"
               column-key="programCode"
               >
             </el-table-column>
             <el-table-column
               prop="convStep"
               label="阶段"
               :filters="stepList"
               :filter-method="filterStage"
               filter-placement="bottom"
               column-key="stepFilterkey"
             >
             </el-table-column>
             <el-table-column
               prop="status"
               label="状态"
               :filters="statusList"
               :filter-method="filterStatus"
               filter-placement="bottom"
               column-key="statusFilterkey"
              >
             </el-table-column>
             <el-table-column
               prop="reconvert"
               label="重转次数"
             >
             </el-table-column>
           </el-table>

         </div>
       </div>
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total='totalSize'
        @current-change="currentPageChange"
        :page-size="10"
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
        convListId:'',
        typeVal: '',
        detailsVal: '',
        configName: '',
        versionType: '',
        taskType: [],
        detailsType: [],
        multipleSelection: [],
        tableData:[],
        provinceList:[],
        programList:[],
        stepList:[],
        statusList:[],
        totalSize:0
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
        let typeparam = `configName=${this.configName}&versionType=${this.versionType}`;
        this.changeOption(typeparam);
      },
      selectTasktype(param) {
        let obj = {};
        obj = this.taskType.find((item) => {
          return item.versionValue === param;
        });
        this.versionType = obj.versionKey;
        console.log(this.configName+'---'+this.versionType);
        let typeparam = `configName=${this.configName}&versionType=${this.versionType}`;
        this.changeOption(typeparam);
      },
      changeOption(param){
        getConfigId(param).then((data) => {
          this.convListId = data.convListId;
            getSubinfo(`convListId=${this.convListId}&pageNum=1&pageSize=10`).then((data) => {
              this.totalSize = data[0].totolPage;
              this.tableData = data.slice(1, data.length);
            })

           getSubinfo(`convListId=${this.convListId}`).then((data) => {          //请求得全部的筛选字段集合
            //筛选字段
            let provinceArr = [];                                                //定义一个筛选的字段列表
            let stepArr = [];
            let programArr = [];
            let statusArr = [];
            this.provinceList = [];                                              //push前置空
            this.stepList = [];
            this.programList = [];
            this.statusList = [];
            for(let i=1;i<data.length;i++) {                                     //获取结果集中筛选字段的数据集合
              provinceArr.push(data[i].provinceNM);
              stepArr.push(data[i].convStep);
              programArr.push(data[i].programCode);
              statusArr.push(data[i].status);
            }

            //"省份"筛选字段
            let provinceResult = provinceArr.filter(function(el,index,self) {    //将取到的字段列表去重
              return self.indexOf(el) === index;
            })

            for(let i=0;i<provinceResult.length;i++){                             //将数据键值对放入筛选字段数组中
                this.provinceList.push({ text: provinceResult[i], value: provinceResult[i]});
            }

            //"程序"筛选字段
            let programResult = programArr.filter(function(el,index,self) {
              return self.indexOf(el) === index;
            })

            for(let i=0;i<programResult.length;i++){
              this.programList.push({ text: programResult[i], value: programResult[i]});
            }

            //"阶段"筛选字段
            let stepResult = stepArr.filter(function(el,index,self) {
              return self.indexOf(el) === index;
            })

            for(let i=0;i<stepResult.length;i++){
              this.stepList.push({ text: stepResult[i], value: stepResult[i]});
            }

            //"状态"筛选字段
            let statusResult = statusArr.filter(function(el,index,self) {
              return self.indexOf(el) === index;
            })

            for(let i=0;i<statusResult.length;i++){
              this.statusList.push({ text: statusResult[i], value: statusResult[i]});
            }
          })
        })
      },
      filterStage(value, row) {
        return row.convStep === value;
        let param = `convListId=${this.convListId}`;
        getSubinfo(param).then((data) => {
          console.log(data[0].totolPage);
          this.totalSize = data.length;

        })
      },
      filterStatus(value,row){
        return row.status === value;
        let param = `convListId=${this.convListId}`;
        getSubinfo(param).then((data) => {
          console.log(data[0].totolPage);
          this.totalSize = data.length;

        })
      },
      filterProvince(value,row){
        return row.provinceNM === value;
      },
      filterMultcol(filters){                     //所有的筛选条件写在这个函数中：多选多条件
        console.log(filters);
        console.log('筛选字段改变了。。。。');
        let param = `convListId=${this.convListId}&pageNum=1&pageSize=10`;

        let key = Object.keys(filters)[0];
        let val = filters[key][0] ;               //多选时传的参数：let val = filters[key]为多选字段的集合
        console.log(key,val+'ooooo');


         //若等于全部
        if(val === undefined){
          getSubinfo(param).then((data) => {
            this.totalSize = data[0].totolPage;
            this.tableData = data.slice(1, data.length);
          })
          return true;
        }

        getSubinfo(param).then((data) => {        //若不进行手动筛选，传参数到后台查询，则都写成以上方式才是对的
          console.log(data);
          let filterData = data.filter(function (el) {
             return el[key] == val

          })

          this.tableData = filterData;
          this.totalSize = filterData.length;

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
      currentPageChange(curPage){
        console.log('---currentPageNum---');
        console.log(curPage);
        let pageParam = `convListId=${this.convListId}&pageNum=${curPage}&pageSize=10`;
        getSubinfo(pageParam).then((data) => {
          this.tableData=[];
          this.tableData = data.slice(1, data.length);
        })
      }

    }
  }



</script>

<style lang="scss" scoped>
  .content {
    width: 1200px;
    padding-top: 56px;
    overflow:hidden;
    height:100%;
    .indexNav {
      padding-top: 25px;
      line-height: 40px;
      border-bottom: 1px solid #dfe4ed;
      li {
        display: inline-block;
        a {
          color:#1180ef;
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
