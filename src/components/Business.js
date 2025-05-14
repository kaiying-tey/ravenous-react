import React from 'react';
import './Business.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Business = ({ business }) => {
  const fullAddress = `${business.address}, ${business.city}, ${business.state} ${business.zipCode}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <div className='business'>
      <div className='image-container'>
        <img 
          src={business.imageSrc}
          alt={business.name}
        />
      </div>
      <h2>{business.name}</h2>
      <div className="business-info">
        <div className="address">
          <a href={googleMapsUrl} target='_blank' rel='noopener noreferrer'>
            <p><FaMapMarkerAlt /> {business.address}</p>
            <p>{business.city}</p>
            <p>{business.state} {business.zipCode}</p>
          </a>
        </div>
        <div className="reviews">
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className="rating">{business.rating} stars</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
