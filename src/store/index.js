import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: {
    username: '',
    email: '',
    token: ''
  },
  mutations: {
    saveUser(state, username, email, token) {
      state.username = username
      state.email = email
      state.token = token
    }
  },
  plugins: [createPersistedState({})]
})

export default store
