<template>
  <div>
    <header-com></header-com>
    <div class="content wrapper" >
      <ul class="indexNav">
        <li>
          <a href="">功能模块</a>
        </li>
        <li>
          <a href="javascript:void(0);" style="color:#777">代码重载</a>
        </li>
      </ul>
       <div class="Main">
         <div class="selectOption">
           <span class="demonstration">任务类型</span>
           <el-select v-model="value" placeholder="请选择" size="small">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
           <span class="demonstration" style="margin-left: 30px">细分类型</span>
           <el-select v-model="value" placeholder="请选择" size="small" >
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
           <el-button type="primary" style="margin-right: 20px;float:right"  size="small">重转<i class="el-icon-upload el-icon--right"></i></el-button>
         </div>
         <div style="margin-top: 20px">
           <el-table
             ref="multipleTable"
             :data="tableData3"
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
               prop = "taskMain"
             >
             </el-table-column>
             <el-table-column
               prop="taskSub"
               label="子任务号"
               width="120">
             </el-table-column>
             <el-table-column
               prop="date"
               label="所属日期"
               show-overflow-tooltip>
             </el-table-column>
             <el-table-column
               prop="province"
               label="省份"
               show-overflow-tooltip>
             </el-table-column>
             <el-table-column
               prop="provinceDe"
               label="省份（份）"
               show-overflow-tooltip>
             </el-table-column>
             <el-table-column
               prop="program"
               label="程序"
               :filters="[{ text: 'idb_conv', value: 'idb_conv' }, { text: 'db_diff', value: 'db_diff' }]"
               :filter-method="filterProgram"
               filter-placement="bottom"
               >
             </el-table-column>
             <el-table-column
               prop="stage"
               label="阶段"
               :filters="[{ text: 'day', value: 'day' }, { text: 'mifg', value: 'mifg' }]"
               :filter-method="filterStage"
               filter-placement="bottom"
             >
             </el-table-column>
             <el-table-column
               prop="status"
               label="状态"
               :filters="[{ text: '成功', value: '成功' }, { text: '失败', value: '失败' },{ text: '转换中', value: '转换中' }]"
               :filter-method="filterStatus"
               filter-placement="bottom"
              >
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
  import singleModule from '../components/singleModule.vue';
  export default {
    name: 'menuList',
    data() {
      return {
        value5: '',
        seasonVal:'',
        value:'',
        workSeason: [{
          value: '17SPR'
        }, {
          value: '17SUM'
        }, {
          value: '17AUT'
        }, {
          value: '17WIN'
        }],
        options: [{
          value: '选项1',
          label: '17SPR'   //选项的标签，若不设置则默认与 value 相同
        }, {
          value: '选项2',
          label: '17SUM'
        }, {
          value: '选项3',
          label: '17AUT'
        }, {
          value: '选项4',
          label: '17WIN'
        }],
        tableData3: [{
          taskMain: '20',
          taskSub:'1230',
          province:'陕西省',
          provinceDe:'陕西省',
          date:'20171220',
          program:'db_diff',
          stage:'day',
          status:'成功'
        }, {
          taskMain: '20',
          taskSub:'1231',
          province:'山西省',
          provinceDe:'山西省',
          date:'20171220',
          program:'idb_conv',
          stage:'mifg',
          status:'转换中'
        }, {
          taskMain: '20',
          taskSub:'1232',
          province:'湖北省',
          provinceDe:'湖北省',
          date:'20171220',
          program:'db_diff',
          stage:'day',
          status:'失败'
        }, {
          taskMain: '20',
          taskSub:'1233',
          province:'云南省',
          provinceDe:'云南省',
          date:'20171220',
          program:'db_diff',
          stage:'mifg',
          status:'转换中'
        }, {
          taskMain: '20',
          taskSub:'1234',
          province:'四川省',
          provinceDe:'四川1',
          date:'20171220',
          program:'db_diff',
          stage:'day',
          status:'失败'
        }, {
          taskMain: '20',
          taskSub:'1235',
          province:'广西省',
          provinceDe:'广西省',
          date:'20171220',
          address: '市普',
          program:'db_diff',
          stage:'day',
          status:'失败'
        }, {
          taskMain: '20',
          taskSub:'1236',
          province:'浙江省',
          provinceDe:'浙江省',
          date:'20171220',
          program:'idb_conv',
          stage:'day',
          status:'成功'
        }],
        multipleSelection: []

      }
    },
    components: {
      headerCom,
      singleModule
    },
    mounted:function(){

    },
    methods: {
      filterProgram(value, row) {
        return row.program === value;
      },
      filterStage(value, row) {
        return row.stage === value;
      },
      filterStatus(value,row){
        return row.status === value;
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
      currentPage(curPage){
        console.log('---currentPageNum---');
        console.log(curPage);
      },
      changeYear(curYear){
        console.log('-----currentYear-selected----------');
        console.log(curYear);
      },
      curSeason(curSeason){
        console.log('-----currentSeason-selected----------');
        console.log(curSeason);
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
