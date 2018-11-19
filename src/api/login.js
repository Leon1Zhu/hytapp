import api from 'axios';

// 获取猜你喜欢房子
const loginApi = '/api/login';

const login = function (loginName, password) {
  const params = {
    loginName,
    password
  };
  return api.post(loginApi, null, {params});
};

export default {
  login,
};
