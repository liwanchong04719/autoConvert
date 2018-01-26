<template>
  <div class="child-page-toolbar">
    <div class="line"></div>

    <span slot="title">状态</span>
    <el-select v-model="selectState" placeholder="请选择工单状态" @change="StateChange">
      <el-option
        v-for="item in state"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <span slot="title">分类</span>
    <el-select v-model="selectSort" placeholder="请选择工单类别" @change="SortChange">
      <el-option
        v-for="item in sort"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-date-picker
      v-model="selectDate"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions" @change="dateChange">
    </el-date-picker>



    <el-table :data="tableData"
              style="width: 100%"
              :default-sort = "{prop: 'submitTime', order: 'ascending'}">
      <el-table-column
        prop="orderNum"
        label="工单号"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="orderSort"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="orderTitle"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="orderDescribe"
        label="描述"
        width="180">
      </el-table-column>
      <el-table-column
        prop="orderState"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="submitTime"
        label="提交时间"
        sortable>
      </el-table-column>
      <el-table-column
        prop="endTime"
        label="截止时间"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleDetail(scope.$index, scope.row)" type="text" size="small">详情</el-button>
          <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        state: [{
          value: '0',
          label: '全部工单'
        }, {
          value: '1',
          label: '未处理'
        }, {
          value: '2',
          label: '处理中'
        }, {
          value: '3',
          label: '已处理'
        }, {
          value: '4',
          label: '已结单'
        }],
        sort: [{
          value: '0',
          label: '全部工单'
        }, {
          value: '1',
          label: '文案类'
        }, {
          value: '2',
          label: '设计类'
        }, {
          value: '3',
          label: '开发类'
        }, {
          value: '4',
          label: '采购类'
        }, {
          value: '5',
          label: '其他类'
        }],
        selectState: '',
        selectSort:'',


        //日期选择器
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        selectDate: '',

        //表格数据
        tableData: [{
          orderNum: '1',
          orderSort: '开发',
          orderTitle: 'BUG测试',
          orderDescribe:'BUG测试描述',
          orderState:'处理中',
          submitTime:'2017.01.10 02:33',
          endTime:'2017.02.10 02:33'
        }, {
          orderNum: '2',
          orderSort: '开发',
          orderTitle: 'BUG测试',
          orderDescribe:'BUG测试描述',
          orderState:'处理中',
          submitTime:'2017.01.11 02:33',
          endTime:'2017.02.09 02:33'
        }, {
          orderNum: '3',
          orderSort: '开发',
          orderTitle: 'BUG测试',
          orderDescribe:'BUG测试描述',
          orderState:'处理中',
          submitTime:'2017.01.12 02:33',
          endTime:'2017.02.08 02:33'
        }, {
          orderNum: '4',
          orderSort: '开发',
          orderTitle: 'BUG测试',
          orderDescribe:'BUG测试描述',
          orderState:'处理中',
          submitTime:'2017.01.09 02:33',
          endTime:'2017.02.07 02:33'
        }, {
          orderNum: '5',
          orderSort: '开发',
          orderTitle: 'BUG测试',
          orderDescribe:'BUG测试描述',
          orderState:'处理中',
          submitTime:'2017.01.08 02:33',
          endTime:'2017.02.06 02:33'
        }, {
          orderNum: '6',
          orderSort: '开发',
          orderTitle: 'BUG测试',
          orderDescribe:'BUG测试描述',
          orderState:'处理中',
          submitTime:'2017.01.15 02:33',
          endTime:'2017.02.05 02:33'
        }]
      }
    },
    filter:{

    },
    methods: {
      StateChange(value) {
        console.log(value);
        if(value === 2){

        }
      },
      SortChange(value){
        console.log(value);
        res[i].state==this.selectState&&res[i].sort==this.selectSort
      },

      dateChange(value){
        console.log(value);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(row) {
        console.log(row);
      },
      handleDetail(index,row){
        location.href = "/personal/detail"
      },
      handleEdit(index,row){
        location.href = "/createOrder/new"
      },
      handleDelete(index,row){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
