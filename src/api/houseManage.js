import api from 'axios';

// 获取预约表格信息
const getAllHouseApi = '/api/getAllHouse';

// 删除图片
const deleteImgApi = '/api/deleteImgs';

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
};
