import Vue from 'vue';
import router from './router';
import App from './App';
import { Button,Select,Option,FormItem,Form,Input} from 'element-ui';
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);





// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



