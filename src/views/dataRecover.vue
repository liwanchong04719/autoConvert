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
          <el-button type="primary" style="margin-right: 20px;float:right"  size="small" @click="execute">执行<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
        <div style="margin-top: 20px">
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%; background-color: #F5F5F5;"
            @selection-change="handleSelectionChange"
           >
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
              prop="provinceNmNosep"
              label="省份"
              :filters="provinceList"
              filter-placement="bottom"
              column-key="provinceName"
            >
            </el-table-column>
            <el-table-column
              prop="provinceNm"
              label="省份（份）"
            >
            </el-table-column>
            <el-table-column
              prop="convStep"
              label="阶段"
            >
            </el-table-column>
            <el-table-column
              prop="dbCopyId"
              label="备份子程序"
            >
            </el-table-column>
            <el-table-column
              prop="copyStatus"
              label="状态"
              :filters="statusList_copy"
              filter-placement="bottom"
              column-key="copyStatus"
            >
            </el-table-column>
            <el-table-column
              prop="logFuseId"
              label="融合子程序"
            >
            </el-table-column>
            <el-table-column
              prop="fuseStatus"
              label="状态"
              :filters="statusList_fuse"
              filter-placement="bottom"
              column-key="fuseStatus"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
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
    dataRecover,
    restore
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
        provinceList:[],
        statusList_copy:[],
        statusList_fuse:[],
        multipleSelection: [],
        executeParam:'',
        failTip:false,
        successTip:false

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
            this.provinceList = [];
            this.statusList_copy = [];
            this.statusList_fuse = [];
            console.log(data);
            this.tableData = data;
            let provinceArr = [];                                                //定义一个筛选的字段列表
            let statusArr_copy = [];
            let statusArr_fuse = [];
            for(let i=0;i<data.length;i++) {                                     //获取结果集中筛选字段的数据集合
              provinceArr.push(data[i].provinceNmNosep);
              statusArr_copy.push(data[i].copyStatus);
              statusArr_fuse.push(data[i].fuseStatus);
            }
            console.log(provinceArr);
            //"省份"筛选字段
            let provinceResult = provinceArr.filter(function(el,index,self) {    //将取到的字段列表去重
              return self.indexOf(el) === index;
            })
            for(let i=0;i<provinceResult.length;i++){                             //将数据键值对放入筛选字段数组中
              this.provinceList.push({ text: provinceResult[i], value: provinceResult[i]});
            }
            //copy-"状态"筛选字段
            let statusResult_copy = statusArr_copy.filter(function(el,index,self) {
              return self.indexOf(el) === index;
            })
            for(let i=0;i<statusResult_copy.length;i++){
              this.statusList_copy.push({ text: statusResult_copy[i], value: statusResult_copy[i]});
            }

           // fuse-"状态"筛选字段
            let statusResult_fuse = statusArr_fuse.filter(function(el,index,self) {
              return self.indexOf(el) === index;
            })
            for(let i=0;i<statusResult_fuse.length;i++){
              this.statusList_fuse.push({ text: statusResult_fuse[i], value: statusResult_fuse[i]});
            }
          })

        })

      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        let objArr = [];
        if(this.multipleSelection.length>0) {
          for (let i = 0; i < this.multipleSelection.length; i++) {
            objArr.push({
              runtimeIdLogFuse:this.multipleSelection[i].logFuseId,
              runtimeIdCopy:this.multipleSelection[i].dbCopyId
            })
          }
          let paramConvListId = this.multipleSelection[0].convListId;
          this.executeParam = JSON.stringify({
            convListId: paramConvListId,
            runtimeIds: objArr
          })
        }
      },
      execute(){
        if(this.executeParam) {
          let that = this;
          restore(`param=${this.executeParam}`).then(function (data) {
            if(data.code == 200){
              that.successTip = true;
            }else{
              that.failTip = true;
            }
          })
        }
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

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }

</style>
