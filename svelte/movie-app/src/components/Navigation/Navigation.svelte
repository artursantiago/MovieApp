<script>
  import AuthStore from '../../stores/AuthStore.js';
  import { handleLogout } from '../../functions/AuthFunctions.js';

  // Svelte does not import non-js files without external file loader
  const logo = '/assets/logo.png';
  const github = '/assets/github-logo.svg';
</script>

<div class="nav">
  <a href="/"><img class="logo" src={logo} alt="Logo Movie App" /></a>
  <div class="actions">
    <img class="github active" src={github} alt="Logo Movie App" />
    {#if !$AuthStore.authenticated}
      <a href="/login" class="btn">Sign In</a>
    {:else}
      <button class="btn" on:click={handleLogout} >Sign Out</button>
    {/if}
  </div>
</div>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: 82px;

  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px 0;
}

.logo {
  width: 200px;
  margin: auto 0;
  margin-left: 150px;
  cursor: pointer;
}

.actions {
  display: flex;
  margin-right: 150px;
}

.actions .github {
  width: 40px;
  margin-right: 16px;
  cursor: pointer;
}


.btn {
  border: none;
  font-family: inherit;
  font-size: 14px;
  color: inherit;
  background: none;
  cursor: pointer;
  padding: 8px 30px;
  /* display: inline-block; */
  /* margin: 15px 30px; */
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;

  border: 3px solid #fff;
  color: #fff;
}

.btn:hover {
  border-color: #426cb5;
  color: #426cb5;
}
</style>