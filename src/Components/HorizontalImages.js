import React from 'react';
import './HorizontalImages.css';

const HorizontalImages = () => {
  return (
    <div className="images-horizontal-container">
      <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="Image 1" className="image-item" />
      <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="Image 2" className="image-item" />
      <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="Image 3" className="image-item" />
      <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="Image 4" className="image-item" />
      <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="Image 5" className="image-item" />
    </div>
  );
};

export default HorizontalImages;
