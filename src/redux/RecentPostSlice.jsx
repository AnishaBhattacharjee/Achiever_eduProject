import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const RecentData = createAsyncThunk('recentpost', async () => {
    try {
        const response = await axios.get('https://restapinodejs.onrender.com/api/letest-post')
        return response?.data

    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    recent_data: [],
    status: "success"
}

export const RecentPostData = createSlice({
    name: "recent",
    initialState,
    reducers: {

    },
    extraReducers: {
        [RecentData.pending]: (state) => {
            state.status = "loading.."
            state.recent_data = null
        },
        [RecentData.fulfilled]: (state, { payload }) => {
            state.status = "success"
            state.recent_data = payload
        },
        [RecentData.rejected]: (state) => {
            state.status = "Try again"
        },


    }
})