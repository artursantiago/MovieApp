import {firebaseAuth, firebaseRef} from '../firebase'

export function signUp(email, password) {
  return firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(saveUser)
}

function saveUser(user) {
  return firebaseRef.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export function signIn(email, password) {
  return firebaseAuth.signInWithEmailAndPassword(email, password)
}

export function signOut() {
  return firebaseAuth.signOut()
}