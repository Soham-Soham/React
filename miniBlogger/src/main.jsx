import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Home,AddPost,Profile} from "./pages/index.js"
import { Provider } from 'react-redux'
import store from "./store/store.js"
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import AuthLayout from "./components/AuthLayout.jsx"
import Post from './components/Post.jsx'
import EditPost from './pages/EditPost.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<AuthLayout/>,
    children:[
      {
        path: "/",
        element: <Login/>
      },
      {
        path:"/signup",
        element: <Signup/>
      }
    ]
  }, 
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path: "home",
        element: <Home/>
      },
      {
        path:"add-post",
        element: <AddPost/>
      },
      {
        path:"profile",
        element: <Profile/>
      },
      {
        path: "/post/:slug",
        element: <Post/>
      },
      {
        path:"/edit-post/:slug",
        element: <EditPost/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
