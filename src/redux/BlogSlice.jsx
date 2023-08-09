import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { axiosInstance } from "../api/AxiosInstance";
import axios from "axios";

export const FetchBlog=createAsyncThunk('fetchBlogdata',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/allBlog');
        return res?.data

    }catch(error){
        console.log(error);
    }
})



const initialState={
    blog_data:[],
    status:"success"
}

export const BlogSlice=createSlice({
    name:"user",
    initialState,
    reducer:{
    },

    extraReducers:{

        [FetchBlog.pending]:(state)=>{
            state.status='loading......'
            state.blog_data=null
        },
        [FetchBlog.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.blog_data=payload
        },
        [FetchBlog.rejected]:(state)=>{
            state.status='try again'
        }

    }
})