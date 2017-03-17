<template>
  <div id="app"
       class="container padding-t-2 padding-b-2">
    <counter></counter>
    <counter></counter>
    <counter></counter>
    <counter></counter>
    <counter></counter>
    
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  name: 'app',
  components: {
    Counter
  }
}

</script>

<style lang="scss">

</style>

