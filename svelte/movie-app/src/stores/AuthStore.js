import { writable } from 'svelte/store';

const AuthStore = writable({
  authenticated: false,
  user: {}
});

export default AuthStore;