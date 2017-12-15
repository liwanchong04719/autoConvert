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
             <span class="demonstration">年份</span>
             <el-date-picker
               v-model="value5"
               align="left"
               type="year"
               placeholder="选择年"
               size="small"
             >
             </el-date-picker>
           <span class="demonstration">作业季</span>
           <el-select v-model="value" placeholder="请选择" size="small">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
           <span class="demonstration">任务类型</span>
           <el-select v-model="value" placeholder="请选择" size="small">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
           <span class="demonstration">细分类型</span>
           <el-select v-model="value" placeholder="请选择" size="small">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
           <el-button type="primary" style="margin-left: 20px" size="small">重转<i class="el-icon-upload el-icon--right"></i></el-button>
         </div>
         <div style="margin-top: 20px">
           <el-table
             ref="multipleTable"
             :data="tableData3"
             tooltip-effect="dark"
             style="width: 100%; background-color: #F5F5F5;"
             @selection-change="handleSelectionChange">
             <el-table-column
               type="selection"
               width="55">
             </el-table-column>
             <el-table-column
               label="日期"
               width="120">
               <template slot-scope="scope">{{ scope.row.date }}</template>
             </el-table-column>
             <el-table-column
               prop="name"
               label="姓名"
               width="120">
             </el-table-column>
             <el-table-column
               prop="address"
               label="地址"
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []

      }
    },
    components: {
      headerCom,
      singleModule
    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }

    }
  }



</script>

<style lang="scss" scoped>
  .content {
    width: 1160px;
    padding-top: 70px;
    .indexNav {
      padding-top: 25px;
      li {
        display: inline-block;
        a {
          color:#3399ff;
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
    .Main{
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

</style>
