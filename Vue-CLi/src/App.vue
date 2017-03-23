<template>
  <div id="app"
       class="container">
    <div class='row'>
      <div class='col-md-4'>
        <navigation></navigation>
      </div>
      <div class="col-md-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import store from './ModuleStore'

export default {
  name: 'app',
  store,
  components: {
    Navigation
  }
}

</script>


