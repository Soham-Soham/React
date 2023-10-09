import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import CardUI from './components/CardUI'
import ThemeBtn from './components/ThemeBtn'
import {ThemeProvider} from "./contexts/Theme"

function App() {
  const [theme,setTheme] = useState("light")
  const lightTheme = ()=>{
     setTheme("light")
  }
  const darkTheme = ()=>{
    setTheme("dark")
  }
  
  useEffect(()=>{
     document.querySelector('html').classList.remove("light","dark")
     document.querySelector("html").classList.add(theme)
  },[theme])
  return (
    <ThemeProvider value={{theme,darkTheme,lightTheme}}>
      <ThemeBtn/>
      <CardUI/>
    </ThemeProvider>
  )
}

export default App
