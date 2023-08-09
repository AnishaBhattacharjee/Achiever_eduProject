import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBanner } from '../../redux/BannerSlice';

const Banner = () => {
  const { banner_data } = useSelector((state) => state?.bannerData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBanner());
  }, [])

  console.log("banner", banner_data);

  return (
    <>
      <section id="hero">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            {
              banner_data?.bannerdata?.map((bannerItem, index) => {
                return (
                  <>
                    <div className={`carousel-item ${index==0?'active': ''}`} style={{ backgroundImage: `url(https://restapinodejs.onrender.com/api/banner/photo/${bannerItem?._id})` }}>
                      <div className="carousel-container">
                        <div className="carousel-content animate__animated animate__fadeInUp">
                          <h2>{bannerItem.title}</h2>
                          <p>{bannerItem.description}</p>
                          <div className="text-center"><a href className="btn-get-started">Read More</a></div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
            {/* Slide 1 */}


          </div>


          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          <ol className="carousel-indicators" id="hero-carousel-indicators" />
        </div>
      </section>

    </>
  )
}

export default Banner