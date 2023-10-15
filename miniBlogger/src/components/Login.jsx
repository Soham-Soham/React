import React,{useState} from "react";
import {Input,Button} from './index'
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import {useForm} from "react-hook-form";
import {login as authLogin} from "../store/authSlice"
import { Link,useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error,setError] = useState("")

    const login = async(data)=>{
       setError("")
       try {
         const session = await authService.login(data)
         if(session){
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(authLogin(userData));
            navigate("/")
         }
       } catch (error) {
           setError(error.message)
       }
    }

    return(
        <div className=" flex">
           <div>
              <div>
                   <h1 className='font-bold font-serif bg-gradient-to-r from-violet-950 text-transparent bg-clip-text text-3xl'>miniBlogger</h1>
              </div>
              <h2>Sign in to your Account</h2>
              <p>
                Dont't have any account 
                <Link to="/signup" className=" hover:underline italic font-semibold">
                   Sign Up
                </Link> 
              </p>
              {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
              <form onSubmit={handleSubmit(login)}>
                 <Input
                  label="Email: "
                  placeholder="Enter your email"
                  type="email"
                  {...register("email",{
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                  })}
                 />

                 <Input
                  label="Password: "
                  type="password"
                  placeholder="Enter your password"
                  {...register("password",{
                    required: true
                  })}
                 />

                 <button type="submit">Sign in</button>
              </form>
           </div>
        </div>
    )
}

export default Login