import Vue from 'vue';
import App from './App';
import store from './store/index';
import router from './router';
import Iview from 'iview';
import aesjs from 'aes-js';
import 'iview/dist/styles/iview.css';
import './Interceptor/index';
import './common/css/reset.css';
import './common/css/resetIview.scss';
import './filter';
import './common/css/style.scss';
import './common/css/aliIcon.css';

import ValienUpload from 'alienupload';
Vue.use(ValienUpload);

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
const key = [ 2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
Vue.prototype.moment = require('moment');
Vue.prototype.$imgUrl = 'http://njyfdc.com:9081/dummypath';
Vue.prototype.$decrypt = (encryptedHex) => {
  //  准备解密十六进制字符串时，将其转换回字节
  const encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);
  //  计数器操作模式保持内部状态，所以
  //  解密新实例必须实例化。
  const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);

  //  将我们的字节转换回文本
  const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  return decryptedText;
}


