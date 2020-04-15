import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from '../views/Home.vue'
// @ts-ignore
import Ledgers from '../views/Ledgers.vue'
// @ts-ignore
import Login from '../views/Login.vue'
// @ts-ignore
import Features from '../views/Features.vue'
// @ts-ignore
import WhyUseCrypto from '../views/WhyUseCrypto.vue'
// // @ts-ignore
// import Cryptocurrency from '../views/Cryptocurrency.vue'


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
      path: '/ledgers',
      name: 'ledgers',
      component: Ledgers
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
    // for individual ledger view
    // {
    //   path: '/ledgers/:cryptoName',
    //   name: 'cryptocurrency',
    //   component: Cryptocurrency
    // },
    {
      path: "*",
      redirect: '/'
    }
  ]
})