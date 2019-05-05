import * as React from 'react';
import { User } from '../types';
import './Card.css';

interface CardProps {
  user: User
}

const Card: React.FunctionComponent<CardProps> = (
  { user:
    { display_name,
      job_title,
      main_photo,
      height_in_cm: height,
      compatibility_score,
      favourite,
      city,
      religion
    } }) => {

  return (
    <div className="profile-card">
      <img className="main-profile-img" src={main_photo} />
      <div className="profile-name">{display_name}</div>
      <div className="job">{job_title}</div>
      <div className="user-data">
        <div>
          <span className="height">Height: {height}</span>
          <span className="favourite">Favorite: {favourite.toString()}</span>
        </div>
        <div>
          <span className="city">City: {city.name}</span>
          <span className="religion">Religion: {religion}</span>
        </div>
      </div>
    </div>);
};

export default Card;