import * as api from '../api/apiFirebase';

async function handleLogin (email, password) {
  api.signIn(email, password)
  .then(result => {
    const user = {uid: result.user.uid}
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.removeItem('errorMessage')
  })
  .catch(error => {
    if (error.code === "auth/wrong-password")
      localStorage.setItem("errorMessage", "Wrong Password");
    else
      localStorage.setItem("errorMessage", error.message);
    console.log(error)
  })
}

function handleLogout() {
  localStorage.removeItem('user');
}

function handleSignUp(email, password) {
  api.signUp(email, password)
  .then(result => {
    const user = {uid: result.user.uid}
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.removeItem('errorMessage')
  })
  .catch(error => {
    if (error.code === "auth/email-already-in-use")
      localStorage.setItem("errorMessage", "Email already exists");
    else if (error.code === "auth/weak-password")
      localStorage.setItem("errorMessage", "Password should be at least 6 characters");
    else
      localStorage.setItem("errorMessage", error.message);
    console.log(error);
  })
}

export {handleLogin, handleLogout, handleSignUp}