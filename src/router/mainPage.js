/**
 * Created by zhuliang on 2017/12/25.
 */
const mainPage = resolve => require(['@/components/mainPage/mainPage.vue'], resolve);

// 展示面板
const dashBoard = resolve => require(['@/components/dashBoard/dashBoard.vue'], resolve);

// 预约界面
const appointment = resolve => require(['@/components/appointment/appointment.vue'], resolve);

// 来访记录
const telCord = resolve => require(['@/components/telCord/telCord.vue'], resolve);

// 楼盘管理
const houseManage = resolve => require(['@/components/houseManage/houseManage.vue'], resolve);

const mainPageRouter = {
  path: '/',
  component: mainPage,
  children: [
    {
      path: '/dashBoard',
      component: dashBoard,
      name: "首页",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: false},
    }, {
      path: '/appointment',
      component: appointment,
      name: "预约管理",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: false},
    },{
      path: '/telCord',
      component: telCord,
      name: "来访记录",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: false},
    },{
      path: '/houseManage',
      component: houseManage,
      name: "楼盘管理",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: false},
    },

  ]
};

export default mainPageRouter;
