// import React, { useEffect } from 'react'

// import Navbar from '../../common/Navbar';
// import Home from '../../Pages/Home';
// import Footer from '../../common/Footer';
// import Blog from '../../Pages/Blog';
// import About from '../../Pages/About';
// import BlogDetails from '../../Pages/BlogDetails';
// import Login from '../../Pages/Authentication/Login';
// import Register from '../../Pages/Authentication/Register';
// // import ForgetPassword from '../../Pages/Authentication/ForgetPassword';
// import Course from '../../Pages/Course';
// import { useDispatch } from 'react-redux';
// import { check_token } from '../../redux/AuthSlice';
// import Conatct from '../../Pages/Conatct';
// import CategoryDetails from '../../Pages/CategoryDetails';
// // import { toast } from 'react-toastify';


// const MyRoute = () => {
//   const dispatch = useDispatch();


//   //check token 
//   function PrivateRoute({children}){
//     const token =localStorage.getItem("token")||sessionStorage.getItem("token");
//     return token!== null && token !== undefined?(
//       children
//     ):(
//       <Navigate to='/login'/>
//     )
//   }


//   useEffect(() => {
//     dispatch(check_token())
//   }, [dispatch])


//   const PublicRouting = [
//     {
//       path: "/login",
//       Component: <Login />
//     },
//     {

//       path: "/register",
//       Component: <Register />
//     },
//     // {

//     //   path: "/forgetpassword",
//     //   Component: <ForgetPassword />
//     // },
//     {
//       path: '/',
//       Component: <Home />
//     }
//   ]

//   const PrivateRouting = [
//     {
//       path: '/about',
//       Component: <About />
//     },

//     {
//       path: '/blog',
//       Component: <Blog />
//     },
//     {
//       path: '/blogdetails/:id',
//       Component: <BlogDetails />
//     },
//     {
//       path: '/categorydetails/post/:id',
//       Component: <CategoryDetails />
//     },
//     {
//       path: '/course',
//       Component: <Course />
//     },
//     {
//       path: '/contact',
//       Component: <Conatct />
//     },

//   ]

  
//   return (
//     <>
      
//     </>
//   )
// }

// export default MyRoute
