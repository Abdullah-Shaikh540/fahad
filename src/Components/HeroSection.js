// HeroSection.js

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <main>
      <div className="hero-container">
        <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="" />
        <div className="hero-text">
          <h1>Your perfect coffee experience</h1>
          <p>Indulge in artisanal coffee delights. Crafted with passion, brewed with perfection. Savor the Flavor!</p>
          <button>Order Now</button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
