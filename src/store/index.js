import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: {
    username: '',
    token: '',
    refereshToken: '',
    isAuthenticated: false
  },
  mutations: {
    setUsername(state, username) {
      state.username = username
    },
    setToken(state, token) {
      state.token = token
    },
    setRefereshToken(state, refereshToken) {
      state.refereshToken = refereshToken
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    },
    username(state) {
      return state.username
    }
  },
  plugins: [createPersistedState({})]
})

export default store
