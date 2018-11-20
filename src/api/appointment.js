import api from 'axios';

// 获取所有的楼盘
const getAllHouseApi  = '/api/getAllHouse';

// 获取预约表格信息
const getAppTableDataApi = '/api/getAllSubscribeByHouseId';

const getAllHouse = function () {
  return api.get(getAllHouseApi, null);
};

const getAppTableData = function (index, length, houseId) {
  const params = {
    index,
    length,
    houseId
  }
  return api.get(getAppTableDataApi, {params});
};


export default {
  getAllHouse,
  getAppTableData,
};
