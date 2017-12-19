import Vue from "vue";
import router from './router';
import App from './App';
import {
  Button,
  Select,
  Option,
  FormItem,
  Form,
  Input,
  Table,
  TableColumn,
  Menu,
  MenuItem,
  Submenu,
  Row,
  Collapse,
  CollapseItem,
  Checkbox,
  DatePicker,
  Pagination
} from 'element-ui';

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Row);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Checkbox);
Vue.use(DatePicker);
Vue.use(Pagination);

// 创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上

 new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



