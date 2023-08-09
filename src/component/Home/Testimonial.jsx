import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchTestimonial } from '../../redux/TestimonialSlice';

const Testimonial = () => {
  const { test_data } = useSelector((state) => state?.testimonialData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchTestimonial())
  }, [])

console.log("test",test_data);

  return (
    <>

      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>Laborum repudiandae omnis voluptatum consequatur mollitia ea est voluptas ut</p>
          </div>
          <div className="row">
          {
            test_data?.testimonials?.map((tData,index)=>{
              return(
                <>
                <div className="col-lg-6 mt-4" data-aos="fade-up">
              <div className="testimonial-item">
                <img src={`https://restapinodejs.onrender.com/api/testimonials/photo/${tData._id}`} className="testimonial-img" alt />
                <h3>{tData.name}</h3>
                <h4>{tData.position}</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                {tData.talk.slice(0,160)}
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
              </div>
            </div>
                </>
              )
            })
          }

          </div>
        </div>
      </section>

    </>
  )
}

export default Testimonial