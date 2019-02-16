import api from 'axios';

// 获取预约表格信息
const getAllHouseApi = '/api/getAllHouse';

// 删除图片
const deleteImgApi = '/api/deleteImgs';

// 删除户型
const deleteTypeApi = '/api/deleteTypeById';

// 新增楼盘
const addNewHouseApi = '/api/addNewHouse';

// 新增楼盘图片
const addImgsApi = '/api/addImgs';

// 删除楼盘
const deleteHouseApi  = '/api/deleteHouse';

// 新增楼盘优势
const addNewHouseAdvantageApi = '/api/addNewHouseAdvantage';

// 新增楼盘户型
const addHouseTypeApi = '/api/addHouseType';

const addHouseType = function (type) {
  const params ={
    typeImg: type.typeImg,
    hytHouseId: type.houseId,
    typeLabel: type.typeLabel,
    typeMeasure: type.typeMeasure + '㎡',
    typeName: type.typeName,
    typePrice: type.typePrice + '元/㎡',
  };
  return api.post(addHouseTypeApi, params, null);
};

const addNewHouseAdvantage = function (advatage) {
  const params ={
    content: advatage.content,
    hytHouseId: advatage.houseId,
    title: advatage.title,
  };
  return api.post(addNewHouseAdvantageApi, params, null);
};

const deleteHouse = function (houseId) {
  const params ={
    houseId
  };
  return api.post(deleteHouseApi, null, {params});
};


const addImgs = function (imgs, houseId) {
  const params ={
    imgsUrl: imgs.imgsUrl,
    houseId,
  };
  return api.post(addImgsApi, params, null);
};

const addNewHouse = function (hytHouse) {
  const special = hytHouse.special.join(',');
  const params ={
      address: hytHouse.address,
      area: hytHouse.area + '㎡',
      buildingType: hytHouse.buildingType,
      characteristic: hytHouse.characteristic,
      highquality: (special.indexOf('highquality') > -1),
      specialcar: (special.indexOf('specialcar') > -1),
      houseName: hytHouse.houseName,
      houseTel: hytHouse.houseTel,
      houseType: hytHouse.characteristic,
      like: (special.indexOf('like') > -1),
      price: hytHouse.price + '元/㎡',
      recommend: (special.indexOf('recommend') > -1),
      regin: hytHouse.regin,
      renovation: hytHouse.renovation,
      salesStatus: hytHouse.salesStatus,
  };
  if (!hytHouse.id) {
    params.coverPhoto= hytHouse.imgs[0].imgsUrl;
    params.houseOrderNumber= parseInt(Math.random() * 100) + 70;
  } else {
    params.id= hytHouse.id;
    params.openTime= hytHouse.openTime;
    params.createTime= hytHouse.createTime;
    params.redpacket= hytHouse.redpacket;
    params.redpacketDesc= hytHouse.redpacketDesc;
  }
  return api.post(addNewHouseApi, params, {params});
};

const deleteType = function (id) {
  const params ={
    id
  };
  return api.post(deleteTypeApi, null, {params});
};

const deleteImg = function (id) {
  const params ={
    id
  };
  return api.post(deleteImgApi, null, {params});
};

const getAllHouse = function (index, length, houseId) {
  return api.get(getAllHouseApi, null);
};


export default {
  getAllHouse,
  deleteImg,
  deleteType,
  addNewHouse,
  addImgs,
  deleteHouse,
  addNewHouseAdvantage,
  addHouseType,
};
