import Vuex from 'vuex';
import state from './states';
import getters from './getters';
import mutations from './mutations';

const
    /*state = {
        todos: [{
            name: 'Пример 1',
            completed: true
        }]
    },*/

    /*mutations = {
        ADD_TODO: (state, name) => {
            state.todos.push({
                name,
                completed: false
            })
        }
    },*/

    /*getters = {
        completedTodos: function (state) {
            return state.todos.filter(todo => todo.completed)
        },
        uncompletedTodos: function (state) {
            return state.todos.filter(todo => !todo.completed)
        },
        uncompletedTodosCount: function (state, getters) {
            return getters.uncompletedTodos(state).length
        },
    },*/

    actions = {
        addTodo: ({commit}, name) => {
            //store.commit('ADD_TODO', name)
            commit('ADD_TODO', name)
        }
    }

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
    strict: process.env.NODE_ENV !== 'production'
})