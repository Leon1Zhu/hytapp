import api from 'axios';

// 获取预约表格信息
const getAllHouseApi = '/api/getAllHouse';

// 删除图片
const deleteImgApi = '/api/deleteImgs';

// 删除户型
const deleteTypeApi = '/api/deleteTypeById';

const deleteType = function (id) {
  const params ={
    id
  };
  return api.get(deleteTypeApi, null, {params});
};

const deleteImg = function (id) {
  const params ={
    id
  };
  return api.get(deleteImgApi, null, {params});
};

const getAllHouse = function (index, length, houseId) {
  return api.get(getAllHouseApi, null);
};


export default {
  getAllHouse,
  deleteImg,
  deleteType,
};
