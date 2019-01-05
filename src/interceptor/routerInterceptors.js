/**
 * @Author: liang.zhu
 * @Date: 2018/9/14 上午11:18
 */
import router from '../router/index';
import store from '../store/index';
import iView from 'iview';

router.beforeEach((to, from, next) => {
  // 登录拦截
  if (to.path !== '/login' && !(sessionStorage.getItem('isLogin') || localStorage.getItem('isLogin')) ) {
    // router.push({ path: '/login' });
    next({
      path: '/login',
      // query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    });
  } else {
    if(to.meta.needAlive){
      iView.LoadingBar.start();
      //若需要，则添加到缓存中，并且在页面上显示
      let obj = {
        name: to.name,
        link: to.path,
        isActive: true,
      }
      store.dispatch('addMenuListAction',obj)
    }
    next();
  }
});


router.afterEach(route => {
  iView.LoadingBar.finish();
});

