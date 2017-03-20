<template>
    <div>
        <h1>Hello Vue</h1>
        <p v-for='todo in todos'>{{todo.name}}</p>
    </div>
</template>

<script>
import store from '../Store/AppStore.js'
import Vuex from 'vuex';

var t = { ...Vuex.mapGetters(['todos']) }

console.log(t)

export default {
    name: 'name',
    store,
    computed: {
        ...Vuex.mapGetters(['todos'])
    }

}
</script>

<style >

</style>