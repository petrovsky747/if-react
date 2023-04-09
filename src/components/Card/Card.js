import React from 'react';
import './Card.css';

export const Card = ({
  name,
  city,
  country,
  imageUrl}) => (
  <div>
    <div>
      <img className="hotels-col__image" src={imageUrl} alt="Apartment"/>
      <p className="link hotels-col__link">{name}</p>
      <p className="subtitle hotels-col__subtitle">{city}, {country}</p>
    </div>
  </div>
);

// export const Card = () => (
//   <div>
//     <img className="hotels-col__image" src='https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg' alt="Apartment"/>
//     <p className="link hotels-col__link">Hotel Leopold</p>
//     <p className="subtitle hotels-col__subtitle">Saint Petersburg, Russia</p>
//   </div>
// );

