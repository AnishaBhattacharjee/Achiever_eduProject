import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Logo from './LogoImage/Logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { LogoutUser } from '../redux/AuthSlice'
import { FaUserCheck } from "react-icons/fa6";

const Navbar = () => {
  const{LogoutToggle}=useSelector((state)=>state?.Auth);
  const name=localStorage.getItem("name");
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const logOut=(e)=>{
    e.preventDefault()
    dispatch(LogoutUser())
    navigate("/login")
  }

  return (
    <>
<header id="header" className="fixed-top">
  <div className="container d-flex align-items-center">
    {/* <h1 className="logo mr-auto"><a href="index.html"><span>Com</span>pany</a></h1> */}
    {/* Uncomment below if you prefer to use an image logo */}
    <Link to='/' className="logo mr-auto"><img src={Logo} alt className="img-fluid" /></Link>
    <nav className="nav-menu d-none d-lg-block ">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link>
        </li>
        <li><Link to='/course'>Courses</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {/* <li><Link to='/test'>CourseSkeleton</Link></li> */}
        

        {LogoutToggle ? 
      <>
      <li><Link to='/user'>Hello {name} <FaUserCheck style={{fontSize:'20px', marginLeft:'5px'}}/></Link></li>
      <li><Link onClick={logOut}>Logout</Link></li>
      </>:
      <>
      <li><Link to='/login'>Login</Link></li>
      </>  
      }
        
      </ul>
    </nav>{/* .nav-menu */}
    <div className="header-social-links">
      <a href="#" className="twitter"><i className="icofont-twitter" /></a>
      <a href="#" className="facebook"><i className="icofont-facebook" /></a>
      <a href="#" className="instagram"><i className="icofont-instagram" /></a>
      <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
    </div>
  </div>
</header>


    </>
  )
}

export default Navbar