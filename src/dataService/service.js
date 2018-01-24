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

// -- 监控界面接口  --
export const getconfig = param => { return postReq('monitor/query/getconfig', param);}
export const getMaintask = param => { return postReq('monitor/query/maintask', param);}
export const getProvincestatus =  param =>{ return postReq('monitor/query/provincestatus', param);}
export const getSubstatus =  param =>{ return postReq('monitor/query/substatus', param);}
export const getSubconfig =  param =>{ return postReq('monitor/query/subconfig', param);}
export const getSubinfo =  param =>{ return postReq('monitor/query/subinfo', param);}
export const getConfigId =  param =>{ return postReq('monitor/query/getconfigId', param);}

// -- 管理界面接口  --
export const dataRecover =  param =>{ return postReq('manage/datarecover', param);}





