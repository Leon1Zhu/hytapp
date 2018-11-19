import Vue from 'vue'
import {
  Input,
  FormItem,
  Form,
  Button,
  Table,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Page,
  Select,
  Option,
  Tooltip,
  Notice,
  Checkbox,
  Icon,
} from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';
import store from './store/index';
import router from './router';
import './Interceptor/index';
import './common/css/reset.css'
import './filter'
import './common/css/style.scss'

Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Input', Input);
Vue.component('Page', Page);
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Dropdown', Dropdown);
Vue.component('DropdownMenu', DropdownMenu);
Vue.component('DropdownItem', DropdownItem);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('Tooltip', Tooltip);
Vue.component('Checkbox', Checkbox);
Vue.component('Button', Button);
Vue.component('Icon', Icon);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

Vue.prototype.$error = function (title, desc) {
  Notice.error({
    title,
    desc,
  });
};


Vue.prototype.$Notice = Notice;

