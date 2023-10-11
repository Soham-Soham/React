import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo,updateTodo } from '../features/todo/todoSlice'

function TodoItems({ todo }) {
  const dispatch = useDispatch()
  const [isEditable, setIsEditable] = useState(false)
  const [inputText, setInputText] = useState(todo.text)
  const inputRef = useRef(null)

  useEffect(()=>{
    if(isEditable){
      dispatch(updateTodo({id: todo.id,text: inputText}))
      inputRef.current.focus()
    }
  },[isEditable,inputText])

  const toggleEditMode = ()=>{
    setIsEditable(!isEditable)
  }

  return (
    <div className=' flex justify-center mt-3 bg-violet-100 py-2'>
        <input
          ref={inputRef}
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={` bg-white px-5 rounded font-bold outline-none ${isEditable ? "" : "cursor-pointer"} `}
          readOnly={!isEditable}
        />
        <div>
          <button onClick={toggleEditMode} className='bg-green-900 text-white px-1 ml-2'>{isEditable ? "Done" : "Edit"}</button>
          <button onClick={() => dispatch(removeTodo(todo.id))} className=' bg-green-900 hover:bg-green-700 mx-2 px-2 text-white rounded'>remove</button>
        </div>
    </div>
  )
}

export default TodoItems