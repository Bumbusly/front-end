import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: {
    username: '',
    token: '',
    refereshToken: '',
    isAuthenticated: false,
    resetPasswordTimer: 120
  },
  mutations: {
    setUsername(state: any, username: string) {
      state.username = username
    },
    setToken(state: any, token: string) {
      state.token = token
    },
    setRefereshToken(state: any, refereshToken: string) {
      state.refereshToken = refereshToken
    },
    setIsAuthenticated(state: any, isAuthenticated: string) {
      state.isAuthenticated = isAuthenticated
    },
    setTimer(state: any, timer: number) {
      state.resetPasswordTimer = timer
    }
  },
  getters: {
    isAuthenticated(state: any) {
      return state.isAuthenticated
    },
    username(state: any) {
      return state.username
    },
    resetPasswordTimer(state: any){
      return state.resetPasswordTimer;
    }
  },
  plugins: [createPersistedState({})]
})

export default store
