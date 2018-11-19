import Vue from 'vue';
import App from './App';
import store from './store/index';
import router from './router';
import Iview from 'iview';
import 'iview/dist/styles/iview.css';
import './Interceptor/index';
import './common/css/reset.css'
import './common/css/resetIview.scss'
import './filter'
import './common/css/style.scss'


Vue.use(Iview);
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
  Iview.Notice.error({
    title,
    desc,
  });
};

Vue.prototype.ISNULL = function(val) {
  if(val===null || val === undefined || val ==="" || val.length===0 )return true;
  else return false;
};


