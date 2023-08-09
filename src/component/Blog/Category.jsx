import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchCategory } from '../../redux/CategorySlice'
import { ThreeCircles } from 'react-loader-spinner'
import { HashLoader } from 'react-spinners'
import { Link } from 'react-router-dom'

const Category = () => {
    const { category_data } = useSelector((state) => state?.category)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(FetchCategory())
    }, [])

    // const length1 = Object.keys(category_data).length


    console.log("c", category_data);

    return (
        <>


            <h3 className="sidebar-title">Categories</h3>

            <div className="sidebar-item categories">
                {category_data !== null ? (
                    <>
                        <ul>
                        
                            {
                                category_data?.data?.map((cData, index) => {
                                    return (
                                        <>
                                            <li><Link to={`/categorydetails/post/${cData?._id}`}>{cData.category} <span>{cData.category.length}</span></Link></li>
                                        </>
                                    )
                                })
                            }
                        </ul>

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


            </div>
        </>
    )
}

export default Category