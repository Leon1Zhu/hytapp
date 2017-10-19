import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
const WDM = resolve => require(['@/components/NanJingWDM/NanJingWDM'], resolve);
const aboutPage = resolve => require(['@/components/aboutPaper/mainPage'], resolve);
const managePage = resolve => require(['@/components/NanJingWDM/ManagePage'], resolve);

const zzPro = resolve => require(['@/components/zhangzhou/zhangzhou'], resolve);

const lhPro = resolve => require(['@/components/longhu/longhu'], resolve);
const suning = resolve => require(['@/components/suning/suning'], resolve);
const ldzx = resolve => require(['@/components/ldzx/ldzx'], resolve);
const lch = resolve => require(['@/components/lch/lch'], resolve);

const yck = resolve => require(['@/components/yckinmaQ/yckinmaQ'], resolve);
const yxpro = resolve => require(['@/components/yx/yx'], resolve);

const wdbp = resolve => require(['@/components/wdBachelorPad/wdBachelorPad'], resolve);

const rtsc = resolve => require(['@/components/rtsc/rtsc'], resolve);
const jydf = resolve => require(['@/components/JYDF/JYDF'], resolve);

export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    /*{path: '/', component: mainPage},*/
    {path: '*', name: '404', component: notFound},
    {path: '/wdm', name: 'wdm', component: WDM},
    {path: '/', name: 'aboutPage', component: aboutPage},
    {path: '/projectManagePage', name: 'managePage', component: managePage},
    {path: '/zzPro', name: 'zzPro', component: zzPro},
    {path: '/lhPro', name: 'lhPro', component: lhPro},
    {path: '/suning', name: 'suning', component: suning},
    {path: '/ldzx', name: 'ldzx', component: ldzx},
    {path: '/lch', name: 'lch', component: lch},
    {path: '/yck', name: 'yck', component: yck},
    {path: '/yxpro', name: 'yxpro', component: yxpro},
    {path: '/wdbalpad', name: 'wdbp', component: wdbp},
    {path: '/rtsc', name: 'rtsc', component: rtsc},
    {path: '/jydf', name: 'jydf', component: jydf},
  ]
})
