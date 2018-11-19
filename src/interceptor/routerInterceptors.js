/**
 * @Author: liang.zhu
 * @Date: 2018/9/14 上午11:18
 */
import router from '../router/index';
import store from '../store/index';

router.beforeEach((to, from, next) => {
  console.log(111)
  // 登录拦截
  if (to.path !== '/login' && !(sessionStorage.getItem('isLogin') || localStorage.getItem('isLogin')) ) {
    // router.push({ path: '/login' });
    next({
      path: '/login',
      // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    });
  } else {
    next();
  }
});

