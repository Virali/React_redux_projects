let nextTodoId = 0;

export const addTodo = (text, date) => {
   return {
   type: 'ADD_TODO',
   id: nextTodoId++, 
   text,
   date
}}

export const toggleTodo = id => ({
   type: 'TOGGLE_TODO',
   id
})

export const deleteTodo = id => ({
   type: 'DELETE_TODO',
   id
})