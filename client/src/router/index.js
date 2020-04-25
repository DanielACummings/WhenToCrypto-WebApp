import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Ledger from '../views/Ledger.vue'
// @ts-ignore
import Login from '../views/Login.vue'
// @ts-ignore
import Features from '../views/Features.vue'
// @ts-ignore
import WhyUseCrypto from '../views/WhyUseCrypto.vue'
// @ts-ignore
import About from '../views/About.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/features',
      name: 'features',
      component: Features
    },
    {
      path: '/whyusecrypto',
      name: 'whyUseCrypto',
      component: WhyUseCrypto
    },
    {
      path: '/ledgers/:cryptoId',
      name: 'ledger',
      component: Ledger
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})