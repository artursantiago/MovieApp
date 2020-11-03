<script>
  import { handleLogin,handleSignUp } from '../../functions/AuthFunctions.js';

  let isNewUser = false;
  let email;
  let password;

  function handleFormSubmit() {
    if (isNewUser)
      handleSignUp(email, password);
    else
      handleLogin(email, password);
  }

  function toggleIsNewUser() {
    isNewUser = !isNewUser;
  }

</script>

<div class="modal-bg">
  <div class="modal">
    <a href="/" class="exit"><i class="fas fa-times-circle"></i></a>
    <form on:submit|preventDefault={handleFormSubmit}>
      <h2>
        {isNewUser ? 'Sign Up' : 'Sign In'}
      </h2>
      <!-- {
        errorMessage ? 
        <div class="error-message">
          <p>{errorMessage}</p>
        </div> : ''
      }  -->
      <div class="field">
        <label for="email">E-mail</label>
        <input type="email" name="email" bind:value={email} required/>
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="password" name="password" bind:value={password} required/>
      </div>
      <button class="btn" type="submit">
        {#if isNewUser}
          Sign Up
        {:else}
          Sign In
        {/if}
      </button>
        {#if isNewUser}
          <span class="form-type">No account? <b on:click={toggleIsNewUser}>Create one!</b></span>
        {:else}
        <span class="form-type">Already an user? <b on:click={toggleIsNewUser}>Sign In</b></span>
        {/if}
    </form>
  </div>
</div>


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
  background-color: rgba(255, 255, 255, 8);
  color: black;
  border-radius: 8px;
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
  border: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;

  background: none;
  border: 3px solid #fff;
  color: #fff;
  cursor: pointer;

  width: 100%;
  padding: 8px 30px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;

  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}

.modal form .btn:hover {
  border-color: #426cb5;
  color: #426cb5;
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