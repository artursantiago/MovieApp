import * as api from '../api/apiFirebase';

async function handleLogin (email, password) {
  api.signIn(email, password)
  .then(result => {
    const user = {uid: result.user.uid, name: 'Jubileu'}
    localStorage.setItem("user", JSON.stringify(user))
  })
  .catch(error => {
    // if (error.code === "auth/wrong-password")
    //   setErrorMessage("Wrong Password")
    // else
    //   setErrorMessage(error.message)
    console.log(error)
  })
}

function handleLogout() {
  localStorage.removeItem('user');
}

function handleSignUp(email, password) {
  api.signUp(email, password)
  .then(result => {
    // Insert new user on firebase
    // Call firebase for the user data
    const user = {uid: result.user.uid, name: 'Jubileu'}
    localStorage.setItem("user", JSON.stringify(user))
  })
  .catch(error => {
    // if (error.code === "auth/email-already-in-use")
    //   setErrorMessage("Email already exists");
    // else if (error.code === "auth/weak-password")
    //   setErrorMessage("Password should be at least 6 characters")
    // else
    //   setErrorMessage(error.message)
    console.log(error);
  })
}

export {handleLogin, handleLogout, handleSignUp}