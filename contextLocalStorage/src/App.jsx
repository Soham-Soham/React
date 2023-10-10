import { useState, useEffect } from 'react'
import './App.css'
import {TodoProvider} from "./contexts/TodoContext"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {

  const [todos,setTodos] = useState([])

  const addTodo =(task)=>{
     setTodos((prev)=>[{id:Date.now(),...task},...prev])
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevTask)=>prevTask.id !== id))
  }

  const updateTodo = (id,task)=>{
    setTodos((prev)=>(
      prev.map((prevTask)=>prevTask.id === id ? task : prevTask)
    ))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>
      prev.map((prevTask)=>prevTask.id === id ? {...prevTask,completed:!prevTask.completed} : prevTask )
    )
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className="bg-violet-900 min-h-screen py-2 rounded-lg">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 bg-violet-950 py-2 rounded-lg">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                <div key={todo.id} className=' w-full'>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
