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
        <div class="taskDes">
          <span>所属日期：</span>
          <span> 20171215</span><br/>
          <span>总任务号：</span>
          <span> 32</span><br/>
          <span>数据发布：</span>
          <span> 未发布</span><br/>
          <span style="margin-left:13px">作业季：</span>
          <span> 17WIN</span><br/>
          <span style="margin-left:13px">总状态：</span>
          <span> 转换中</span><br/>
          <span>开始时间：</span>
          <span> 2017-12-15 15:23:45</span><br/>
          <span>结束时间：</span>
          <span> 2017-12-15 15:23:45</span><br/>
          <span style="margin-left:27px">耗时：</span>
          <span> 5小时10分</span><br/>

        </div>
        <el-menu-item index="4">
          <i class="el-icon-news"></i>
          <span slot="title">出品省份信息</span>
        </el-menu-item>
        <div class="taskDes">
          <div>成功省份：</div>
          <span>上海市,黑龙江省,湖南省,甘肃省,浙江省,山东省,福建省,吉林省,贵州省,四川省,云南省,天津市,陕西省,河南省,内蒙古自治区,广东省,江西省,湖北省,重庆市,安徽省,辽宁省,新疆维吾尔自治区,山西省,广西壮族自治区,海南省,河北省,江苏省
</span><br/>
          <div style="margin-top: 10px">失败省份：</div>
          <span> 湖北，福建，陕西</span><br/>
          <div style="margin-top: 10px">转换中省份：</div>
          <span> 四川省,云南省,天津市,陕西省,河南省,内蒙古自治区</span>
        </div>

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
      enter-to-class="animated zoomIn">
      <div v-if="show" class="provinceDel">
        <div class="centerBlock">
          <div class="singleProtitle">
            日出品单省转换信息
          </div>
          <div class="closeBtn" @click="show = !show">
            x
          </div>
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
            style="width: 100%; padding: 30px 30px 0px;"
          >
            <el-table-column
              prop="taskId"
              label="子任务号"
              width="80">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              width="100"
             >
            </el-table-column>
            <el-table-column
              prop="proApart"
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
    <div v-on:click="toLogin()" class="loginBtn">
      登陆
    </div>
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
        max-height: 100%;
        overflow: auto;
        background-color:#545c64;
        .taskDes{
          padding: 0px 20px;
          color:#ffffff;
          font-size:14px;
          line-height: 20px;
          color:rgb(255, 208, 75);
        }
      }
      .mapInfo {
        overflow: hidden;
        height: 100%;
        position: relative;
        .maptitle {
          position: absolute;
          z-index: 3;
          font-size: 18px;
          text-align: center;
          width: 100%;
          text-align: center;
          color: #ffffff;
          background: url(../img/monitorTitle.png) no-repeat 50% 50% ;

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
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 0px;
      top: 0px;
      .centerBlock {
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        right: 0px;
        margin: auto;
        width: 1180px;
        height: 600px;
        border-radius: 6px;
        background-color: #ffffff;
        .singleProtitle{
          font-size:18px;
          line-height: 56px;
          height: 56px;
          background-color: rgb(88, 150, 255);
          overflow: hidden;
          color: #ffffff;
          text-align: left;
          text-indent: 30px;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px
        }
        ul {
          display: flex;
          justify-content: space-between;
          padding:30px 40px 0px 40px;
          font-size: 14px;
          color:rgb(88, 150, 255);
          font-weight: 600;
        }
        .closeBtn {
          position: absolute;
          right: 20px;
          top: 17px;
          color: #ffffff;
          cursor: pointer;
          font-size: 21px;
          line-height: 1;
        }
      }
    }
  }

  .loginBtn {
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius:18px;
    background-color: #55c3fc;
    width: 130px;
    height: 35px;
    line-height: 35px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
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
