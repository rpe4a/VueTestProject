<template>
  <div id="app" class="container padding-t-2 padding-b-2">
    <router-link to="/" class="btn btn-default btn-lg" exact>Home</router-link>
    <router-link to="/about" class="btn btn-default btn-lg" >About</router-link>
    <router-view class="margin-t-1"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }

</script>

<style lang="scss">

</style>

