import Vuex from 'vuex';

const
    state = {
        todos: [{
            name: 'Пример 1',
            completed: true
        }]
    },

    mutations = {
        add_todo: (state, name) => {
            state.todos.push({
                name,
                completed: false
            })
        }
    },

    getters = {
        todos: (state) => state.todos,
        completedTodos: (state) => state.todos.filter(todo => todo.completed),
        uncompletedTodos: (state) => state.todos.filter(todo => !todo.completed)
    }

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: {

    },
    getters: getters,
    strict: true
})