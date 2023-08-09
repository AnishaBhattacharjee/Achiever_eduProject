import React from 'react'
import Logo from '../../common/LogoImage/Logo.png'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
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
                  <img src={Logo} style={{width: 230}} alt="logo" />
                  {/* <h2 className="mt-1 mb-4 pb-1 logo"><a href="index.html"></a></h2> */}
                </div>
                <form>
                <h3 className="text-left fw-bold mx-1 mb-3 mt-4 text-muted">RESET PASSWORD</h3>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Example11">Email Address</label>
                    <input type="email" id="form2Example11" className="form-control" placeholder="" />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Example11">New Password</label>
                    <input type="password" id="form2Example11" className="form-control" placeholder="" />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Example22">Enter Answer</label>
                    <input type="text" id="form2Example22" className="form-control" />
                  </div>
                  <div className="text-center pt-3  pb-1">
                    <button className="btn btn-success btn-block mb-3" type="button">Reset</button>
                    <p>CREATED NEW PASSWORD? <Link className="text-muted" to='/login'> <b>LOGIN</b></Link></p>
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

export default ForgetPassword