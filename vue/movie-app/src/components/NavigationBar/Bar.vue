<template>
  <div>
    <img :src="logo"  width="200" alt="Movie App Logo">
  </div>
</template>

<script>
import logo from '../../assets/logo.png'

export default {
  computed: {
    logo() {
      return logo;
    },
  }
}
</script>

<style>

</style>