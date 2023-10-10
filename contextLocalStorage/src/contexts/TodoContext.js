import React from "react";
import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            task: "First Task",
            completed: false,
        }
    ],
    addTodo: (task)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id,task)=>{},
    toggleComplete: (id)=>{}
})

export function useTodo(){
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider