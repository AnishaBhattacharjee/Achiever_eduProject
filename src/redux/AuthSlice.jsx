import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { axiosInstance } from "../api/AxiosInstance";
import { toast } from "react-toastify";
import axios from "axios";
// import { Navigate } from "react-router-dom";

const initialState = {
    loading: false,
    user: {},
    redirectReg: null,
    LogoutToggle: false,
    redirectTo: null
}

export const registerUser = createAsyncThunk('/signup', async (user) => {
    try {
        const res = await axios.post("https://restfullapinodejs1.onrender.com/api/register", user);
        return res?.data
    }
    catch (error) {
        toast(error?.response?.data?.msg);
        console.log(error);
    }
})

export const LoginUser = createAsyncThunk('/login', async (user) => {
    try {
        const res2 = await axios.post("https://restfullapinodejs1.onrender.com/api/login", user);
        return res2?.data
    }
    catch (error) {
        toast(error?.response?.data?.msg);
        console.log(error);
    }
})


export const AuthSlice = createSlice({
    name: "user",
    initialState,

    reducers: {

        redirectToRegister: (state, { payload }) => {
            state.redirectReg = payload
        },

        RegLog: (state, { payload }) => {
            localStorage.removeItem("name")
            localStorage.removeItem("email")
            localStorage.removeItem("mobile")
            state.LogoutToggle = false
        },

        redirectToLogin: (state, { payload }) => {
            state.redirectTo = payload
        },

        LogoutUser:(state,{payload})=>{
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            localStorage.removeItem("email")
            localStorage.removeItem("mobile")
            toast.success("Loggedout Successfully")
            state.LogoutToggle = false
        },
        check_token: (state, { payload }) => {
            let token = localStorage.getItem("token");
            if (token !== null && token !== undefined) {
                state.LogoutToggle = true;
            }
          }
    },


    extraReducers: {

        [registerUser.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            if (payload?.success === true) {
                localStorage.setItem("name", payload.data.name)
                localStorage.setItem("email", payload.data.email)
                localStorage.setItem("mobile", payload.data.mobile)
                state.redirectReg = '/login'
                toast(`Hi ${payload?.data?.name}, Registered Successfully`)
            }
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        
        [LoginUser.pending]: (state, action) => {
            state.loading = true;
        },
        [LoginUser.fulfilled]: (state, { payload }) => {
            if (payload?.status === 200) {
                localStorage.setItem("token", payload?.token);
                localStorage.setItem("name", payload?.user.name);
                localStorage.setItem("email", payload?.user.email);
                localStorage.setItem("mobile", payload?.user.mobile);
                state.LogoutToggle = true
                state.redirectTo = "/"
                toast(payload?.message)
            }
        },
        [LoginUser.rejected]: (state, action) => {
            state.loading = false;

        }

    }
})

export const { redirectToRegister, RegLog, redirectToLogin,LogoutUser,check_token } = AuthSlice.actions