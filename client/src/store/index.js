import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'
import AuthService from '../AuthService'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 7000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    cryptos: [],
    transactions: [],
    ledgers: [],
    activeLedger: {}
  },

  mutations: {
    resetState(state) {
      state.user = {},
        state.cryptos = [],
        state.transactions = [],
        state.ledgers = [],
        state.activeLedger = {}
    },
    setUser(state, user) {
      state.user = user
    },
    setCryptos(state, cryptos) {
      state.cryptos = cryptos
    },
    addCrypto(state, crypto) {
      state.cryptos.push(crypto)
    },
    addTransaction(state, transaction) {
      state.transactions.push(transaction)
    }
  },

  actions: {
    //#region - AUTH
    async register({ commit }, creds) {
      try {
        let user = await AuthService.Register(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async login({ commit }, creds) {
      try {
        let user = await AuthService.Login(creds)
        commit('setUser', user)
        router.push({ name: "home" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    async logout({ commit }) {
      try {
        let success = await AuthService.Logout()
        if (!success) { }
        commit('resetState')
        router.push({ name: "login" })
      } catch (e) {
        console.warn(e.message)
      }
    },
    //#endregion

    //#region - Cryptocurrencies
    async getCryptos({ commit }) {
      let res = await api.get('cryptos')
      commit('setCryptos', res.data)
    },
    async createCrypto({ commit }, payload) {
      let res = await api.post('cryptos', payload)
      commit('addCrypto', res.data)
    },

    //#region - Transactions
    async createTransaction({ commit }, payload) {
      let res = await api.post('transactions', payload)
      commit('addTransaction', res.data)
    }
  }
})
