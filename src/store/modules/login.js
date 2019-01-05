/**
 * Created by zhuliang on 2017/3/6.
 * 登陆的相关数据的store
 */
import * as types  from '../mutations-types'

const  state = {
  isLogin : sessionStorage.getItem('isLogin') || localStorage.getItem('isLogin') || false,
}


const getters = {
  getLoginStatus: state => state.isLogin
}

const mutations = {
  loginCommit(state,data){
    if (data.data) {
      sessionStorage.setItem('isLogin', true);
    }

    if (data.remberme) {
      localStorage.setItem('isLogin', true);
    }
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

