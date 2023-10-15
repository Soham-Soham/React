import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems =[
    {
        name: 'Home',
        slug: '/',
        active: true
    },
    {
        name: 'Login',
        slug: '/login',
        active: !authStatus,
    },
    {
        name: 'Signup',
        slug: '/signup',
        active: !authStatus,
    },
    {
        name: 'All Posts',
        slug: '/all-post',
        active: authStatus,
    },
    {
        name: 'Add Post',
        slug: '/add-post',
        active: authStatus,
    },
  ]

  return (
    <header className=''>
        <nav className=' flex items-center justify-between'>
            <div>
                <Link to="/">
                   <h1 className='font-bold font-serif bg-gradient-to-r from-violet-950 text-transparent bg-clip-text text-3xl'>miniBlogger</h1>
                </Link>
            </div>
            <ul className=' flex gap-5'>
              {
                navItems.map((item)=> 
                    item.active ? (
                      <li key={item.name}>
                        <button onClick={()=>navigate(item.slug)}>{item.name}</button>
                      </li>
                    ):null)
              }
              {
                authStatus && (
                <li>
                    //LogoutBtn component
                    <LogoutBtn/>
                </li>
              )}
            </ul>
        </nav>
    </header>
  )
}

export default Header