import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { useParams } from "react-router-dom";



export const FetchBlogDetails=createAsyncThunk('fetchBlogdetails', async(id)=>{
    // const {_id}=useParams()
    try{
        const result=await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`);
        return result?.data?.data
    }catch(error){
        console.log(error);
    }
})

const initialState={
    details_data:{},
    status:"success"
}

export const DetailsSlice=createSlice({
    name:"details",
    initialState,
    reducer:{

    },

    extraReducers:{
        [FetchBlogDetails.pending]:(state)=>{
            state.status='loading......'
            state.details_data=null
        },
        [FetchBlogDetails.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.details_data=payload
        },
        [FetchBlogDetails.rejected]:(state)=>{
            state.status='Try again'
        }
    }
})

