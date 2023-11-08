import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Input, Button } from "./index"
import { useForm } from "react-hook-form"
import authService from '../appwrite/auth'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactLoading from "react-loading"


function Login() {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const signin = async (data) => {
    try {
      const session = await authService.login(data)
      if (session) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(authLogin(userData));
        navigate("/home")

      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {
        loading && <div className=' h-screen flex flex-col justify-center items-center bg-slate-950 overflow-hidden px-5'>
           <h1 className='text-6xl bg-gradient-to-r bg-clip-text text-transparent from-green-600 to-green-950 via-green-800 font-extrabold md:text-9xl py-5 ml-10 animate-bounce text-center'>MiniBlogger</h1>
           <div>
              <ReactLoading type='bars' color='#16a34a' height={200} width={200} delay={10} className=' opacity-20 md:opacity-30 ' />
           </div>
        </div>
      }

      {!loading && 
      <div className=' h-screen flex justify-evenly items-center mx-5'>
        {/* login page image */}
        <div className='hidden md:block'>
           <img src="src\assets\loginSignup.png" alt="" height="700" width="700" />
        </div>
        {/* login form */}
      <div className=' h-screen overflow-hidden flex flex-col justify-center items-center'>
        <div className=' mb-8 text-center'>
          <h3 className=' text-2xl md:text-5xl text-center font-bold text-green-600 opacity-40'>Hello! <br /> Welcome Back</h3>
          <h1 className=' text-3xl md:text-6xl font-extrabold text-green-700 opacity-80'>Login to your Account</h1>
        </div>

        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(signin)} className=' p-5 md:p-8 border-green-500 border-2 rounded-md mb-8 md:mb-12 w-full'>
          <Input
            label="Email"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              }
            })}
            className="mb-3 md:text-2xl"
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter Your Password"
            {...register("password", {
              required: true,
            })}
            className="mb-5 md:text-2xl"
          />
          <Button
            type='submit'
            className="w-full md:text-xl bg-slate-900 text-white font-bold px-10 md:px-20 py-2 md:py-4 rounded-md"
          >Login</Button>
        </form>

        <div>
           <h3 className=' text-center leading-8 md:text-xl'>Don't have an Account ? <Link to="/signup" className=' font-bold border-2 border-slate-900 px-10 md:px-12 py-2 md:py-4 md:text-xl rounded-md  hover:bg-yellow-500 hover:border-none hover:text-white'>SignUp</Link></h3>
        </div>

      </div>

      </div>
      }
    </>
  )
}

export default Login