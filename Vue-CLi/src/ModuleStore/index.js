import Vuex from 'vuex';
import todos from './todos';

export default new Vuex.Store({
    modules: {
        todos 
    },
    strict: process.env.NODE_ENV !== 'production'
})