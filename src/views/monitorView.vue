<template>
  <div class="container">
    <div class="content">
      <div class="leftMenu">
        <div>
          <span>任务类型：</span>
          <el-select v-model="typeVal" placeholder="请选择" size="small" style="width: 130px" @change="selectTasktype">
            <el-option
              v-for="item in taskType"
              :key="item.versionValue"
              :label="item.label"
              :value="item.versionValue">
            </el-option>
          </el-select>
        </div>
        <div style="margin-top: 20px">
          <span>细分类型：</span>
          <el-select v-model="detailsVal" placeholder="请选择" size="small" style="width: 130px" @change="selectDetail">
            <el-option
              v-for="one in detailsType"
              :key="one.configValue"
              :label="one.label"
              :value="one.configValue">
            </el-option>
          </el-select>
        </div>
        <div class="taskTitle">出品任务概述</div>
        <div class="taskDes">
          <span>所属日期：</span>
          <span> {{belongDay}}</span><br/>
          <span>总任务号：</span>
          <span> {{convListId}}</span><br/>
          <span>数据发布：</span>
          <span> {{releaseFlag}}</span><br/>
          <span style="margin-left:13px">作业季：</span>
          <span> {{convVersion}}</span><br/>
          <span style="margin-left:13px">总状态：</span>
          <span> {{status}}</span><br/>
          <span>开始时间：</span>
          <span> {{beginTime}}</span><br/>
          <span>结束时间：</span>
          <span> {{endTime}}</span><br/>
          <span style="margin-left:27px">耗时：</span>
          <span> {{consumTime}}</span><br/>
        </div>
        <div class="taskTitle" style="margin-top: 20px">出品执行情况</div>
        <div class="provinceClass">
          <span v-for="(item,index) in provinceList">
            {{item}}
          </span>
        </div>
        <ul class="successPro">
          <li @click="showDetails(item)" v-for="item in successList">{{item}}</li>
        </ul>
        <ul class="failPro">
          <li @click="showDetails(item)" v-for="item in failList">{{item}}</li>
        </ul>
        <ul class="runningPro">
          <li @click="showDetails(item)" v-for="item in runningList">{{item}}</li>
        </ul>

      </div>
      <div class="mapInfo">
        <div class="maptitle">
          <img src="../img/icon_line1.png" alt="" style="margin-top: 10px">
          <span style="margin-left: -20px">全国出品监测</span>
          <img src="../img/icon_line2.png" alt="" style="margin-bottom:-15px">
        </div>
        <div id="map">

        </div>
      </div>
    </div>
    <transition
      name="bounce"
    >
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
              <span>{{singleProvince}}</span>
            </li>
            <li>
              <span>总状态：</span>
              <span>{{singleState}}</span>
            </li>
            <li>
              <span>所属日期：</span>
              <span>{{singleDate}}</span>
            </li>
            <li>
              <span>开始时间：</span>
              <span>{{singleBegintime}}</span>
            </li>
            <li>
              <span>结束时间：</span>
              <span>{{singleEndtime}}</span>
            </li>
          </ul>
          <div class="selectOption">
            <span class="demonstration">程序</span>
            <el-select v-model="programVal" placeholder="请选择" size="small" @change="programSelect">
              <el-option
                v-for="item in programArr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                size="small"
              >
              </el-option>
            </el-select>
            <span class="demonstration">阶段</span>
            <el-select v-model="stageVal" placeholder="请选择" size="small" @change="stageSelect">
              <el-option
                v-for="item in stageArr"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="demonstration">状态</span>
            <el-select v-model="stateVal" placeholder="请选择" size="small" @change="stateSelect">
              <el-option
                v-for="item in states"
                :key="item.statusValue"
                :value="item.statusValue">
              </el-option>
            </el-select>
          </div>
          <el-table
            :data="tableData"
            style="width: 1126px; overflow: auto;margin: 20px 25px 0px"
            height="380"
          >
            <el-table-column
              prop="convListDetailRuntimeId"
              label="子任务号"
              width="78"
            >
            </el-table-column>
            <el-table-column
              prop="provinceNM"
              label="省份"
              width="80"
            >
            </el-table-column>
            <el-table-column
              prop="provinceNMNosep"
              label="省份（份）"
              width="90">
            </el-table-column>
            <el-table-column
              prop="programCode"
              width="110"
              label="程序">
            </el-table-column>
            <el-table-column
              prop="convStep"
              width="80"
              label="阶段">
            </el-table-column>
            <el-table-column
              prop="status"
              width="62"
              label="状态">
            </el-table-column>
            <el-table-column
              prop="reconvert"
              width="90"
              label="重转次数">
            </el-table-column>
            <el-table-column
              prop="beginTime"
              width="170"
              label="开始时间">
            </el-table-column>
            <el-table-column
              prop="endTime"
              width="170"
              label="结束时间">
            </el-table-column>
            <el-table-column
              prop="consumTime"
              width="90"
              label="耗时">
            </el-table-column>
            <el-table-column
              width="100"
              label="log文件">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="loadLogfile(scope.$index, tableData)"
                  type="primary"
                  size="mini"
                  icon="el-icon-download"
                >
                  下载
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </transition>
    <div @click="toLogin()" class="loginBtn">
      <span class="loginbg" v-html="loginVal"></span>
      <img src="../img/border.png" alt="" style="vertical-align: middle">
    </div>
    <div class="stateMark">
      <div style="text-align: center;margin-bottom: 10px">转换状态</div>
      <div>
        <span></span>
        <i>成功</i>
      </div>
      <div>
        <span v-bgcolor="'#67ba2f'"></span>
        <i>转换中</i>
      </div>
      <div>
        <span v-bgcolor="'#ffae45'"></span>
        <i>失败</i>
      </div>
      <div>
        <span v-bgcolor="'#36aeea'"></span>
        <i>未开始</i>
      </div>
      <div>
        <span v-bgcolor="'#CDE5FD'"></span>
        <i>废弃</i>
      </div>
    </div>
    <div class="changeMap">
      <el-checkbox v-model="checked" @change="changeMesh">图幅</el-checkbox>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import {maplayer} from '../layer.js';
  import {
    getconfig,
    getMaintask,
    getSubconfig,
    getProvincestatus,
    getSubstatus,
    getSubinfo
  } from '../dataService/service';

  export default {
    data() {
      return {
        loginVal: '登陆',
        configName: '',
        versionType: '',
        belongDay: '',
        consumTime: '',
        convListId: '',
        convVersion: '',
        belongDay: '',
        beginTime: '',
        endTime: '',
        releaseFlag: '',
        status: '',
        provinceList: ['成功省份', '失败省份', '转换中'],
        successList: [],
        failList:[],
        runningList:[],
        states: [],
        programArr: [],
        stageArr: [],
        programCollection: [],
        curIndex: 0,
        typeVal: '',
        detailsVal: '',
        provinceCur: '',
        programVal: '',
        stageVal: '',
        stateVal: '',
        stateCode: '',
        taskType: [],
        detailsType: [],
        tableData: [],
        singleProvince:'',
        singleState:'',
        singleBegintime:'',
        singleEndtime:'',
        singleDate:'',
        show: false,
        checked:false

      }
    },
    mounted: function () {
      this.initConfig()
      this.createMap()
    },
    methods: {
      //初始化请求服务
      initConfig: function () {
        if (localStorage.getItem('user')) {
          this.loginVal = '退出登陆'
        }
        if (this.loginVal == '退出登陆') {
          localStorage.clear();
          this.loginVal = '登陆';
        }
        getconfig().then((data) => {
          this.detailsType = data.configName;
          this.taskType = data.versionType;
          this.typeVal = data.versionType[0].versionValue;
          this.detailsVal = data.configName[0].configValue;
          this.configName = data.configName[0].configKey;
          this.versionType = data.versionType[0].versionKey;
          let param = `configName=${this.configName}&versionType=${this.versionType}`;
          //this.changeType(param);
            getMaintask(param).then((data) => {
              this.beginTime = data.beginTime;
              this.belongDay = data.belongDay;
              this.consumTime = data.consumTime;
              this.convListId = data.convListId;
              this.convVersion = data.convVersion;
              this.endTime = data.endTime;
              this.releaseFlag = data.releaseFlag;
              this.status = data.status;
              getProvincestatus(`convListId=${this.convListId}`).then((data) => {
                this.successList = [];
                this.failList = [];
                this.runningList = [];
                if(data) {
                  if (data.success.length > 0) {
                    for (let i = 0; i < data.success.length; i++) {
                      this.successList.push(data.success[i]);
                    }
                  }
                  if (data.failed.length > 0) {
                    for (let i = 0; i < data.failed.length; i++) {
                      this.failList.push(data.failed[i]);
                    }
                  }
                  if (data.running.length > 0) {
                    for (let i = 0; i < data.running.length; i++) {
                      this.runningList.push(data.running[i]);
                    }
                  }
                }
              })
            })
        })

        //获取单省转换信息初始化的程序选项
        getSubconfig().then((data) => {
          for(let i in data.allstep){
            this.stageArr.push({
              value: data.allstep[i]
            })
          }
          this.stageArr.unshift({value: '全部'});
          this.states = data.status;
          this.states.unshift({"statusValue":"全部"});
          this.programCollection = data.programCode;        //获取所有程序及对应的状态集合，用于选择程序时联动查找对应状态
          for (let i = 0; i < data.programCode.length; i++) {
            for (let key in data.programCode[i]) {
              this.programArr.push({
                value: key
              })
            }
          }
          this.programArr.unshift({
            value: '全部'
          })
        })
      },
      createMap: function () {
        mapboxgl.mapboxToken = 'pk.eyJ1IjoiZmFuZ2xhbmsiLCJhIjoiY2lpcjc1YzQxMDA5NHZra3NpaDAyODB4eSJ9.z6uZHccXvtyVqA5zmalfGg',
          this.map = new mapboxgl.Map({
            container: 'map',
            style: maplayer.simple,
            zoom: 3.8,
            center: [107.02932, 37.68486],
//          scrollZoom:false,
            repaint: true,
            pitch: 0
          })

        let that = this;                               //保存this指针的指向：指向vue实例-VueCompents
        this.map.on('load', function () {
          let mapParam= that.convListId;
          that.mapOperate(mapParam);
        })
      },
      mapOperate:function(param){
        if(this.map.getSource('ProvincialRegion')){
          this.map.removeSource('ProvincialRegion');
        }
        this.map.addSource('ProvincialRegion', {
          "tiles": [
            "http://192.168.15.41:9999/smapapi/automate/monitor/pbf/outline/{z}/{x}/{y}?convListId="+param
          ],
          "type": "vector"
        })

        var provinceSuccesslayer={
          id: 'ProvincialRegion_success',
            type: 'fill',
          interactive: true,
          "source" : "ProvincialRegion",
          'source-layer': 'outarea',
          "layout": {
          "visibility": "visible"
        },
          "paint": {
            "fill-color": "#ff7474",
            'fill-outline-color': '#ffffff'
        },
          "filter": ["==", "status", "1" ]
        };

        var provinceFaillayer={
          id: 'ProvincialRegion_fail',
            type: 'fill',
          interactive: true,
          "source" : "ProvincialRegion",
          'source-layer': 'outarea',
          "layout": {
          "visibility": "visible"
        },
          "paint": {
          "fill-color": "#ffae45",
            'fill-outline-color': '#ffffff'
        },
          "filter": ["==", "status", "0" ]
        };

        var provinceRunninglayer= {
          id: 'ProvincialRegion_running',
            type: 'fill',
          interactive: true,
          "source" : "ProvincialRegion",
          'source-layer': 'outarea',
          "layout": {
          "visibility": "visible"
        },
          "paint": {
          "fill-color": "#67ba2f",
        },
          "filter": ["==", "status", "2" ]
        }

        var provinceUnrunlayer={
          id: 'ProvincialRegion_unrun',
            type: 'fill',
            interactive: true,
            "source" : "ProvincialRegion",
            'source-layer': 'outarea',
            "layout": {
            "visibility": "visible"
          },
          "paint": {
            "fill-color": "#36aeea",
            'fill-outline-color': '#ffffff'
          },
          "filter": ["==", "status", "3" ]
        };

        var provinceAbandonlayer={
          id: 'ProvincialRegion_abandon',
            type: 'fill',
            interactive: true,
            "source" : "ProvincialRegion",
            'source-layer': 'outarea',
            "layout": {
            "visibility": "visible"
          },
          "paint": {
            "fill-color": "#CDE5FD",
            'fill-outline-color': '#ffffff'
          },
          "filter": ["==", "status", "4" ]
        };

        this.map.removeLayer('ProvincialRegion_fail');
        this.map.removeLayer('ProvincialRegion_success');
        this.map.removeLayer('ProvincialRegion_running');
        this.map.removeLayer('ProvincialRegion_unrun');
        this.map.removeLayer('ProvincialRegion_abondon');
        this.map.addLayer(provinceSuccesslayer);
        this.map.addLayer(provinceFaillayer);
        this.map.addLayer(provinceRunninglayer);
        this.map.addLayer(provinceUnrunlayer);
        this.map.addLayer(provinceAbandonlayer);

        let that=this;
        this.popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        });

        this.map.on('click', 'ProvincialRegion_fail', function (e) {
          let provincename_click = e.features[0].properties.provinceName;
          that.show = true;
          let paramclick = `provinceName=${provincename_click}&convListId=${that.convListId}`;
          getSubstatus(paramclick).then((data) => {
            that.singleProvince = data.provinceNMNosep;
            that.singleState = data.status;
            that.singleBegintime = data.beginTime;
            that.singleEndtime = data.endTime;
            that.singleDate = data.belongDay;
          })
          getSubinfo(paramclick).then((data) => {
            that.tableData = data;
          })
        });

        this.map.on('click', 'ProvincialRegion_success', function (e) {
          let provincename_click = e.features[0].properties.provinceName;
          that.show = true;
          let paramclick = `provinceName=${provincename_click}&convListId=${that.convListId}`;
          getSubstatus(paramclick).then((data) => {
            that.singleProvince = data.provinceNMNosep;
            that.singleState = data.status;
            that.singleBegintime = data.beginTime;
            that.singleEndtime = data.endTime;
            that.singleDate = data.belongDay;
          })
          getSubinfo(paramclick).then((data) => {
            that.tableData = data;
          })
        });

        this.map.on('click', 'ProvincialRegion_running', function (e) {
          let provincename_click = e.features[0].properties.provinceName;
          that.show = true;
          let paramclick = `provinceName=${provincename_click}&convListId=${that.convListId}`;
          getSubstatus(paramclick).then((data) => {
            that.singleProvince = data.provinceNMNosep;
            that.singleState = data.status;
            that.singleBegintime = data.beginTime;
            that.singleEndtime = data.endTime;
            that.singleDate = data.belongDay;
          })
          getSubinfo(paramclick).then((data) => {
            that.tableData = data;
          })
        });

        this.map.on('mouseenter', 'ProvincialRegion_success', function (e) {
          that.map.getCanvas().style.cursor = 'pointer';
          let lng = e.lngLat.lng;
          let lat = e.lngLat.lat;
          let div = window.document.createElement('div');
          div.innerHTML = '<div class="feePopDeep">转换状态：'+e.features[0].properties.percent+'</div>'
            + '<div  class="tipPopDeep"></div>';
          that.popup.setLngLat([lng,lat])
            .setDOMContent(div)
            .addTo(that.map);
        });

        this.map.on('mouseleave', 'ProvincialRegion_success', function () {
          that.map.getCanvas().style.cursor = '';
          that.popup.remove();
        });

        this.map.on('mouseenter', 'ProvincialRegion_fail', function (e) {
          that.map.getCanvas().style.cursor = 'pointer';
          let lng = e.lngLat.lng;
          let lat = e.lngLat.lat;
          let div = window.document.createElement('div');
          div.innerHTML = '<div class="feePopDeep">转换状态：'+e.features[0].properties.percent+'</div>'
            + '<div  class="tipPopDeep"></div>';
          that.popup.setLngLat([lng,lat])
            .setDOMContent(div)
            .addTo(that.map);
        });

        this.map.on('mouseleave', 'ProvincialRegion_fail', function () {
          that.map.getCanvas().style.cursor = '';
          that.popup.remove();
        });

        this.map.on('mouseenter', 'ProvincialRegion_running', function (e) {
          that.map.getCanvas().style.cursor = 'pointer';
          let lng = e.lngLat.lng;
          let lat = e.lngLat.lat;
          let div = window.document.createElement('div');
          div.innerHTML = '<div class="feePopDeep">转换状态：'+e.features[0].properties.percent+'</div>'
            + '<div  class="tipPopDeep"></div>';
          that.popup.setLngLat([lng,lat])
            .setDOMContent(div)
            .addTo(that.map);
        });

        this.map.on('mouseleave', 'ProvincialRegion_running', function () {
          that.map.getCanvas().style.cursor = '';
          that.popup.remove();
        });



      },
      toLogin: function () {
        this.$router.push('/login');
      },
      changeType: function (typeparam) {               //taskType,detailsType改变时调用
        getMaintask(typeparam).then((data) => {
          this.beginTime = data.beginTime;
          this.belongDay = data.belongDay;
          this.consumTime = data.consumTime;
          this.convListId = data.convListId;
          this.convVersion = data.convVersion;
          this.endTime = data.endTime;
          this.releaseFlag = data.releaseFlag;
          this.status = data.status;
          getProvincestatus(`convListId=${this.convListId}`).then((data) => {
            this.successList = [];
            this.failList = [];
            this.runningList = [];
            if(data) {
              if (data.success.length > 0) {
                for (let i = 0; i < data.success.length; i++) {
                  this.successList.push(data.success[i]);
                }
              }
              if (data.failed.length > 0) {
                for (let i = 0; i < data.failed.length; i++) {
                  this.failList.push(data.failed[i]);
                }
              }
              if (data.running.length > 0) {
                for (let i = 0; i < data.running.length; i++) {
                  this.runningList.push(data.running[i]);
                }
              }
            }
          })
          console.log(this.convListId);
          this.mapOperate(this.convListId);
        })
      },
      changeOption: function (param) {              //改变选项时调用
        getSubinfo(param).then((data) => {
          this.tableData = data;
        })
      },
      showDetails: function (provinceName) {
        this.show = true;
        console.log(provinceName);
        this.provinceCur = provinceName;
        this.programVal = '全部';
        this.stageVal = '全部' ;
        this.stateVal = '全部';
        //展示不同省份的转换信息
        console.log(this.convListId);
        let param = `provinceName=${provinceName}&convListId=${this.convListId}`;
        getSubstatus(param).then((data) => {
          this.singleProvince = data.provinceNMNosep;
          this.singleState = data.status;
          this.singleBegintime = data.beginTime;
          this.singleEndtime = data.endTime;
          this.singleDate = data.belongDay;
        })
        getSubinfo(param).then((data) => {
          this.tableData = data;
        })
      },
      changeMesh(param){
        console.log(param)
        var visibility = this.map.getLayoutProperty('mapblock_layer', 'visibility');
        if (visibility === 'visible') {
          this.map.setLayoutProperty('mapblock_layer', 'visibility', 'none');
        } else {
          this.map.setLayoutProperty('mapblock_layer', 'visibility', 'visible');
        }

      },
      selectDetail(param) {
        let spr = {};
        spr = this.detailsType.find((item) => {
          return item.configValue === param
        })
        this.configName = spr.configKey;
        let typeparam = `configName=${this.configName}&versionType=${this.versionType}`;
        this.changeType(typeparam);
      },
      selectTasktype(param) {
        let obj = {};
        obj = this.taskType.find((item) => {
          return item.versionValue === param;
        });
        this.versionType = obj.versionKey;
        let typeparam = `configName=${this.configName}&versionType=${this.versionType}`;
        this.changeType(typeparam);
      },
      programSelect(param) {
        this.stageArr.splice(1, this.stageArr.length);
        this.stageVal = '全部';
        //获取单省转换信息初始化的"阶段"选项
        if(param === '全部'){
          getSubconfig().then((data) => {
            for (let i in data.allstep) {
              this.stageArr.push({
                value: data.allstep[i]
              })
            }
          })
        }else {
          for (let key in this.programCollection) {
            if (Object.keys(this.programCollection[key]) == param) {
              for (let s in this.programCollection[key][param]) {
                this.stageArr.push({
                  value: this.programCollection[key][param][s]
                })
              }
              break;
            }
          }
        }

        //处理三个参数组合的情况
        let paramArr = [{programCode:this.programVal},{step:this.stageVal},{status:this.stateCode}];
        let combineStr = '';
        paramArr.forEach(function(el){
          for(let index in el){
            if(el[index] != '全部'){
              combineStr = combineStr + index +'='+el[index]+'&';
            }
          }
        })

        if(combineStr.indexOf('status=&')>-1){
          combineStr = combineStr.replace(/status=&/g,'');
        }else{
          combineStr = combineStr.slice(0,combineStr.length-1);
        }

        let multi = `provinceName=${this.provinceCur}&convListId=${this.convListId}&${combineStr}`;
        this.changeOption(multi);
      },
      stageSelect() {
        //处理三个参数组合的情况
        let paramArr = [{programCode:this.programVal},{step:this.stageVal},{status:this.stateCode}];
        let combineStr = '';
        paramArr.forEach(function(el){
          for(let index in el){
            if(el[index] != '全部'){
              combineStr = combineStr + index +'='+el[index]+'&';
            }
          }
        })

        if(combineStr.indexOf('status=&')>-1){
          combineStr = combineStr.replace(/status=&/g,'');
        }else{
          combineStr = combineStr.slice(0,combineStr.length-1);
        }

        let multi = `provinceName=${this.provinceCur}&convListId=${this.convListId}&${combineStr}`;
        this.changeOption(multi);

      },
      stateSelect(param) {
        let obj = {};
        obj = this.states.find((item) => {
          return item.statusValue === param;
        });
        this.stateCode = obj.statusCode;
        if(param === '全部'){
          this.stateCode = '';
        }

        //处理三个参数组合的情况
        let paramArr = [{programCode:this.programVal},{step:this.stageVal},{status:this.stateCode}];
        let combineStr = '';
        paramArr.forEach(function(el){
          for(let index in el){
            if(el[index] != '全部'){
              combineStr = combineStr + index +'='+el[index]+'&';
            }
          }
        })

        if(combineStr.indexOf('status=&')>-1){
          combineStr = combineStr.replace(/status=&/g,'');
        }else{
          combineStr = combineStr.slice(0,combineStr.length-1);
        }

        let multi = `provinceName=${this.provinceCur}&convListId=${this.convListId}&${combineStr}`;
        this.changeOption(multi);

      },
      loadLogfile(index,rows){
        let logpath = rows[index].logPath;                       //加上服务器地址,修改判断
        console.log('logpath:'+logpath);
        window.location.href = 'http://192.168.15.41:9988/3337/idb_conv/Convert/Bin/convert.log';
        window.event.returnValue = false;
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
          background-color: rgb(67, 77, 107);
          padding: 20px;
          font-size: 14px;
          color: #ffffff;
        .taskTitle {
          background: url(../img/monitorTitle.png) no-repeat center;
          background-size: 220px 100%;
          font-size: 16px;
          line-height: 30px;
          color: #47CDF5;
          text-align: center;
          margin: 30px 0px 20px;
          font-weight: 600;
        }
    .taskDes {
      line-height: 20px;
    }
    .provinceClass {
      line-height: 30px;
      color: #47CDF5;
      margin-bottom: 10px;
      text-align: center;
    span {
      cursor: pointer;
      text-align: center;
      display: inline-block;
      width:70px;
    }
  }
    ul{
      float: left;
      width:70px;
      min-height:100px;
      li {
        line-height: 30px;
        /*border-bottom: 1px solid #577398;*/
        text-align: center;
         &:hover {
        color: #47CDF5;
        cursor: pointer;
        }
     } }
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
      color: #47CDF5;
      height: 80px;
      line-height: 80px;
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
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 10;
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
    .singleProtitle {
      font-size: 18px;
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
      padding: 30px 40px 0px 40px;
      font-size: 14px;
      color: rgb(88, 150, 255);
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
    right: 0px;
    top: 5px;
    z-index: 5;
    color: #ffffff;
    font-size: 14px;
  .loginbg {
    display: inline-block;
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background: url('../img/monitorlogin.png') no-repeat center;
    cursor: pointer;
      &:hover {
          background-image: url('../img/monitorlogin_active.png')
      }
    }
  }
  .stateMark{
    position: absolute;
    right: 10px;
    bottom:10px;
    padding: 5px;
    width: 140px;
    opacity: 0.9;
    font-size:14px;
    border-radius: 10px;
    border: 2px solid #656c7c;
    color: #ffffff;
    background-color: rgba(9,13,25,.8);
    span{
      display: inline-block;
      line-height: 20px;
      height: 20px;
      vertical-align: middle;
      background-color: #ff7474;
      width: 40px;
      margin: 5px 15px 5px 10px;
    }
    i{
      font-size: 12px;
    }
  }
  .changeMap{
    position: absolute;
    left:195px;
    top:110px;
    color: #ffffff;
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

  .selectOption {
    padding: 30px 40px 0px;
    .demonstration {
      font-size: 14px;
      color: #3399ff;
    }
  }

  .activePro {
    border-bottom: 3px solid #47CDF5;
  }

  .bounce-enter-active {
    animation: bounce-in 0.7s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
   .tipPopDeep{
    width: 0;
    height: 0;
    margin: 0 auto;
    border-width:8px 6px 0;
    border-style:solid ;
    border-color:rgba(0,0,0,0.3) transparent transparent;
  }

   .feePopDeep{
    margin: 0;
    padding:0px 10px;
    width: 210px;
    color: #ffffff;
    font-size: 12px;
    text-align: left;
    background-color: rgba(0,0,0,0.3);
    line-height: 30px;
  }


</style>
