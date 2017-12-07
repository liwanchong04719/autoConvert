import Vue from 'vue';
import router from './router';
import App from './App';


// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



