import React from 'react'
import babySitters from '../../babysitters.json';
import s from './profile.module.scss'

const Profile = props => {
  let sit = props.sit;

  return (
    <div className={`py-5 ${s.profile} m-0`}>
      <div className={`text-center row m-0 ${s.profile_card}`}>
        <div className="col-lg-12">
          <img src={sit.photo}
            className="mx-auto"
            alt={sit.name} />
        </div>
        <div className="col-lg-12 col-md-12 m-0 p-0">
          <h3 className={`${s.name} `}>{sit.name}</h3>
          <div className={`${s.location} `}><span> {sit.location}</span></div>
          <div className={`${s.rating} `}>rating: {sit.rating}</div>
          <div className={`${s.reviews} `}>reviews {sit.reviews.length}</div>
          <div className={`${s.description} `}>{sit.description}</div>
          <div className={`${s.services} `}>
            <h4>Services</h4>
            <ul className="row m-0 p-0">
              <li className="btn col-md-6 col-sm-12">driversLicense: {sit.services.driversLicense ? '\u2713' : 'X'}</li>
              <li className="btn col-md-6 col-sm-12">houseCleaning: {sit.services.houseCleaning ? '\u2713' : 'X'}</li>
              <li className="btn col-md-6 col-sm-12">english: {sit.services.english ? '\u2713' : 'X'}</li>
              <li className="btn col-md-6 col-sm-12">cooking: {sit.services.cooking ? '\u2713' : 'X'}</li>
            </ul>
          </div>
          <div className={`${s.assessments} col-lg-12`}>
            <h4>Assessments</h4>
            <ul className="row p-0 m-0">
              <li className="btn col-6">
                methodology: <span className="">{sit.assessments.methodology} %</span></li>
              <li className="btn col-6">
                approach: <span className="">{sit.assessments.approach} %</span></li>
              <li className="btn col-4">
                experiance: <span className="">{sit.assessments.experiance} %</span></li>
              <li className="btn col-4">
                price: <span className="">{sit.assessments.price} %</span></li>
              <li className="btn col-4">
                quality: <span className="">{sit.assessments.quality} %</span></li>
            </ul>
          </div>
          <div className={`${s.quote} col-lg-12`}>
            <div className="alert alert-success">
              <div>{sit.quote}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.getInitialProps = async function (props) {
  let sit;
  await babySitters.map(sitter => {
    if (sitter.id == props.query.id) {
      sit = sitter;
    };
  });

  return {
    sit
  };
}


export default Profile;