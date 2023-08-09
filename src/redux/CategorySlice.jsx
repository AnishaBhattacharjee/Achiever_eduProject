import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const FetchCategory=createAsyncThunk('categorydata',async()=>{
    try{
        const res=await axios.get('https://restapinodejs.onrender.com/api/showallcategory');
        return res?.data

    }catch(error){
        console.log(error);
    }
})


const initialState={
    category_data :[],
    status:"success"
}

export const CategoryData=createSlice({
    name:"user",
    initialState,
    reducer:{
    },

    extraReducers:{

        [FetchCategory.pending]:(state)=>{
            state.status='loading......'
            state.category_data=null
        },
        [FetchCategory.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.category_data=payload
        },
        [FetchCategory.rejected]:(state)=>{
            state.status='try again'
        }

    }
})