import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchTestimonial=createAsyncThunk('fetchtest', async()=>{
    try{
        const response2= await axios.get('https://restapinodejs.onrender.com/api/testimonial')
        return response2?.data
    }catch(error){
        console.log(error);
    }
    })


const initialState={
    test_data:[],
    status:"success"
}

export const TestimonialSlice=createSlice({
    name:"user",
    initialState,
    reducer:{
    },

    extraReducers:{

        [FetchTestimonial.pending]:(state)=>{
            state.status='loading......'
            state.test_data=null
        },
        [FetchTestimonial.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.test_data=payload
        },
        [FetchTestimonial.rejected]:(state)=>{
            state.status='try again'
        }

    }
})