import Vue from 'vue';
import VueRouter from 'vue-router';
import loginView from '../views/loginView.vue';
import menuView from '../views/menuView.vue';
import monitorView from '../views/monitorView.vue';
import taskReload from '../views/taskReload.vue';
import taskRerun from '../views/taskRerun.vue';
import dataRecover from '../views/dataRecover.vue';
Vue.use(VueRouter)


// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/monitor',
      component: monitorView
    },
    //重定向:使首次进入页面显示monitorView
    {
      path: '/',
      redirect: '/monitor'
    },
    {
      path: '/login',
      component: loginView
    },
    {
      path: '/menu',
      component: menuView
    },
    {
      path: '/taskReload',
      component: taskReload
    },
    {
      path: '/taskRerun',
      component: taskRerun
    },
    {
      path: '/dataRecover',
      component: dataRecover
    }

  ]
});
