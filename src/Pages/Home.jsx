import React from 'react'
import Banner from '../component/Home/Banner'
import HAbout from '../component/Home/HAbout'
import Service from '../component/Home/Service'
import Testimonial from '../component/Home/Testimonial'
import Company from '../component/Home/Company'

const Home = () => {
  return (
    <>
    <main id="main">
    <Banner/>
        <HAbout/>
        <Service/>
        <Testimonial/>
        <Company/>

</main>
        
    </>
  )
}

export default Home