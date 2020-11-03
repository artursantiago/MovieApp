import Vue from 'vue'
import Vuex from 'vuex'

import AuthModule from './cases/authModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: AuthModule,
  }
})

export default store