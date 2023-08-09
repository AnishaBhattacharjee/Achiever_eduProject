import React, { useEffect, useState } from 'react'
import Logo from '../../common/LogoImage/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/AuthSlice'


const initialValue = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  // address: "",
  // answer: ""
}

const Register = () => {
  const { redirectReg } = useSelector((state) => state?.Auth);
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const validation = () => {
    let error = {}

    if (!user.name) {
      error.name = "Name is Required"
    }

    if (!user.email) {
      error.email = "Email is Required"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
      error.email = "Enter a valid Email"
    }

    if (!user.mobile) {
      error.mobile = "Mobile is Required"
    }
    if (!user.password) {
      error.password = "Password is Required"
    }
    //   if (!user.address) {
    //     error.address = "Address is Required"
    // }
    //   if (!user.answer) {
    //     error.answer = "Answer is Required"
    // }
    return error
  }

  let name, value
  const postUserData = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })


    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setUser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setUser({ ...user, name: value })
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
      }
    }
    if (name === "mobile") {
      if (value.length === 0) {
        setError({ ...error, mobile: "@mobile is Required" })
        setUser({ ...user, mobile: "" })
      } else {
        setError({ ...error, mobile: "" })
        setUser({ ...user, mobile: value })
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
    e.preventDefault()
    let ErrorList = validation()
    setError(validation())
    let formData = new FormData();
    if (Object.keys(ErrorList).length === 0) {
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("mobile", user.mobile);
      formData.append("password", user.password);
      dispatch(registerUser(formData))
    }
  }

  const redirectUser = () => {
    let name = localStorage.getItem("name")
    let isInLoginPage = window.location.pathname.toLowerCase() === "/register";
    if (name !== null && name !== undefined && name !== "") {
      isInLoginPage && navigate("/login");
    }
  }


  useEffect(() => {
    redirectUser()
  }, [redirectReg])


  return (
    <>
      <main id="main">

        <section className=" gradient-form " >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black my-5">
                  <div className="row g-0">
                    <div className="col-lg-6 ">
                      <div className="card-body p-md-5 mx-md-4">
                        <div>
                          <img src={Logo} style={{ width: 230 }} alt="logo" />
                          {/* <h2 className="mt-1 mb-4 pb-1 logo"><a href="index.html"></a></h2> */}
                        </div>
                        <form>
                          <h3 className="text-left fw-bold mx-1 mb-3 mt-4 text-muted">REGISTER NOW</h3>
                          <div className="form-outline mb-3">
                            <label className="form-label " htmlFor="form2Example11">Username</label>
                            <input type="text" name="name" id="form2Example11" className="form-control" placeholder=""
                              value={user.name}
                              onChange={e => postUserData(e)} />
                          </div>
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form2Example11">Email Address</label>
                            <input type="email" name="email" id="form2Example11" className="form-control" placeholder=""
                              value={user.email}
                              onChange={e => postUserData(e)} />
                          </div>
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form2Example11">Password</label>
                            <input type="password" name="password" id="form2Example11" className="form-control" placeholder=""
                              value={user.password}
                              onChange={e => postUserData(e)} />
                          </div>
                          <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form2Example22">Phone</label>
                            <input type="number" name="mobile" id="form2Example22" className="form-control"
                              value={user.mobile}
                              onChange={e => postUserData(e)} />
                          </div>
                          {/* <div className="form-outline mb-2">
                            <input type="text" name="address" id="form2Example22" className="form-control" value={user.address}/>
                            <label className="form-label" htmlFor="form2Example22">Address</label>
                          </div>
                          <div className="form-outline mb-2">
                            <input type="text" name="answer" id="form2Example22" className="form-control" value={user.answer}/>
                            <label className="form-label" htmlFor="form2Example22">Enter Answer</label>
                          </div> */}
                          <div className="text-center pt-3  pb-1">
                            <button className="btn btn-success btn-block mb-3" type="button" onClick={SubmitInfo}>Register</button>
                            <p>ALREADY HAVE AN ACCOUNT? <Link className="text-muted" to='/login'> <b>LOGIN</b></Link></p>
                          </div>

                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h1 className="mb-4">We are more than just a company</h1>
                        <p className="large mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Esse modi ex laboriosam maxime culpa harum ratione magni sit magnam,
                          itaque, adipisci omnis molestias velit odio reprehenderit reiciendis
                          et amet vitae minima officiis blanditiis recusandae quisquam facilis perspiciatis! Delectus, quod.
                          Soluta distinctio earum nam magni vitae error debitis, minus similique ex.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default Register