/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var addSubscribeApi = "/api/subscribe-users";

var getSubscribeTableApi = "/api/subscribe-get-table-user";

var getSubscribeChartApi = "/api/subscribe-get-chart-count";

export default {
  addSubscribe : function(phone,name){
    var params = {
      phone:phone,
      name:name,
    }
    return api.post(addSubscribeApi,{},params)
  },
  getSubscribeTable : function(index,length){
    var params = {
      index:index,
      length:length,
    }
    return api.get(getSubscribeTableApi,params)
  },
  getSubscribeChart : function(){
    return api.get(getSubscribeChartApi,{})
  },
}
