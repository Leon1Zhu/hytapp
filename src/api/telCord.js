import api from 'axios';

// 获取预约表格信息
const getPresonTelApi = '/api/getPresonTel';

const getPresonTel = function (index, length, houseId) {
  const params = {
    index,
    length,
    houseId
  }
  return api.get(getPresonTelApi, {params});
};


export default {
  getPresonTel,
};
