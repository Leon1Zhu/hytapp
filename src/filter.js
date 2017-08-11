/**
 * Created by zhuliang on 2017/5/3.
 */
import Vue from 'vue'
Vue.filter( 'filterTopNewsData' , function(value,discount) {
  if(value=="" || value==null)
    return "";
  else{
    return value.substring(5,10)
  }
});


Vue.filter( 'filterTimestamp' , function(value,fmt) {
  return new Date(value).Format(fmt);
});


