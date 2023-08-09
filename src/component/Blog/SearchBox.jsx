import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RecentData } from '../../redux/RecentPostSlice'
import Category from './Category'
import { ThreeCircles } from 'react-loader-spinner'
import { HashLoader } from 'react-spinners'
import moment from 'moment'
import SearchInput from './SearchInput'

const SearchBox = () => {
    const { recent_data } = useSelector((state) => state?.recentPost)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(RecentData())
    }, [])

    console.log("r", recent_data);

    return (
        <>
            <div className="col-lg-4">
                <div className="sidebar" data-aos="fade-left">

                <SearchInput/>
                    {/* End sidebar search formn*/}
                    <Category />
                    
                    {/* End sidebar categories*/}
                    <h3 className="sidebar-title">Recent Posts</h3>
                    {recent_data !== null ? (
                        <>
                            <div className="sidebar-item recent-posts">
                                {
                                    recent_data?.data?.map((rPost, index) => {
                                        return (
                                            <>
                                                <div className="post-item clearfix">
                                                    <img src={`https://restapinodejs.onrender.com/api/blog/image/${rPost._id}`} className="card-img-top" alt="..." />
                                                    <h4><Link to={`/blogdetails/${rPost._id}`}>{rPost.title}</Link></h4>
                                                    <time>{moment(rPost.createdAt).format(' Do MM, YYYY, h:mm:ss a')}</time>
                                                </div>

                                            </>
                                        )
                                    })
                                }
                            </div>
                        </>
                    ) : (
                        <>
                            <ThreeCircles
                            height="40"
                            width="40"
                            color="#1bbd36"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                        />

                            {/* <HashLoader color="#1bbd36" size={30} /> */}

                        </>
                    )}
                    {/* End sidebar recent posts*/}
                </div>{/* End sidebar */}
            </div>
        </>
    )
}

export default SearchBox