<template>
  <div class="clear">
    <div class="mapInfo">
      <div class="maptitle">
        全国出品监测
      </div>
      <div id="map">

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
      <el-button type="primary" round class="loginBtn" v-on:click="toLogin()" >登陆</el-button>

    </div>

  </div>
</template>
<script type='text/ecmascript-6'>
  import mapboxgl from 'mapbox-gl';
  import '../lib/mapbox-gl/dist/mapbox-gl.css';
  import '../lib/mapbox-gl/dist/mapbox-gl';
  import {maplayer} from '../layer.js';
  console.dir(mapboxgl);

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
          zoom: 4,
          center: [108.94704, 34.25943],
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
  .loginBtn{
    width:150px;
    position: absolute;
    right: 10px;
    top:10px;
  }
  .mapInfo{
    float:left;
    width:900px;
    border:1px solid lightskyblue;
    height:600px;
    .maptitle{
      font-size: 28px;
      text-align: center;
    }
    #map{
      width: 900px;
      height:550px;
    }
  }

</style>
