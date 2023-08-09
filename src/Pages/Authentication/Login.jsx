import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser, RegLog } from '../../redux/AuthSlice';


const initialValue = {
  email: "",
  password: ""
}

const Login = () => {
  const [user, setUser] = useState(initialValue);
  const[loading,setLoading] = useState(false)
  const{redirectTo}=useSelector((state)=>state?.Auth);
  const navigate=useNavigate();
  const [error, setError] = useState({});
  const dispatch = useDispatch();

 


//form validation
const validation = () => {
  let error = {}
  if (!user.email) {
      error.email = "Email is Required"
  } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
  ) {
      error.email = "Enter a valid Email"
  }
  if (!user.password) {
      error.password = "Password is Required"
  }
  return error
}
//onchange validation
let name, value
const postUserData = (e) => {
  name = e.target.name
  value = e.target.value
  setUser({ ...user, [name]: value })
  if (name === "email") {
      if (value.length === 0) {
          setError({ ...error, email: "Email is required" })
          setUser({ ...user, email: "" })
      } else {
          setError({ ...error, email: "" })
          setUser({ ...user, email: value })
      }
  }
  if (name === "password") {
      if (value.length === 0) {
          setError({ ...error, password: "@password is Required" })
          setUser({ ...user, password: "" })
      } else {
          setError({ ...error, password: "" })
          setUser({ ...user, password: value })
      }
  }
}

const SubmitInfo = async (e) => {
  e.preventDefault();
  let ErrorList = validation();
  setError(ErrorList);

  // If there are no errors, proceed with the login process
  if (Object.keys(ErrorList).length === 0) {
    setLoading(true);
    let data = {
      "email": user.email,
      "password": user.password,
    };
    dispatch(LoginUser(data));
  }
};



const redirectUser = () => {
  let token = localStorage.getItem("token")
  let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

  if (token !== null && token !== undefined && token !== "") {
      isInLoginPage && navigate("/");
  }
}

useEffect(()=>{
  redirectUser()
},[redirectTo])

const log = () => {
  dispatch(RegLog())
}

  return (
    <>
      <main id="main">

        <section className="mt-5">
          <div className="container py-4 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100 mt-5">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  <div className="divider d-flex align-items-center my-4">
                    <h1 className="text-center fw-bold mx-3 mb-0 text-muted">LOGIN HERE</h1>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-3">
                    <input type="email" name="email" id="form1Example13" className="form-control form-control-lg" 
                    onChange={e => postUserData(e)}/>
                    <span style={{ color: "red" }}> {error.email} </span>
                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-3">
                    <input type="password" name="password" id="form1Example23" className="form-control form-control-lg" 
                    onChange={e => postUserData(e)}/>
                    <span style={{ color: "red" }}> {error.password} </span>
                    <label className="form-label" htmlFor="form1Example23">Password</label>
                  </div>
                  {loading?
                  <>
                  <button type="submit" 
                  disabled
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                  }}
                  className="btn btn-success btn-lg btn-block">
                    <span
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                    ></span>
                    Loading...
                    </button>
                  <div className="divider d-flex align-items-center my-3">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">DON'T HAVE AN ACCOUNT? <Link to='/register' onClick={log}><b>REGISTER HERE</b></Link></p>
                  </div>
                  </>:<>
                  <button type="submit" className="btn btn-success btn-lg btn-block" onClick={SubmitInfo}>Login</button>
                  <div className="divider d-flex align-items-center my-3">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">DON'T HAVE AN ACCOUNT? <Link to='/register' onClick={log}><b>REGISTER HERE</b></Link></p>

                  </div>
                  </>}
                  

                </form>
              </div>
            </div>
          </div>
        </section>


      </main>

    </>
  )
}

export default Login