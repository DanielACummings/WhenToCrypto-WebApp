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
// @ts-ignore
import HomeViewDemo from '../views/HomeViewDemo.vue'
// @ts-ignore
import DemoLedger from '../views/DemoLedger.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // Before login
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/home-demo',
      name: 'homeViewDemo',
      component: HomeViewDemo
    },
    {
      path: '/demo-ledger',
      name: 'demoLedger',
      component: DemoLedger
    },

    // After login
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
      path: "*",
      redirect: '/'
    }
  ]
})