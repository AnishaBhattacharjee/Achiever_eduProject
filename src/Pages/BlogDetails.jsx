import React, { useEffect } from 'react'
import Search from '../component/Blog/SearchBox'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FetchBlogDetails } from '../redux/BlogDetailsSlice'
import { ThreeCircles } from 'react-loader-spinner'
import { HashLoader } from 'react-spinners'
import Comment from '../component/Blog/Comment'
import BlogSkeleton from './BlogSkeleton'

const BlogDetails = () => {
  const { id } = useParams()
  const { details_data } = useSelector((state) => state?.blogdetails)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBlogDetails(id))
  }, [id])

  console.log("data", details_data);

  return (
    <>
      <main id="main">
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">

            <div class="d-flex justify-content-between align-items-center pt-3">
              <h2>Blog Details</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Blog</li>
              </ol>
            </div>
          </div>
        </section>


        <section id="blog" className="blog">
          <div className="container">
            <div className="row">
              
                {details_data !== null ? (
                  <>
                  <div className="col-lg-8 entries">
                    <article className="entry entry-single" data-aos="fade-up">
                      <div className="entry-img">
                        <img src={`https://restapinodejs.onrender.com/api/blog/image/${details_data?._id}`} className="card-img-top" alt="..." />
                      </div>
                      <h2 className="entry-title">
                        <a href="blog-single.html">{details_data?.title}</a>
                      </h2>
                      <div className="entry-meta">
                        <ul>
                          <li className="d-flex align-items-center"><i className="icofont-user" /> <a href="blog-single.html">John Doe</a></li>
                          <li className="d-flex align-items-center"><i className="icofont-wall-clock" /> <a href="blog-single.html"><time dateTime="2020-01-01">Jan 1, 2020</time></a></li>
                          <li className="d-flex align-items-center"><i className="icofont-comment" /> <a href="blog-single.html">12 Comments</a></li>
                        </ul>
                      </div>
                      <div className="entry-content">
                        <p dangerouslySetInnerHTML={{
                          __html: details_data?.postText
                        }}>

                        </p>

                        {/* <blockquote>
              <i className="icofont-quote-left quote-left" />
              <p>
                Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.
              </p>
              <i className="las la-quote-right quote-right" />
              <i className="icofont-quote-right quote-right" />
            </blockquote> */}

                      </div>
                      <div className="entry-footer clearfix">
                        <div className="float-left">
                          <i className="icofont-folder" />
                          <ul className="cats">
                            <li><a href="#">Business</a></li>
                          </ul>
                          <i className="icofont-tags" />
                          <ul className="tags">
                            <li><a href="#">Creative</a></li>
                            <li><a href="#">Tips</a></li>
                            <li><a href="#">Marketing</a></li>
                          </ul>
                        </div>
                        <div className="float-right share">
                          <a href title="Share on Twitter"><i className="icofont-twitter" /></a>
                          <a href title="Share on Facebook"><i className="icofont-facebook" /></a>
                          <a href title="Share on Instagram"><i className="icofont-instagram" /></a>
                        </div>
                      </div>
                    </article>{/* End blog entry */}
                    <div className="blog-comments" data-aos="fade-up">
  
                      <Comment/>
                    </div>
                    {/* End blog comments */}
                    </div>
                    {/* End blog entries list */}

              <Search />
              {/* End blog sidebar */}
                  </>
                ) : (
                  <>
                    <BlogSkeleton/>
                  </>
                )}
              
              
            </div>
          </div>
        </section>


      </main>
    </>
  )
}

export default BlogDetails