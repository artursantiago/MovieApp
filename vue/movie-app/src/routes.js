import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',

  routes: [
    { path: '/', name: 'Home', component: () => import('./components/MovieList/MovieList.vue') },
    { path: '/login', name: 'Login', component: () => import('./components/Login/Login.vue')},
    { path: '/movie/:id', name : 'Movie', component: () => import('./components/Movie/Movie.vue')}

  ]
})

export default router