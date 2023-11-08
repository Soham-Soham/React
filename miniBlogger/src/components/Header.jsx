import React from 'react'
import {NavLink} from "react-router-dom"
import {useSelector} from "react-redux"
import "../App.css"

function Header() {
    //const userStatus = useSelector(state => state.auth.status)
    const userStatus = true
    
    const navItems = [
        {
            name: <img src="\src\assets\icon-home.png" alt="" className='' />,
            slug: "home",
            active: userStatus
        },
        {
            name: <img src="\src\assets\icon-add.png" alt="" />,
            slug: "add-post",
            active: userStatus
        },
        {
            name: <img src="\src\assets\icon-profile.png" alt="" />,
            slug: "profile",
            active: userStatus
        }
    ]

  return (
    <header className='w-full flex items-center justify-center'>
        <nav className=' flex justify-center'>
            <ul className=' flex justify-evenly'>
                {
                    navItems.map((iteam)=> iteam.active ?(
                        <NavLink 
                        key={iteam.name}
                        to={iteam.slug}
                        className={({isActive})=>` mx-8 p-2 rounded-full ${isActive ? " bg-green-500": ""}`}
                        >
                         {iteam.name}
                        </NavLink>
                    ):null)
                }
            </ul>
        </nav>
    </header>
  )
}

export default Header