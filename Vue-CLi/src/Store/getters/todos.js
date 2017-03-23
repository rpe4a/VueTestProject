 const getters = {
     completedTodos: (state) => {
         return state.todos.filter(todo => todo.completed)
     },
     uncompletedTodos: (state) => {
         return state.todos.filter(todo => !todo.completed)
     },
     uncompletedTodosCount: (state) => {
         return getters.uncompletedTodos(state).length
     },
 }

 export default getters;