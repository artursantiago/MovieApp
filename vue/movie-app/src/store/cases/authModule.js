const getDefaultState = () => {
  return {
    authenticated: false,
    user: {},
  }
}

export default {
  namespaced: true,

  state: getDefaultState(),

  getters: {
    authenticated(state) {
      return state.authenticated
    },
    user(state) {
      return state.user
    }
  },

  mutations: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated
    },
    setUser(state, user) {
      state.user = user
    },
    resetState(state) {
      Object.assign(state, getDefaultState())
    }
  },

  actions: {
    reset({commit}) {
      commit('resetState')
    }
  }
}