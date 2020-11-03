import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',

  routes: [
    { path: '/', name: 'Home', component: () => import('./components/MovieList/MovieList.vue') },
    { path: '/login', name: 'Login', component: () => import('./components/Login/Login.vue')},
    // { path: '/favorites', name: 'My Favorites', component: () => import('./components/...')}

  ]
})

// verfica se o usuario está logado

export default router