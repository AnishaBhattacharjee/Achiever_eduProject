import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchService=createAsyncThunk('fetchservice', async()=>{
try{
    const response= await axios.get('https://restapinodejs.onrender.com/api/service')
    return response?.data
}catch(error){
    console.log(error);
}
})


const initialState={
    service_data:[],
    status:"success"
}

export const ServiceSlice=createSlice({
    name:"user",
    initialState,
    reducer:{
    },

    extraReducers:{

        [FetchService.pending]:(state)=>{
            state.status='loading......'
            state.service_data=null
        },
        [FetchService.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.service_data=payload
        },
        [FetchService.rejected]:(state)=>{
            state.status='try again'
        }

    }
})