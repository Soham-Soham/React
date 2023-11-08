import React, { useState, useEffect } from 'react'
import authService from '../appwrite/auth'
import databaseService from '../appwrite/database'
import { logout } from "../store/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import GridPosts from '../components/GridPosts'

function Profile() {
  const [userPosts, setUserPosts] = useState([])
  const userData = useSelector(state => state.auth.userData)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logouthandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    }).finally(() => navigate("/"))
  }

  useEffect(() => {
    try {
      if (userData) {
        databaseService.getUserPosts(userData.$id).then((post) => {
          setUserPosts(post.documents)
        })
      }
    } catch (error) {
      console.log("Profile Component:: error", error);
    }
  }, [])

  return (
    <div className=' flex flex-col'>
      {/* banner and profile picture */}
      <div className='text-center w-full h-48 md:h-96 p-2 relative' >

        <div className=' relative w-full h-42 md:h-96 rounded-tr-full rounded-bl-lg '>
          <img src="src\assets\profileBackground.jpg" alt="" className=' w-full h-full rounded-tr-full rounded-bl-full' />
          <div className=' rounded-full overflow-hidden w-32 md:w-60 h-32 md:h-60 absolute top-24 md:top-60 left-32 md:left-72 border-4 border-white'>
            <img src="src\assets\cat.jpg" alt="" className=' w-full h-full' />
          </div>
        </div>

        <div className=' absolute top-0 right-2 mt-1'>
          <button onClick={logouthandler} className=' flex items-center gap-2'>
            <img src="src\assets\icon-logout.png" alt="" className=' w-6 md:w-10' />
            <span className=' font-bold md:text-lg'>logout</span>
          </button>
        </div>

      </div>

      {/* User's Information */}
      <div className=' m-1 p-1 md:mt-5 border-2 rounded-lg'>
         <p className=' text-2xl'> <span className=' font-serif font-semibold'>Name:</span> {userData.name}</p>
         <p className=' text-2xl'> <span className=' font-serif font-semibold'>Email:</span> {userData.email}</p>
      </div>

      {/* Grid layout for User's all post */}
      <div className=' grid grid-cols-2 gap-1 p-2 md:grid-cols-3 md:mt-10'>
        {
          userPosts.map((post) => (
            <div key={post.$id}>
              <Link to={`/post/${post.$id}`}>
                {/* <PostCard {...post} /> */}
                <GridPosts {...post} />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Profile