/**
 * Created by zhuliang on 2018/1/25.
 */
function ISNULL(val){
  if(val===null || val === undefined || val ==="" || val.length===0 )return true;
  else return false;
}
const state={
  detailCustomId: ISNULL(sessionStorage.getItem('detailCustomId')) ? null : sessionStorage.getItem('detailCustomId'),
  returnCustomName: ISNULL(sessionStorage.getItem('returnCustomName')) ? null : sessionStorage.getItem('returnCustomName'),
}

const getters = {
  getDetailCustomId : state => state.detailCustomId,
  getreturnCustomName : state => state.returnCustomName,
}

const mutations = {
  setDetailCustomId(state,name){
    state.detailCustomId = name
    sessionStorage.setItem('detailCustomId',name)
  },
  setreturnCustomName(state,name){
    state.returnCustomName = name;
    sessionStorage.setItem('returnCustomName',name)
  }
}

const actions = {
  setDetailCustomNameAction({commit},name){
    commit('setDetailCustomId',name)
  },
  setReturnCustomNameAction({commit},name){
    commit('setreturnCustomName',name)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
