import React,{useState} from 'react'
import authService from '../appwrite/auth'
import {Input,Button} from './index'
import { login } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'


function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState("")

    const create = async(data)=>{
       setError("")
       try {
         const session = await authService.createAccount(data)
         if(session){
           const userData = await authService.getCurrentUser()
           if(userData) dispatch(login(userData));
           navigate('/')
         }

       } catch (error) {
          setError(error.message)
       }
    }

  return (
    <div>
      <div>
        <div>
          <h1 className='font-bold font-serif bg-gradient-to-r from-violet-950 text-transparent bg-clip-text text-3xl'>miniBlogger</h1>
        </div>
        <h2>Sign up to create account</h2>
        <p>
            Already have an account ? 
            <Link to="/" >
              Sign In
            </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div>
            <Input
             label="Full Name: "
             placeholder="Enter your full name"
             {...register("name",{
                required: true,
             })}
            />

            <Input
             label="Email: "
             placeholder="Enter your Email"
             type="email"
             {...register("email",{
                required: true,
                validate:{
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
             })}
            />

            <Input
             label="Passwor"
             placeholder="Enter your password"
             type="password"
             {...register("password",{
                required: true,
             })}
            />

            <Button type='submit'>Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup