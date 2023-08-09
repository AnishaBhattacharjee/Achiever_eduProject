import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchTeam } from '../../redux/TeamSlice';

const Team = () => {
  const { team_data } = useSelector((state) => state?.teamData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchTeam())
  }, [])
  console.log("team",team_data);

  return (
    <>
      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our <strong>Team</strong></h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row">
            {
              team_data?.TeamMember?.map((teamItem,index)=>{
                return(
                  <>
                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up">
                <div className="member-img">
                  <img src={`https://restapinodejs.onrender.com/api/team/photo/${teamItem._id}`} className="img-fluid" alt />
                  <div className="social">
                    <a href><i className="icofont-twitter" /></a>
                    <a href><i className="icofont-facebook" /></a>
                    <a href><i className="icofont-instagram" /></a>
                    <a href><i className="icofont-linkedin" /></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{teamItem.name}</h4>
                  <span>{teamItem.possession}</span>
                </div>
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

export default Team