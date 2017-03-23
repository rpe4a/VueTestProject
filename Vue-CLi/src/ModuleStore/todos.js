import {
    ADD_TODO
} from '../Store/mutation-types'

const state = [{
        name: 'Пример 1',
        completed: true
    }],

    getters = {
        completedTodos: (state) => {
            return state.filter(todo => todo.completed)
        },
        uncompletedTodos: (state) => {
            return state.filter(todo => !todo.completed)
        },
        uncompletedTodosCount: (state) => {
            return getters.uncompletedTodos(state).length
        },
    },

    actions = {
        addTodo: ({
            commit
        }, name) => {
            commit(ADD_TODO, name)
        }
    },

    mutations = {
        [ADD_TODO]: (state, name) => {
            state.push({
                name,
                completed: false
            })
        }
    }

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}