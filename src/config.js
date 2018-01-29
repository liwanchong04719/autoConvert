/**
 * @description 定义web app全局命名空间，并在此空间下定义属性和函数，以便全局使用
 * @file      config.js
 * @author    yangyanan
 * @date      2017/12/7
 */

export const appConfig = {
  appName: 'autoConvert',
  serviceUrl: 'http://localhost:8080' ,                                  // 本地开发环境
  developUrl: 'http://192.168.15.41:9999/smapapi/',             // 测试环境服务地址
  webLocation:'http://192.168.15.41:9998'                                // 测试环境web配置的存放地址
  //developUrl: 'http://192.100.2.12:9999/smapapi/',            // 正式环境的服务地址
  //webLocation:'http://192.100.2.12:9998'                               // 正式环境web配置的存放地址
}


