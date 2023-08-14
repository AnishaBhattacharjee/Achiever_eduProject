import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



// Async thunk to fetch courses
export const FetchCourse = createAsyncThunk('fetchcourse', async () => {
  try {
    const response = await axios.get('https://restapinodejs.onrender.com/api/course');
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to let the caller handle it
  }
});

// Async thunk to apply for a course
export const ApplyCourse = createAsyncThunk('Course/Apply', async (data) => {
  try {
    console.log(data.coursename);
    const response = await axios.post(`https://restapinodejs.onrender.com/api/course/apply/${data.course}`, data);
    return {
      resp: response?.data,
      coursename: data.coursename
    };
  } catch (e) {
    console.log(e.response.data);
    throw e; // Rethrow the error to let the caller handle it
  }

  
});


// Initial state for the course slice
const initialState = {
  course_data: [],
  status: "idle",
  applyStatus: 'idle'
};

// Course slice definition
export const CourseSlice = createSlice({
  name: "Courses",
  initialState,
  reducers: {},

  extraReducers: {
    // Reducer for FetchCourse action
    [FetchCourse.pending]: (state) => {
      state.status = 'loading...';
    },
    [FetchCourse.fulfilled]: (state, { payload }) => {
      state.status = 'success';
      state.course_data = payload;
    },
    [FetchCourse.rejected]: (state) => {
      state.status = 'failed';
    },
    // Reducer for ApplyCourse action
    [ApplyCourse.pending]: (state) => {
      state.applyStatus = 'submitting';
    },
    [ApplyCourse.fulfilled]: (state, { payload }) => {
      state.applyStatus = 'success';

      // Display a toast notification with the course name
      toast.success('Congratulations! You have successfully applied for the course', "success");
      
    },
    [ApplyCourse.rejected]: (state) => {
      state.applyStatus = 'failed';
    }
  }
});

export default CourseSlice.reducer; // Export the reducer as default
