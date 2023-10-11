import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function TodoForm() {
    const [todoText,setTodoText] = useState("")
    const dispatch = useDispatch()
    
    const add = (e)=>{
       e.preventDefault()
       dispatch(addTodo(todoText))
       setTodoText("")
    }
  return (
    <div className=' bg-violet-800 p-2'>
        <form onSubmit={add} >
            <input 
             type="text" 
             placeholder='Enter Task. . . . .' 
             className='px-2 outline-none'
             value={todoText}
             onChange={(e)=>setTodoText(e.target.value)}
            />
            <button type="submit" className=' bg-green-500 px-2'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm