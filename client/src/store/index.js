import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'
import AuthService from '../AuthService'
import Swal from 'sweetalert2'

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
    // Cryptos
    cryptos: [],
    activeCryptoLedger: {},
    ledgerCrypto: {},
    // Metals
    metals: [],
    activeMetalLedger: {},
    ledgerMetal: {}
  },

  mutations: {
    resetState(state) {
      state.user = {},
        state.cryptos = [],
        state.activeCryptoLedger = {},
        state.ledgerCrypto = {},
        state.ledgerMetal = {}
    },
    setUser(state, user) {
      state.user = user
    },
    // Cryptos
    setCryptos(state, cryptos) {
      state.cryptos = cryptos
    },
    addCrypto(state, crypto) {
      state.cryptos.push(crypto)
    },
    setLedgerCrypto(state, ledgerCrypto) {
      state.ledgerCrypto = ledgerCrypto
    },
    setCryptoTx(state, tx) {
      state.activeCryptoLedger = tx
    },

    // Metals
    setMetals(state, metals) {
      state.metals = metals
    },
    addMetal(state, metal) {
      state.metals.push(metal)
    },
    setLedgerMetal(state, ledgerMetal) {
      state.ledgerMetal = ledgerMetal
    },
    setMetalTx(state, tx) {
      state.activeMetalLedger = tx
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
        // Invalid email or password error message
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect email or password."
        });
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
    async getLedgerCrypto({ commit }, cryptoId) {
      let res = await api.get(`cryptos/${cryptoId}`)
      commit('setLedgerCrypto', res.data)
    },
    async createCrypto({ commit }, payload) {
      let res = await api.post('cryptos', payload)
      commit('addCrypto', res.data)
    },
    async editCrypto({ dispatch }, update) {
      await api.put('cryptos/' + update.id, update)
      dispatch('getCryptos')
    },
    // Transactions
    async createTransaction({ dispatch }, payload) {
      await api.post('transactions', payload)
      dispatch('getCryptos')
    },
    async getTxByCrypto({ commit }, cryptoId) {
      let res = await api.get(`transactions/${cryptoId}`)
      commit('setCryptoTx', res.data)
    },
    //#endregion

    //#region - Metals
    async getMetals({ commit }) {
      let res = await api.get('metals')
      commit('setMetals', res.data)
    },
    async getLedgerMetal({ commit }, metalId) {
      let res = await api.get(`metals/${metalId}`)
      commit('setLedgerMetal', res.data)
    },
    async createMetal({ commit }, payload) {
      let res = await api.post('metals', payload)
      commit('addMetal', res.data)
    },
    async editMetal({ dispatch }, update) {
      await api.put('metals/' + update.id, update)
      dispatch('getMetals')
    },
    // Transactions
    async createMetalTx({ dispatch }, payload) {
      await api.post('metalTx', payload)
      dispatch('getMetals')
    },
    async getTxByMetal({ commit }, metalId) {
      let res = await api.get(`metalTx/${metalId}`)
      commit('setMetalTx', res.data)
    }
    //#endregion
  }
})