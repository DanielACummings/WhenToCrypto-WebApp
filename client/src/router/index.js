import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import CryptoLedger from '../views/CryptoLedger.vue'
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
      path: '/crypto-ledgers/:cryptoId',
      name: 'cryptoLedger',
      component: CryptoLedger
    },
    // {
    //   path: '/metal-ledgers/:metalId',
    //   name: 'metalLedger',
    //   component: MetalLedger
    // },
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