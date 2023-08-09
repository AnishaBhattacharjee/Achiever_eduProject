
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import swal from "sweetalert";


export const FetchCourse=createAsyncThunk('fetchcourse', async()=>{
    try{
        const response3= await axios.get('https://restapinodejs.onrender.com/api/course')
        return response3?.data
    }catch(error){
        console.log(error);
    }
    })

    

    export const ApplyCourse = createAsyncThunk('Course/Apply', async (data) => {
        try {
            console.log(data.course_name)
            const response = await axios.post(`'https://restapinodejs.onrender.com/api/course/apply/${data.course}`, data)
            const responseData = {
                resp: response?.data,
                coursename: data?.course_name
            }
            return responseData
        } catch (e) {
            return e.response.data
        }
    })

const initialState={
    course_data:[],
    status:"success",
    applyStatus: 'idle'
}

export const CourseSlice=createSlice({
    name:"Courses",
    initialState,
    reducers:{
    },

    extraReducers:{

        [FetchCourse.pending]:(state)=>{
            state.status='loading......'
            state.course_data=null
        },
        [FetchCourse.fulfilled]:(state,{payload})=>{
            state.status='success'
            state.course_data=payload
        },
        [FetchCourse.rejected]:(state)=>{
            state.status='try again'
        },
        [ApplyCourse.pending]: (state) => {
            state.applyStatus = 'submitting'
        },
        [ApplyCourse.fulfilled]: (state, { payload }) => {
            state.applyStatus = 'success'
            
            toast.success("Congratulations!", `You have successfully applied for ${payload?.coursename}`, "success")
            
        },
        [ApplyCourse.rejected]: (state) => {
            state.applyStatus = 'failed'
        }

    }
})
