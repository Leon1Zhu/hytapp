import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
const WDM = resolve => require(['@/components/NanJingWDM/NanJingWDM'], resolve);

export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    /*{path: '/', component: mainPage},*/
    {path: '*', name: '404', component: notFound},
    {path: '/wdm', name: 'wdm', component: WDM}
  ]
})
