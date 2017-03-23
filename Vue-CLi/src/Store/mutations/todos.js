import {ADD_TODO} from '../mutation-types';

export default {
    [ADD_TODO]: (state, name) => {
        state.todos.push({
            name,
            completed: false
        })
    }
}