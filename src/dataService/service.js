import axios from 'axios';
import { appConfig } from '../config';

var baseUrl = appConfig.developUrl; // 服务的地址



// 请求数据函数（方式：post）
var postReq = function (url, param) {
  if (!param) {
    param = {};
  }
  return axios.post(`${baseUrl + url}`, param).then(res => res.data).catch(res => ({errcode: null, message: '处理失败'}));
}

// -- 监控界面接口  --
export const getconfig = param => { return postReq('monitor/query/getconfig', param)};
export const maintask = param => { return postReq('monitor/query/maintask', param)};




