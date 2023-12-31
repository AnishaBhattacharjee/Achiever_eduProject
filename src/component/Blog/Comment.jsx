import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { GetComments, PostComment } from '../../redux/CommentSlice'
import { ThreeCircles } from 'react-loader-spinner'

const Comment = () => {
    const { id } = useParams()
    const initialValues = { 
        name: '',
        email: '',
        comment: '',
        blog: id
    }
    const { isLoggedin } = useSelector((state) => state.Auth)
    const { comments, commentStatus, commentSubmitStatus } = useSelector((state) => state?.commentData)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [loadcomment,setLoadcomment]=useState(3)

    const [data, setData] = useState(initialValues)

const moreComment=()=>{
    setLoadcomment(loadcomment+3)
}

    let name, value
    const setCommentData = (e) => {
        name = e.target.name
        value = e.target.value
        setData({ ...data, [name]: value })
    }

    const postComment = (e) => {
        e.preventDefault()
        // !isLoggedin && navigate('/login')
        dispatch(PostComment(data))
        setData(initialValues)
    }

    useEffect(() => {
        dispatch(GetComments(id))
    }, [id, commentSubmitStatus])
    console.log(comments);

    return (
        <div>
            <div class="blog-comments" data-aos="fade-up">
                {
                    comments !== '' && comments !== null && comments !== undefined && commentStatus === 'success' ? (
                        <>

                            <h4 class="comments-count">Comments ({comments?.length})</h4>
                            {
                                comments?.slice(0,loadcomment)?.map((item, key) => {
                                    return (
                                        <>
                                            <div id={`comment-${key + 1}`} class="comment clearfix" key={key + 1}>
                                                <h5><a href="">{item.name}</a> </h5>
                                                <time datetime="2020-01-01">01 Jan, 2020</time>
                                                <p>{item.comment}</p>

                                            </div>
                                        </>
                                    )
                                })
                            }
                            <div>
                            {comments?.length > loadcomment ? (
                                        <button className='btn btn-md btn-success' style={{marginLeft:"60px"}} onClick={moreComment}>More Comment</button>
                                    ) : null}

                            </div>
                        </>
                    ) : (
                        <>
                            {commentStatus === 'loading' && 
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
                        />}
                        </>
                    )
                }



                <div class="reply-form">
                    <h4>Leave a Reply</h4>
                    <p>Your email address will not be published. Required fields are marked * </p>
                    <form action="">
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <input name="name" type="text" class="form-control" placeholder="Your Name*" onChange={setCommentData}
                                    value={data.name} />
                            </div>
                            <div class="col-md-6 form-group">
                                <input name="email" type="text" class="form-control" placeholder="Your Email*" onChange={setCommentData}
                                    value={data.email} />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col form-group">
                                <textarea name="comment" class="form-control" placeholder="Your Comment*" onChange={setCommentData}
                                    value={data.comment} ></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={postComment}>Post Comment</button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default Comment