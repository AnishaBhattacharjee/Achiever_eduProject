import React, { useEffect } from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import Search from '../component/Blog/SearchBox'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCategoryDetails } from '../redux/CategoryDetailsSlice'
import { useParams } from 'react-router-dom'

const CategoryDetails = () => {
    const { categoryDetails_data } = useSelector((state) => state?.catdetailsData);
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(FetchCategoryDetails(id))
    }, [])

    console.log("cat", categoryDetails_data);



    return (
        <>
            <main id="main">
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center pt-3">
                            <h2>Category Details</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Category</li>
                            </ol>
                        </div>
                    </div>
                </section>


                <section id="blog" className="blog">
                    <div className="container">
                        <div className="row">

                            {categoryDetails_data !== null ? (
                                <>
                                    <div className="col-lg-8 entries">
                                        {
                                            categoryDetails_data?.map((catData, index) => {
                                                return (
                                                    <>
                                                        <article className="entry entry-single" data-aos="fade-up" key={index}>
                                                            <div className="entry-img"> 
                                                            <img src={`https://restapinodejs.onrender.com/api/blog/image/${catData._id}`} className="card-img-top" alt="..." />
                                                            </div>
                                                            <h2 className="entry-title">
                                                                <a href="blog-single.html">{catData.title}</a>
                                                            </h2>
                                                            <div className="entry-meta">
                                                                <ul>
                                                                    <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                                                                    <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                                                                    <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="entry-content">
                                                                <p dangerouslySetInnerHTML={{ __html: catData.postText.slice(0,350) }}></p>
                                                            </div>
                                                            <div className="entry-footer clearfix">
                                                                {/* ... */}
                                                            </div>
                                                        </article>
                                                    </>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                    {/* End blog entries list */}

                                    <Search/>
                                    {/* End blog sidebar */}
                                </>
                            ) : (
                                <>
                                    <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "150px" }}>
                                        <ThreeCircles
                                            height="90"
                                            width="90"
                                            color="#1bbd36"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                            ariaLabel="three-circles-rotating"
                                            outerCircleColor=""
                                            innerCircleColor=""
                                            middleCircleColor=""
                                        />

                                    </div>
                                </>
                            )}


                        </div>
                    </div>
                </section>


            </main>

        </>
    )
}

export default CategoryDetails