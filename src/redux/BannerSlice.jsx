import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchBanner=createAsyncThunk('fetchbanner', async()=>{
    try{
        const response2= await axios.get('https://restapinodejs.onrender.com/api/banner')
        return response2?.data
    }catch(error){
        console.log(error);
    }
    })


const initialState={
    banner_data:[],
    status:"success"
}

export const BannerSlice=createSlice({
    name:"user",
    initialState,
    reducer:{
    },

    extraReducers:{

        [FetchBanner.pending]:(state)=>{
            state.status='loading......'
            state.banner_data=null
        },
        [FetchBanner.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.banner_data=payload
        },
        [FetchBanner.rejected]:(state)=>{
            state.status='try again'
        }

    }
})