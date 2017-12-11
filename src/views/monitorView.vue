<template>
  <div class="container">
  <div class="clear content wrapper">
    <div class="mapInfo">
      <div class="maptitle">
        全国出品监测
      </div>
      <div id="map">

      </div>

    </div>
    <div style="float:right;width:35%">
      <div style="margin-bottom: 20px">
        <span style="color:#ffffff">任务类型</span>
        <el-select v-model="value1" placeholder="日出品" size="small">
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
        <span style="color:#ffffff">细分类型</span>
        <el-select v-model="value2" placeholder="poi" size="small">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
          </el-option>
        </el-select>
      </div>
      <el-button type="primary" round class="loginBtn" v-on:click="toLogin()" >登陆</el-button>
      <div style="height: 300px;width:300px;border: 1px solid lightgreen;margin:20px 0px">

      </div>
      <div style="height:270px;width:300px;border: 1px solid lightgrey;">

      </div>

    </div>

  </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import mapboxgl from 'mapbox-gl';
  import '../lib/mapbox-gl/dist/mapbox-gl.css';
  import '../lib/mapbox-gl/dist/mapbox-gl';
  import {maplayer} from '../layer.js';

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
      this.createMap()
    },
    methods: {
      createMap: function () {
        mapboxgl.mapboxToken = 'pk.eyJ1IjoiZmFuZ2xhbmsiLCJhIjoiY2lpcjc1YzQxMDA5NHZra3NpaDAyODB4eSJ9.z6uZHccXvtyVqA5zmalfGg',
        this.map = new mapboxgl.Map({
          container: 'map',
          style: maplayer.simple,
          zoom: 3.3,
          maxZoom: 4.5,
          minZoom: 3,
          center: [107.02932,  37.68486],
          repaint: true,
          pitch: 0
        })
      },
      toLogin:function () {
        this.$router.push('/login');
      }
    }
  }






</script>

<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(45,101,203,.89);
    background-image: radial-gradient(farthest-side ellipse at 10% 0,rgba(45,101,203,.8) 30%,rgba(174,180,186,.8) 76%,rgba(199,175,156,.8));
    background-image: -webkit-radial-gradient(10% 0,farthest-side ellipse,rgba(45,101,203,.8) 30%,rgba(174,180,186,.8) 76%,rgba(199,175,156,.8));
    .content{
      width: 1280px;
    }

  }

  .loginBtn{
    width:150px;
    position: absolute;
    right: 0px;
    top:0px;
  }
  .mapInfo{
    float:left;
    width:800px;
    height:700px;
    .maptitle{
      color:#ffffff;
      font-size: 28px;
      text-align: center;
      margin-bottom: 20px;
    }
    #map{
      width: 800px;
      height:630px;
    }
  }

</style>
