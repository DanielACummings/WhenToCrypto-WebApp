import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Ledgers from '../views/Ledgers.vue'
// @ts-ignore
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ledgers',
      name: 'ledgers',
      component: Ledgers
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})