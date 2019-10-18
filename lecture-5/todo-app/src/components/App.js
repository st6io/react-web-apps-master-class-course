import React from 'react'
import Filters from './Filters'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Filters />
  </div>
)

export default App
