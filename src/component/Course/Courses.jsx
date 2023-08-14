import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCourse } from '../../redux/CourseSlice';
import { ThreeCircles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import CourseSkeleton from './CourseSkeleton';

const Courses = () => {
    const { course_data } = useSelector((state) => state?.courseData);
    const dispatch = useDispatch();
    const [loadMore, setLoadMore] = useState(4)

    useEffect(() => {
        dispatch(FetchCourse())
    }, [])

    const moreCourse = () => {
        setLoadMore(loadMore + 4)
    }

    console.log("course", course_data);

    const handlePageClick = () => {

    }
    return (
        <>

            <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        {course_data !== null ? (
                            <>
                                {
                                    course_data?.Courses?.slice(0, loadMore).map((cData, index) => {
                                        return (
                                            <>
                                                <div className="col-lg-3 col-md-6 mt-4 mt-md-0 pt-4">
                                                    <div className="box featured">
                                                        <h3>{cData.name}</h3>
                                                        <div style={{ width: "250px", height: "auto" }}>
                                                            <img src={`https://restapinodejs.onrender.com/api/course/photo/${cData._id}`} className="mb-3" style={{ width: "80%", height: "180px", display: "flex", objectFit: "cover" }} alt="..." />
                                                        </div>

                                                        <h4><sup>*</sup>{cData.fees}/-</h4>
                                                        <ul>
                                                            <li>{cData.requirement}</li>
                                                        </ul>
                                                        <h6>Duration : {cData.duration}</h6>
                                                        <div className="btn-wrap">
                                                            <Link to={`/apply/${cData.name}/${cData._id}`} className="btn-buy">Apply Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                <div style={{ width: "100%", display: "flex", justifyContent: "center", paddingTop: "50px" }}>

                                    {course_data?.Courses?.length > loadMore ? (
                                        <button className='btn btn-lg btn-success' onClick={moreCourse}>Load More</button>
                                    ) : null}
                                    
                                </div>

                            </>
                        ) : (
                            <>
                                <CourseSkeleton />

                            </>
                        )}



                    </div>
                </div>
            </section>

        </>
    )
}

export default Courses