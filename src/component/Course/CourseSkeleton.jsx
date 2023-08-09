import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const CourseSkeleton = () => {
  return (
    <>
      
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div className="box ">
                <h3><Skeleton width={150}/></h3>
                <Skeleton height={150}/>

                <h4><Skeleton height={30}/></h4>
                <ul>
                  <li><Skeleton/></li>
                </ul>
                <h6><Skeleton/></h6>
                
                <div className="btn-wrap">
                <Skeleton height={40} width={120}/>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div className="box ">
                <h3><Skeleton width={150}/></h3>
                <Skeleton height={150}/>

                <h4><Skeleton height={30}/></h4>
                <ul>
                  <li><Skeleton/></li>
                </ul>
                <h6><Skeleton/></h6>
                
                <div className="btn-wrap">
                <Skeleton height={40} width={120}/>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div className="box ">
                <h3><Skeleton width={150}/></h3>
                <Skeleton height={150}/>

                <h4><Skeleton height={30}/></h4>
                <ul>
                  <li><Skeleton/></li>
                </ul>
                <h6><Skeleton/></h6>
                
                <div className="btn-wrap">
                <Skeleton height={40} width={120}/>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
              <div className="box ">
                <h3><Skeleton width={150}/></h3>
                <Skeleton height={150}/>

                <h4><Skeleton height={30}/></h4>
                <ul>
                  <li><Skeleton/></li>
                </ul>
                <h6><Skeleton/></h6>
                
                <div className="btn-wrap">
                <Skeleton height={40} width={120}/>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      

    </>
  )
}

export default CourseSkeleton