import React, { useState } from 'react'
import authService from "../appwrite/auth"
import { login } from "../store/authSlice"
import { Input, Button } from './index'
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

function Signup() {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const create = async (data) => {
    setError("")
    try {
      const newAccount = await authService.createAccount(data)
      if (newAccount) {
        const userData = await authService.getCurrentUser()
        if (userData) dispatch(login(userData));
        navigate("/home")
      }
    } catch (error) {
      console.log("Signup component :: error", error);
      setError(error.message)
    }
  }

  return (
    <div className='h-screen flex justify-evenly items-center mx-5'>
      {/* signup Image */}
      <div className='hidden md:block'>
        <img src="src\assets\Sign uppage.png" alt="" height="700" width="700" />
      </div>
      {/* signup form */}
      <div className=' h-screen overflow-hidden flex flex-col justify-center items-center'>
        <div className=' mb-8 text-center'>
          <h3 className=' text-2xl md:text-5xl text-center font-bold text-green-600 opacity-40'>Your Stories, Your Voice</h3>
          <h1 className=' text-3xl md:text-6xl font-extrabold text-green-700 opacity-80'>Sign Up Now</h1>
        </div>
        
        {error && <p className=' text-red-600'>{error}</p>}
        <form onSubmit={handleSubmit(create)} className=' p-5 md:p-8 border-green-500 border-2 rounded-md mb-8 md:mb-12 w-full'>
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
            className="mb-3 md:text-2xl"
          />

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
              required: true
            })}
            className="mb-5 md:text-2xl"
          />

          <Button 
          type='submit' 
          className=" w-full md:text-xl bg-slate-900 text-white font-bold px-10 md:px-20 py-2 md:py-4 rounded-md"
          >SignUp</Button>
        </form>

        <div>
           <h3 className=' text-center leading-8 md:text-xl'>Have an Account ? <Link to="/" className=' font-bold border-2 border-slate-900 px-10 md:px-12 py-2 md:py-4 md:text-xl rounded-md  hover:bg-yellow-500 hover:border-none hover:text-white'>Login</Link> </h3>
        </div>
      </div>
    </div>
  )
}

export default Signup