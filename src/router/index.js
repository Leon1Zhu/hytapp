import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
const WDM = resolve => require(['@/components/NanJingWDM/NanJingWDM'], resolve);
const aboutPage = resolve => require(['@/components/aboutPaper/mainPage'], resolve);
const managePage = resolve => require(['@/components/NanJingWDM/ManagePage'], resolve);

const zzPro = resolve => require(['@/components/zhangzhou/zhangzhou'], resolve);

const suning = resolve => require(['@/components/suning/suning'], resolve);



const jydf = resolve => require(['@/components/jydf/jydf'], resolve);


const hmme = resolve => require(['@/components/hmme/hmme'], resolve);

const wkxh = resolve => require(['@/components/wkxh/wkxh'], resolve);


const jlxc = resolve => require(['@/components/jlxc/jlxc'], resolve);

const yxjj = resolve => require(['@/components/YXJJ/YXJJ'], resolve);

const smgc = resolve => require(['@/components/smgc/smgc'], resolve);

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
    {path: '/suning', name: 'suning', component: suning},
    {path: '/jydf', name: 'jydf', component: jydf},
    {path: '/hmme', name: 'hmme', component: hmme},
    {path: '/wkxh', name: 'wkxh', component: wkxh},
    {path: '/jlxc', name: 'jlxc', component: jlxc},
    {path: '/yxjj', name: 'yxjj', component: yxjj},
    {path: '/smgc', name: 'smgc', component: smgc},
  ]
})
