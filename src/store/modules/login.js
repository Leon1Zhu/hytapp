/**
 * Created by zhuliang on 2017/3/6.
 * 登陆的相关数据的store
 */
import * as types  from '../mutations-types'

const  state = {
  isLogin : false
}


const getters = {
  getLoginStatus: state => state.isLogin
}

const mutations = {
  loginCommit(state,flag){
    state.isLogin = flag;
  }
}

const actions = {
  setLoginStatus ({ commit },flag) {
      commit(types.LOGIN_STATUS,flag)
  }

}


export default {
  state,
  getters,
  mutations,
  actions
}

