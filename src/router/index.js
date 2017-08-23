import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
const WDM = resolve => require(['@/components/NanJingWDM/NanJingWDM'], resolve);
const aboutPage = resolve => require(['@/components/aboutPaper/mainPage'], resolve);
const managePage = resolve => require(['@/components/NanJingWDM/ManagePage'], resolve);

const zzPro = resolve => require(['@/components/zhangzhou/zhangzhou'], resolve);

const lhPro = resolve => require(['@/components/longhu/longhu'], resolve);

export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    /*{path: '/', component: mainPage},*/
    {path: '*', name: '404', component: notFound},
    {path: '/wdm', name: 'wdm', component: WDM},
    {path: '/', name: 'aboutPage', component: aboutPage},
    {path: '/managePage', name: 'managePage', component: managePage},
    {path: '/zzPro', name: 'zzPro', component: zzPro},
    {path: '/lhPro', name: 'lhPro', component: lhPro},
  ]
})
