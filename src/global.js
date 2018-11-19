/**
 * Created by zhuliang on 2017/4/6.
 */
/*global.SERVICEURL="http://localhost:8080"*/
global.SERVICEURL="http://localhost:8888"


if(process.env.NODE_ENV=="production"){
  global.SERVICEURL="http://localhost:8888"
}


global.PROOPTION=[{
    value: 'WDM',
    label: '南京万达茂'
  }, {
    value: 'zz',
    label: '漳州红星广场'
  },{
  value: 'SN',
  label: '苏宁紫金嘉悦'
}, {
  value: 'YX',
  label: '大达美食城'
},{
  value:"JYDF",
  label:"金域东方"
},{
    value:"HMME",
    label:"鸿鸣摩尔金贸国际"
  },{
  value:"WKXH",
  label:"万科星荟"
},{
  value:"JLXC",
  label:"九龙兴城"
}]
