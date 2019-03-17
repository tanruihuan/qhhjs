import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: window.localStorage['access_token'],
    investmentlistnum: ''
    // username: window.sessionStorage['hjs_username']
  },
  mutations: {
    set_token (state, token) {
      state.token = token
      localStorage.access_token = token
    },
    del_token (state) {
      state.token = ''
      localStorage.removeItem('access_token')
    },
    investmentlist (state, num) {
      state.investmentlistnum = num
    }
  }
})
