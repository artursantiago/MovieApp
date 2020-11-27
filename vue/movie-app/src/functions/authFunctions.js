import store from '../store'
import router from '../routes'
import * as api from '../api/apiFirebase'

function handleLogin (email, password) {
  api.signIn(email, password)
  .then(result => {
    localStorage.setItem("user_uid", result.user.uid)
    store.commit('auth/setAuthenticated', true)
    router.push('/')
    store.commit('auth/setErrorMessage', "")
  })
  .catch(error => {
    if (error.code === "auth/wrong-password")
      store.commit('auth/setErrorMessage', "Wrong Password")
    else
      store.commit('auth/setErrorMessage', error.message)
    console.log(error)
  })
}

function handleLogout() {
  store.commit('auth/setAuthenticated', false)
  localStorage.removeItem('user_uid');
}

function handleSignUp(email, password) {
  api.signUp(email, password)
  .then(result => {
    localStorage.setItem("user_uid", result.user.uid)
    store.commit('auth/setAuthenticated', true)
    router.push('/')
    store.commit('auth/setErrorMessage', "")
  })
  .catch(error => {
    if (error.code === "auth/email-already-in-use")
      store.commit('auth/setErrorMessage', "Email already exists")
    else if (error.code === "auth/weak-password")
      store.commit('auth/setErrorMessage', "Password should be at least 6 characters")
    else
      store.commit('auth/setErrorMessage', error.message)
    console.log(error);
  })
}

export {handleLogin, handleLogout, handleSignUp}