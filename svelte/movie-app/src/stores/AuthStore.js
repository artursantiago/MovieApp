import { writable } from 'svelte/store';

const AuthStore = writable({
  authenticated: false,
  errorMessage: '',
  user: {}
});

export default AuthStore;