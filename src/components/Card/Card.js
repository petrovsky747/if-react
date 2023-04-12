import React from 'react';
import './Card.css';

export const Card = ({ name, city, country, imageUrl }) => (
  <div className="carousel-cell">
    <div>
      <img className="hotels-col__image" src={imageUrl} alt="Apartment" />
      <p className="link hotels-col__link">{name}</p>
      <p className="subtitle hotels-col__subtitle">
        {city}, {country}
      </p>
    </div>
  </div>
);
