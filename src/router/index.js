import Vue from 'vue';
import Router from 'vue-router';
import mainPage from './mainPage';

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
const loginPage = resolve => require(['@/components/login.vue'], resolve);
const index = resolve => require(['@/components/index.vue'], resolve);
export default new Router({
  /*mode: 'history',*/
  base: __dirname,
  routes: [
    /*{path: '/', component: mainPage},*/
    {path: '*', name: '404', component: notFound},
    {path: '/login', name: 'login', component: loginPage},
    {path: '/index', name: 'index', component: index},
    mainPage,
  ]
})
