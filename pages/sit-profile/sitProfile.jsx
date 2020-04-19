import React from 'react'
import babySitters from '../../babysitters.json';
import s from './profile.module.scss'

const Profile = props => {
  let sit = props.sit;

  return (
    <div className={s.profile}>
      <div className="container text-center">
        <img src={sit.photo}
          className="w-50"
          alt={sit.name} />
        <h3>{sit.name}</h3>
        <div>{sit.location}</div>
        <div>rating: {sit.rating}</div>
        <div>reviews {sit.reviews.length}</div>
        <div>{sit.description}</div>
        <div><h4>Services</h4>
          <ul className="">
            <li className="btn">driversLicense: {sit.services.driversLicense ? '\u2713' : 'X'}</li>
            <li className="btn">houseCleaning: {sit.services.houseCleaning ? '\u2713' : 'X'}</li>
            <li className="btn">english: {sit.services.english ? '\u2713' : 'X'}</li>
            <li className="btn">cooking: {sit.services.cooking ? '\u2713' : 'X'}</li>
          </ul>
        </div>
        <div><h4>Assessments</h4>
          <ul className="row p-0 m-0">
            <li className="btn col-6">
              methodology: {sit.assessments.methodology} %</li>
            <li className="btn col-6">
              approach: {sit.assessments.approach} %</li>
            <li className="btn col-4">
              experiance: {sit.assessments.experiance} %</li>
            <li className="btn col-4">
              price: {sit.assessments.price} %</li>
            <li className="btn col-4">
              quality: {sit.assessments.quality} %</li>
          </ul>
        </div>
        <div className="">
          <div className="alert alert-success">
            <div>{sit.quote}</div>
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