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
           <el-button type="primary" style="margin-right: 20px;float:right"  size="small" @click="execute">执行<i class="el-icon-upload el-icon--right"></i></el-button>
         </div>
         <div style="margin-top: 20px">
           <el-table
             ref="multipleTable"
             :data="tableData"
             tooltip-effect="dark"
             style="width: 100%; background-color: #F5F5F5;"
             @selection-change="handleSelectionChange"
             @filter-change="filterMultcol"
           >
             <el-table-column
               type="selection"
               width="55"
               :selectable="selectable"
             >
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
               prop="provinceNMNosep"
               label="省份"
               :filters="provinceList"
               filter-placement="bottom"
               column-key="provinceName"
             >
             </el-table-column>
             <el-table-column
               prop="provinceNM"
               label="省份（份）"
             >
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
               filter-placement="bottom"
               column-key="step"
             >
             </el-table-column>
             <el-table-column
               prop="status"
               label="状态"
               :filters="statusList"
               filter-placement="bottom"
               column-key="status"
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
    <transition
      name="bounce"
    >
      <div v-if="successTip" class="provinceDel">
        <div class="tipBlock">
          <h2>执行成功！</h2>
          <div @click="successTip = !successTip">OK</div>
        </div>
      </div>
    </transition>
    <transition
      name="bounce"
    >
      <div v-if="failTip" class="provinceDel">
        <div class="tipBlock">
          <h2>执行失败！</h2>
          <div @click="failTip = !failTip">OK</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type='text/ecmascript-6'>
  import headerCom from '../components/headerCom.vue';
  import {
    getconfig,
    getConfigId,
    getSubinfo,
    taskReload
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
        totalSize:0,
        executeParam:'',
        provinceParam:'',
        programParam:'',
        stepParam:'',
        statusParam:'',
        successTip:false,
        failTip:false
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
              provinceArr.push(data[i].provinceNMNosep);
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
      filterMultcol(filters){                     //所有的筛选条件写在这个函数中：多选多条件
        console.log(filters);
        let key = Object.keys(filters)[0];
        let val = filters[key];                  //多选时传的参数：let val = filters[key]为多选字段的集合

        if(key === 'provinceName'){
          this.provinceParam =`${key}=${val}`
        }
        if(key === 'programCode'){
          this.programParam =`${key}=${val}`
        }
        if(key === 'step'){
          this.stepParam =`${key}=${val}`
        }
        if(key === 'status'){
          let str = '';
          for(let i=0;i<val.length;i++){
            if(val[i] == '失败'){
              str = str+','+'0'
            }
            if(val[i] == '成功'){
              str = str+','+'1'
            }
            if(val[i] == '转换中'){
              str = str+','+'2'
            }
            if(val[i] == '未开始'){
              str = str+','+'3'
            }
            if(val[i] == '废弃'){
              str = str+','+'4'
            }
          }
        this.statusParam =`${key}=${str.slice(1,str.length)}`
        }

        let param = `convListId=${this.convListId}&pageNum=1&pageSize=10&${this.provinceParam}&${this.programParam}&${this.stepParam}&${this.statusParam}`;
        getSubinfo(param).then((data) => {
          this.totalSize = data[0].totolPage;
          this.tableData = data.slice(1, data.length);
        })

      },
      handleSelectionChange(val) {                      //处理选中
        this.multipleSelection = val;
        let runtimeIds = '';
        if(this.multipleSelection.length>0) {
          for (let i = 0; i < this.multipleSelection.length; i++) {
            console.log(this.multipleSelection[i].convListDetailRuntimeId);
            runtimeIds = runtimeIds + ',' + this.multipleSelection[i].convListDetailRuntimeId;

          }
          let paramConvListId = this.multipleSelection[0].convListId;
          this.executeParam = JSON.stringify({
            convListid: paramConvListId,
            runtimeIds: runtimeIds.slice(1, runtimeIds.length)
          })
        }
      },
      execute(){
        if(this.executeParam) {
          let that = this;
          taskReload(`param=${this.executeParam}`).then(function (data) {
            if(data.code == 200){
              that.successTip = true;
            }else{
              that.failTip = true;
            }
          })
        }
      },
      currentPageChange(curPage){
        let pageParam = `convListId=${this.convListId}&pageNum=${curPage}&pageSize=10`;
        getSubinfo(pageParam).then((data) => {
          this.tableData=[];
          this.tableData = data.slice(1, data.length);
        })
      },
      selectable(row, index){            //控制checkbox是否可选，返回的是可选的
        return row.status == '失败' || row.status == '未开始';
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

  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .provinceDel {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 10;
      .tipBlock{
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto;
        width: 450px;
        height:170px;
        border-radius: 6px;
        background-color: #ffffff;
        padding:30px;
        text-align:center;
      h2{
        color:#575757;
        text-align: center;
        }
      div{
        display: inline-block;
        text-align: center;
        background-color: rgb(140, 212, 245);
        width: 88px;
        height: 40px;
        line-height: 40px;
        color:#ffffff;
        border-radius: 5px;
        margin-top: 40px;
        cursor: pointer;
      }
    }
  }

</style>
