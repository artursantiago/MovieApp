import {firebaseAuth} from '../firebase'

export async function signUp(email, password) {
  return await firebaseAuth.createUserWithEmailAndPassword(email, password);
}

export async function signIn(email, password) {
  return await firebaseAuth.signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return firebaseAuth.signOut();
}