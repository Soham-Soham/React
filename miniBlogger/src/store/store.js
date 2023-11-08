import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"

const storedUserState = localStorage.getItem("userState");
const userAuthState = storedUserState ? JSON.parse(storedUserState) : {};

const store = configureStore({
    reducer:{
        auth: authReducer,
    },
    preloadedState:{
        auth: userAuthState
    },
})

export default store