import axios from 'axios';
import { appConfig } from '../config';

var baseUrl = appConfig.developUrl; // 服务的地址

// 请求数据函数（方式：post）
var postReq = function (url, param) {
  if (!param) {
    param = {};
  }
  return axios.post(`${baseUrl + url}`, param).then(res => res.data.data).catch(res => ({errcode: null, message: '处理失败'}));
}

// 请求数据仅返回状态码（方式：post）
var postWhReq = function (url, param) {
  if (!param) {
    param = {};
  }
  return axios.post(`${baseUrl + url}`, param).then(res => res.data).catch(res => ({errcode: null, message: '处理失败'}));
}

// -- 监控界面接口  --
export const getconfig = param => { return postReq('automate/monitor/query/getconfig', param);}
export const getMaintask = param => { return postReq('automate/monitor/query/maintask', param);}
export const getProvincestatus =  param =>{ return postReq('automate/monitor/query/provincestatus', param);}
export const getSubstatus =  param =>{ return postReq('automate/monitor/query/substatus', param);}
export const getSubconfig =  param =>{ return postReq('automate/monitor/query/subconfig', param);}
export const getSubinfo =  param =>{ return postReq('automate/monitor/query/subinfo', param);}
export const getConfigId =  param =>{ return postReq('automate/monitor/query/getconfigId', param);}

// -- 管理界面接口  --
export const dataRecover =  param =>{ return postReq('automate/manage/datarecover', param);}

// -- 管理界面wh接口  --
export const taskReload =  param =>{ return postWhReq('wh/conv/program/reload', param);}
export const taskRerun =  param =>{ return postWhReq('wh/conv/day/run_nodes', param);}
export const restore =  param =>{ return postWhReq('wh/conv/restore', param);}
export const taskdiscard =  param =>{ return postWhReq('wh/conv/taskdiscard', param);}
export const dataSync =  param =>{ return postWhReq('wh/conv/day/label', param);}





