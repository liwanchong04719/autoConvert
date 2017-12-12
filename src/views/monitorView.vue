<template>
  <div class="container">
  <div class="content">
    <div class="leftMenu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>任务类型</span>
          </template>
            <el-menu-item index="1-1">日出品</el-menu-item>
            <el-menu-item index="1-2">月出品</el-menu-item>
            <el-menu-item index="1-3">季出品</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>细分类型</span>
          </template>
            <el-menu-item index="2-1">poi</el-menu-item>
            <el-menu-item index="2-2">poi_road</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">出品任务概述</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-news"></i>
          <span slot="title">出品省份信息</span>
        </el-menu-item>
        <el-collapse accordion>
          <el-collapse-item title="反馈 Feedback">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-menu>
    </div>
    <div class="mapInfo">
      <div class="maptitle">
        全国出品监测
      </div>
      <div id="map">

      </div>

    </div>
  </div>
    <button @click="show = !show">
      Toggle render
    </button>
    <transition
      name="custom-classes-transition"
      enter-act>
    <div"animated bounceIn"
    >
      <div v-if="show" class="provinceDel">
        <div class="centerBlock">
          <div class="closeBtn" @click="show = !show">
            <img src="../img/light_close.png" alt="">
          </div>
          <div style="font-size:26px;margin-bottom: 30px;">日出品单省转换信息</div>
          <ul>
            <li>
              <span>省份：</span>
              <span>陕西省</span>
            </li>
            <li>
              <span>总状态：</span>
              <span>转换中</span>
            </li>
            <li>
              <span>所属日期：</span>
              <span>2017-12-12</span>
            </li>
            <li>
              <span>开始时间：</span>
              <span>2012-12-11 12:23:24</span>
            </li>
            <li>
              <span>结束时间：</span>
              <span>2012-12-11 12:23:24</span>
            </li>
          </ul>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="taskId"
              label="子任务号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
             >
            </el-table-column>
            <el-table-column
              prop="proApart"
              width="90"
              label="省份（份）">
            </el-table-column>
            <el-table-column
              prop="program"
              label="程序">
            </el-table-column>
            <el-table-column
              prop="stage"
              label="阶段">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态">
            </el-table-column>
            <el-table-column
              prop="repeatTimes"
              label="重转次数">
            </el-table-column>
            <el-table-column
              prop="startTime"
              width="160"
              label="开始时间">
            </el-table-column>
            <el-table-column
              prop="endTime"
              width="160"
              label="结束时间">
            </el-table-column>
            <el-table-column
              prop="spendtime"
              width="120"
              label="耗时（小时）">
            </el-table-column>
            <el-table-column
              prop="logfile"
              label="log文件">
            </el-table-column>
          </el-table>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type='text/ecmascript-6'>
  import mapboxgl from 'mapbox-gl';
  import '../lib/mapbox-gl/dist/mapbox-gl.css';
  import '../lib/mapbox-gl/dist/mapbox-gl';
  import {maplayer} from '../layer.js';
  import '../lib/animate.css';

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
        value2: '',
        tableData: [{
          taskId: '2016',
          province: '四川省',
          proApart: '四川1',
          program: 'idb_conv',
          stage: 'day',
          state: '成功',
          repeatTimes: '0',
          startTime: '2017-12-12 16:20:09',
          endTime: '2017-12-12 16:20:09',
          spendtime: '12.9',
          logfile: '11111'
        }, {
          taskId: '2016',
          province: '四川省',
          proApart: '四川1',
          program: 'idb_conv',
          stage: 'day',
          state: '成功',
          repeatTimes: '0',
          startTime: '2017-12-12 16:20:09',
          endTime: '2017-12-12 16:20:09',
          spendtime: '12.9',
          logfile: '11111'
        },{
          taskId: '2016',
          province: '四川省',
          proApart: '四川1',
          program: 'idb_conv',
          stage: 'day',
          state: '成功',
          repeatTimes: '0',
          startTime: '2017-12-12 16:20:09',
          endTime: '2017-12-12 16:20:09',
          spendtime: '12.9',
          logfile: '11111'
        },{
          taskId: '2016',
          province: '四川省',
          proApart: '四川1',
          program: 'idb_conv',
          stage: 'day',
          state: '成功',
          repeatTimes: '0',
          startTime: '2017-12-12 16:20:09',
          endTime: '2017-12-12 16:20:09',
          spendtime: '12.9',
          logfile: '11111'
        }],
        show:false
      }
    },
    mounted() {
      this.createMap()
    },
    methods: {
      createMap: function () {
        mapboxgl.mapboxToken = 'pk.eyJ1IjoiZmFuZ2xhbmsiLCJhIjoiY2lpcjc1YzQxMDA5NHZra3NpaDAyODB4eSJ9.z6uZHccXvtyVqA5zmalfGg',
        this.map = new mapboxgl.Map({
          container: 'map',
          style: maplayer.simple,
          zoom: 3.8,
          maxZoom: 4.5,
          minZoom: 3,
          center: [107.02932,  37.68486],
          repaint: true,
          pitch: 0
        })
      },
      toLogin:function () {
        this.$router.push('/login');
      },
      handleOpen(key, keyPath) {
//        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
//        console.log(key, keyPath);
      }
    }
  }






</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    .content {
      height: 100%;
      .leftMenu {
        width: 260px;
        float: left;
        height: 100%;
      }
      .mapInfo {
        overflow: hidden;
        height: 100%;
        position: relative;
        .maptitle {
          position: absolute;
          z-index: 3;
          font-size: 30px;
          text-align: center;
          margin-top: 30px;
          width: 100%;
          text-align: center;
          color: #1DA1F2;

        }
        #map {
          width: 100%;
          height: 100%;
        }
      }
    }
    .provinceDel {
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.7);
      position: absolute;
      left: 0px;
      top: 0px;
      text-align: center;
      .centerBlock {
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto;
        width: 1180px;
        height: 600px;
        ul {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          color: #e66a98;
        }
        .closeBtn {
          position: absolute;
          right: -20px;
          top: -20px;
          cursor: pointer;
        }
      }
    }
  }

  .loginBtn {
    width: 150px;
    position: absolute;
    right: 0px;
    top: 0px;
  }


  .el-menu-item-group_title {
    padding: 0px;
    line-height: normal;
    font-size: 12px;
    color: #878d99;
  }
  .el-menu {
    border: none;
  }


</style>
