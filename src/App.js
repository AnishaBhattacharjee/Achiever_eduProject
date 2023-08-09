
import { useEffect } from 'react';
// import MyRoute from './component/routing/MyRoute';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import BlogDetails from './Pages/BlogDetails';
import CategoryDetails from './Pages/CategoryDetails';
import Course from './Pages/Course';
import Conatct from './Pages/Conatct';
import { check_token } from './redux/AuthSlice';
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Apply from './component/Course/Apply';
import SearchData from './Pages/SearchData';
import Dashboard from './Pages/Dashboard';
import CourseSkeleton from './component/Course/CourseSkeleton';


function App() {
  const dispatch = useDispatch();


  //check token 
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token !== null && token !== undefined ? (
      children
    ) : (
     
      <Navigate to='/login' />
    )
  }

  useEffect(() => {
    dispatch(check_token())
  }, [])

  const PublicRouting = [
    {
      path: "/login",
      Component: <Login />
    },
    {

      path: "/register",
      Component: <Register />
    },
    // {

    //   path: "/forgetpassword",
    //   Component: <ForgetPassword />
    // },
    {
      path: '/',
      Component: <Home />
    },
    {
      path: '/about',
      Component: <About />
    },
    {
      path: '/course',
      Component: <Course />
    },
    {
      path: '/test',
      Component: <CourseSkeleton/>
    },
    {
      path: '/blog',
      Component: <Blog />
    }

  ]

  const PrivateRouting = [
    
    {
      path: '/blogdetails/:id',
      Component: <BlogDetails />
    },
    {
      path: '/categorydetails/post/:id',
      Component: <CategoryDetails />
    },

    {
      path: '/contact',
      Component: <Conatct />
    },
    {
      path: '/apply/:course/:id',
      Component: <Apply />
    },
    {
      path: '/search',
      Component: <SearchData />
    },
    {
      path: '/user',
      Component: <Dashboard />
    }
    
  ]

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {PublicRouting?.map((route, index) => {
            return (
              <Route
                Key={index + 1}
                exact
                path={route.path}
                element={route?.Component}
              />
            )
          })}


          {PrivateRouting?.map((route) => {
            return (
              <Route
                path={route.path}
                element={<PrivateRoute>{route?.Component}</PrivateRoute>}
              />
            )
          })}

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
