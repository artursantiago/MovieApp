import {firebaseAuth} from '../firebase'

export async function signUp(email, password) {
  return await firebaseAuth.createUserWithEmailAndPassword(email, password);
    // .then(saveUser)
}

export async function signIn(email, password) {
  return await firebaseAuth.signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return firebaseAuth.signOut();
}

// function saveUser(user) {
//   return firebaseRef.child(`users/${user.uid}/info`)
//     .set({
//       email: user.email,
//       uid: user.uid
//     })
//     .then(() => user)
// }