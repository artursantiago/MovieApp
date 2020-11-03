import Vue from 'vue'
import App from './App.vue'
import './main.css'

import router from './routes'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
