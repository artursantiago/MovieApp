<template>
  <div class="modal-bg">
    <div class="modal">
      <button @click="exitLogin" class="exit"><i class="fas fa-times-circle"></i></button>
      <form @submit.prevent>
        <h2> {{isNewUser ? 'Sign Up' : 'Sign In'}} </h2>
        <div v-if="errorMessage" class="error-message">
          <p>{{errorMessage}}</p>
        </div>
        <div class="field">
          <label for="email">E-mail</label>
          <input v-model="email" type="email" name="email" required/>
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input v-model="password" type="password" name="password" required/>
        </div>
        <button class="btn" type="submit" @click="handleFormSubmit">{{isNewUser ? 'Sign Up' : 'Sign In'}}</button>
          <span v-if="isNewUser" class="form-type">Already an user? <b @click="isNewUser = false">Sign In</b></span>
          <span v-else class="form-type">No account? <b @click="isNewUser = true">Create one!</b></span>
      </form>
    </div>
  </div>
</template>

<script>
import { handleLogin, handleSignUp } from '../../functions/authFunctions'

export default {
  computed: {
    errorMessage() {
      return this.$store.state.auth.errorMessage;
    }
  },

  watch: {
    isNewUser() {
      this.$store.commit('auth/setErrorMessage', "")
      this.email = ''
      this.password = ''
    }
  },

  data() {
    return {
      isNewUser: false,
      email: '',
      password: '',
    }
  },

  methods: {
    handleFormSubmit() {
      console.log(this.email, this.password);
      if (this.isNewUser)
        handleSignUp(this.email, this.password)
      else
        handleLogin(this.email, this.password)
    },

    exitLogin() {
      this.$router.push('/')
      this.$store.commit('auth/setErrorMessage', "")
    }
  }
}
</script>

<style>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: white; */
}

.modal {
  background-color: rgba(37,34,34,.75);
  color: white;
  border-radius: 24px;

  min-height: 400px;
  width: 400px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal h2 {
  margin: 8px 0 12px;
}

.modal .exit {
  border: none;
  outline: none;
  background: none;
  color: white;
  cursor: pointer;
  font-size: 24px;

  padding-top: 12px;
  display: table;
  margin: 0 auto;
  text-decoration: none;
}


.modal form {
  text-align: center;
  width: 60%;
  margin: 0 auto;
}

.modal .error-message {
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  background: lightcoral;
  border-radius: 10px;
}

.modal form .field {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 32px;
}

.modal form .field label {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
}

.modal form .field input {
  height: 24px;
  border-radius: 8px;
  outline: none;

  border: 2px white solid;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
  padding: 4px 4px;

  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.modal form .field input:focus {
  border-color: #426cb5;
}

.modal form button {
  background-color: black;
}

.modal form .btn {
  width: 100% ;
}

.modal form .form-type {
  display: flex;
  margin: 12px auto 14px;
}

.modal form .form-type b{
  cursor: pointer;
  padding-left: 4px;
}
</style>