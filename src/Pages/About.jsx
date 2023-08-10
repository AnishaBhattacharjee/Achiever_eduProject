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
        <h2>Achiever : Elevating Through Education.</h2>
        <h3>Nurturing Excellence and Empowering Minds Through Education and Growth.</h3>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
        <p>
        Discover the essence of Achiever - a place where aspirations are nurtured, skills are honed, and dreams find their path to reality. Our story is one of passion, perseverance, and progress, as we strive to create an educational journey that empowers individuals to achieve greatness
        </p>
        <ul>
          <li><i className="ri-check-double-line" /> Achiever integrates academics and personal development seamlessly.</li>
          <li><i className="ri-check-double-line" /> Industry-experienced educators provide practical knowledge for success.</li>
          <li><i className="ri-check-double-line" /> Join a dynamic community driving innovation through teamwork.</li>
        </ul>
        <p className="font-italic">
        Achiever stands as a beacon where knowledge and aspiration converge, fueling the empowerment of your journey toward a successful future.
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