
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchTeam=createAsyncThunk('fetchteam', async()=>{
    try{
        const response2= await axios.get('https://restapinodejs.onrender.com/api/team')
        return response2?.data
    }catch(error){
        console.log(error);
    }
    })


const initialState={
    team_data:[],
    status:"success"
}

export const TeamSlice=createSlice({
    name:"user",
    initialState,
    reducer:{
    },

    extraReducers:{

        [FetchTeam.pending]:(state)=>{
            state.status='loading......'
            state.team_data=null
        },
        [FetchTeam.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.team_data=payload
        },
        [FetchTeam.rejected]:(state)=>{
            state.status='try again'
        }

    }
})