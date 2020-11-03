import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAD_PCWReLe_b1lNLmc44U-PvA7U2W8GeQ",
  authDomain: "movie-app-3adb1.firebaseapp.com",
  databaseURL: "https://movie-app-3adb1.firebaseio.com",
  projectId: "movie-app-3adb1",
  storageBucket: "movie-app-3adb1.appspot.com",
  messagingSenderId: "1086618444891",
  appId: "1:1086618444891:web:01ffe6c7dd0fa8e0bb0b7e"
}

firebase.initializeApp(config)

export const firebaseAuth = firebase.auth()
// export const firebaseRef = firebase.database().ref()
