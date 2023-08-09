import React from 'react'

const Dashboard = () => {
    const name=localStorage.getItem("name");
    const email=localStorage.getItem("email");
    const mobile=localStorage.getItem("mobile");
    
  return (
    <>

<section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center pt-3">
          <h2>User Details</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>User</li>
          </ol>
        </div>
      </div>
    </section>
    
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className='my-5'>
    <div className="card mb-5 mt-5" style={{maxWidth: 600}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="assets/img/testimonials/testimonials-3.jpg" alt="..." style={{width:'100%', objectFit:"cover"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <p className="card-text">Email Id: {email}</p>
        <p className="card-text">Contact No: {mobile}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </div>
    


    </>
  )
}

export default Dashboard