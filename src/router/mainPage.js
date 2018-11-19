/**
 * Created by zhuliang on 2017/12/25.
 */
const mainPage = resolve => require(['@/components/mainPage/mainPage.vue'], resolve);

// 展示面板
const dashBoard = resolve => require(['@/components/dashBoard/dashBoard.vue'], resolve);

const mainPageRouter = {
  path: '/',
  component: mainPage,
  children: [
    {
      path: '/dashBoard',
      component: dashBoard,
      name: "首页",
      //needAlive表示该页面是否是标签页,keepAlive表示是否需要缓存改页面
      meta: {needAlive: true, keepAlive: true},
    },
  ]
};

export default mainPageRouter;
