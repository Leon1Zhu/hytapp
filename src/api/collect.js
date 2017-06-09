/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var addSubscribeApi = "/api/subscribe-users";

export default {
  addSubscribe : function(phone,name){
    var params = {
      phone:phone,
      name:name,
    }
    return api.post(addSubscribeApi,{},params)
  }
}
