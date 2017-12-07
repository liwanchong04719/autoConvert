import Vue from 'vue';
import VueRouter from 'vue-router';
import secondCom from '../components/secondCom.vue';
import firstCom from '../components/firstCom.vue';
Vue.use(VueRouter)


// 创建一个路由器实例
// 并且配置路由规则

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/first', component: firstCom},
    { path: '/second', component: secondCom}
  ]
});
