import React from 'react'
import Courses from '../component/Course/Courses'
import Questions from '../component/Course/Questions'

const Course = () => {
  return (
    <>
<main id="main">

<section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center pt-3">
          <h2>Courses</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Courses</li>
          </ol>
        </div>

      </div>
    </section>

    <Courses/>
    
    <Questions/>

</main>




    </>
  )
}

export default Course