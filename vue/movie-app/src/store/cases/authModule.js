const getDefaultState = () => {
  return {
    authenticated: false,
    errorMessage: '',
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
    },
    errorMessage(state) {
      return state.errorMessage
    }
  },

  mutations: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated
    },
    setUser(state, user) {
      state.user = user
    },
    setErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage
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