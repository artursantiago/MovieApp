import {firebaseAuth} from '../firebase'

export function signUp(email, password) {
  return firebaseAuth.createUserWithEmailAndPassword(email, password)
    // .then(saveUser)
}

export function signIn(email, password) {
  return firebaseAuth.signInWithEmailAndPassword(email, password)
}

export function signOut() {
  return firebaseAuth.signOut()
}