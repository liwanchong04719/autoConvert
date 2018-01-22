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
          <el-select v-model="value" placeholder="请选择" size="small" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button type="primary" style="margin-right: 20px;float:right"  size="small">执行<i class="el-icon-upload el-icon--right"></i></el-button>
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
              prop="stage"
              label="阶段"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="program"
              label="备份子程序"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="retaskTime"
              label="融合子程序"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
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
  import singleModule from '../components/singleModule.vue';
  export default {
    name: 'menuList',
    data() {
      return {
        value5: '',
        value:'',
        options: [{
          value: '选项1',
          label: '17SPR'
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
          retaskTime:'2',
          program:'db_diff',
          stage:'day',
          status:'成功'
        }, {
          taskMain: '20',
          taskSub:'1231',
          province:'山西省',
          provinceDe:'山西省',
          date:'20171220',
          retaskTime:'1',
          program:'idb_conv',
          stage:'day',
          status:'成功'
        }, {
          taskMain: '20',
          taskSub:'1232',
          province:'湖北省',
          provinceDe:'湖北省',
          date:'20171220',
          retaskTime:'133',
          program:'db_diff',
          stage:'day',
          status:'失败'
        }, {
          taskMain: '20',
          taskSub:'1233',
          province:'云南省',
          provinceDe:'云南省',
          date:'20171220',
          retaskTime:'1',
          program:'db_diff',
          stage:'day',
          status:'失败'
        }, {
          taskMain: '20',
          taskSub:'1234',
          province:'四川省',
          provinceDe:'四川1',
          date:'20171220',
          retaskTime:'33',
          program:'db_diff',
          stage:'day',
          status:'失败'
        }, {
          taskMain: '20',
          taskSub:'1235',
          province:'广西省',
          provinceDe:'广西省',
          date:'20171220',
          retaskTime:'1',
          program:'db_diff',
          stage:'day',
          status:'失败'
        }, {
          taskMain: '20',
          taskSub:'1236',
          province:'浙江省',
          provinceDe:'浙江省',
          date:'20171220',
          retaskTime:'13',
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
