<template>
  <div class="clear">
    <div class="mapInfo">
      <div class="maptitle">
        全国出品监测
      </div>
      <div id="mapBox">

      </div>

    </div>
    <div style="float:right;width:40%">
      <div style="margin-bottom: 20px">
        <span>任务类型</span>
        <el-select v-model="value1" placeholder="日出品">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </div>
      <div>
        <span>细分类型</span>
        <el-select v-model="value2" placeholder="poi">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" round class="loginBtn">登陆</el-button>

    </div>

  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data() {
      return {
        options1: [{
          value: '选项1',
          label: '日出品'
        }, {
          value: '选项2',
          label: '月出品',
          disabled: true
        }, {
          value: '选项2',
          label: '季出品',
          disabled: true
        }],
        value1: '',
        options2: [{
          value: '选项1',
          label: 'poi'
        }, {
          value: '选项2',
          label: 'poi_road',
          disabled: true
        }],
        value2: ''
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mapBox'))
        // 绘制图表
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }


</script>

<style lang="scss" scoped>
  .loginBtn{
    width:150px;
    position: absolute;
    right: 10px;
    top:10px;
  }
  .mapInfo{
    float:left;
    width:750px;
    border:1px solid lightskyblue;
    height:600px;
    .maptitle{
      font-size: 28px;
      text-align: center;
    }
  }

</style>
