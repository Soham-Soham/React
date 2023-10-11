import { nanoid } from '@reduxjs/toolkit'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)
  return (
    <>
      
        <TodoForm/>
        <ul>
          {
            todos.map((todo)=>(
              <li key={todo.id}>
                 <TodoItems todo={todo}/>
              </li>
            ))
          }
        </ul>
    </>
  )
}

export default App
