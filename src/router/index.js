import Vue from 'vue';
import VueRouter from 'vue-router';
import loginView from '../views/loginView.vue';
import menuView from '../views/menuView.vue';
import monitorView from '../views/monitorView.vue';
import recodeView from '../views/recodeView.vue';
import retaskView from '../views/retaskView.vue';
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
      path: '/recode',
      component: recodeView
    },
    {
      path: '/retask',
      component: retaskView
    }

  ]
});
