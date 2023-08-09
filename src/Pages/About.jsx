import React from 'react'
import Team from '../component/About/Team'
import HAbout from '../component/Home/HAbout'

const About = () => {
  return (
    <>
    <main id="main">

   <section id="breadcrumbs" className="breadcrumbs">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center pt-3">
      <h2>About</h2>
      <ol>
        <li><a href="index.html">Home</a></li>
        <li>About</li>
      </ol>
    </div>
  </div>
</section>

{/* <HAbout/> */}

<section id="about-us" className="about-us">
  <div className="container" data-aos="fade-up">
    <div className="row content">
      <div className="col-lg-6" data-aos="fade-right">
        <h2>Eum ipsam laborum deleniti velitena</h2>
        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assum perenda sruen jonee trave</h3>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
        <p>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        <ul>
          <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
          <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
          <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
        </ul>
        <p className="font-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </div>
  </div>
</section>

<Team/>

    </main>
    </>
  )
}

export default About