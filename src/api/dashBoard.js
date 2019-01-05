import api from 'axios';

// 获取dashBoard图表数据
const getChartsDataApi = '/api/subscribe-get-chart-count';

// 获取展示面板信息
const getDashBoardInfoApi = '/api/getDashBoardInfo';


const getDashBoardInfo = function () {
  return api.get(getDashBoardInfoApi, null);
};


const getChartsData = function () {
  return api.get(getChartsDataApi, null);
};

export default {
  getChartsData,
  getDashBoardInfo,
};
