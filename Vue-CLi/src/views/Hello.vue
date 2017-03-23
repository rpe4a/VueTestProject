<template>
    <div>
        <h1>Hello Vue</h1>
        <button @click='AddTodo'>Add todo</button><span>{{uncompletedTodosCount}} - Коилчество не завершенных</span>
        <p v-for='todo in todos'>{{todo.name}}</p>
    </div>
</template>

<script>
import Vuex from 'vuex';

export default {
    name: 'name',
    //store,

    computed: {
        /*...Vuex.mapState([
            'todos'
        ]),*/
        ...Vuex.mapState('todos', {
            todos: state => state
        }),
        /*...Vuex.mapGetters([
            'uncompletedTodosCount'
        ]),*/
        ...Vuex.mapGetters('todos', [
            'uncompletedTodosCount'
        ])
    },

    methods: {
        /*...Vuex.mapActions( [
            'addTodo',
        ]),*/
        ...Vuex.mapActions('todos', [
            'addTodo',
        ]),
        AddTodo() {
            this.addTodo(`пример ${new Date().getMilliseconds()}`)
        }
    }

}
</script>

<style >

</style>