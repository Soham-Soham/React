import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
  
    return(
      <div className=' h-screen flex flex-col items-center '>
        <div className=' flex-1 overflow-y-auto mt-5 '>
         <Outlet/>
        </div>

        <div className=' fixed bottom-0 bg-white shadow shadow-black w-full h-20 flex rounded-tr-2xl rounded-tl-3xl z-50'>
         <Header/>
        </div>
      </div>
     )
  
 
}

export default App
