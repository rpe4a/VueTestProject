<template>
  <div id="app" class="container padding-t-2 padding-b-2">
    <template v-if='users.length > 0'>
      <message v-for='user in users'>
        <template slot='header'>{{user.title}}</template>
        {{user.body}}
        <template slot='footer'>Написал: {{user.userId}} в {{new Date()}}</template>
      </message>
    </template>
    <template v-else>
      <p>
        <i class="fa fa-spin fa-spinner fa-lg"></i><span> Загрузка данных...</span>
      </p>
    </template>
    <projectform></projectform>
    <counter></counter>
  </div>
</template>

<script>
  import Message from './components/Message.vue';
  import Counter from './components/Counter.vue';
  import Projectform from './components/Projectform.vue';
  import axios from 'axios'
  import { take } from 'lodash'

  export default {
    name: 'app',
    components: {
      Message,
      Counter,
      Projectform
    },
    data() {
      return {
        users: []
      }
    },
    mounted() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.users = take(response.data, 3);
        })
    }
  }

</script>

<style lang="scss">

</style>