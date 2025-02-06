import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import cuteImage1 from '../assets/cuteImage3.webp'; // Replace with your actual image paths
import cuteImage2 from '../assets/cuteImage2.webp';

const LandingPage = () => {

  return (
    <div className="landing-container">
      <div className="text-container">
        <h1 className="landing-title">Happy Birthday Love!</h1>
        <p className="landing-subtitle">Wishing you all the love and happiness in the world baby</p>
      </div>
      <div className="image-container">
        <img src={cuteImage1} alt="Cute Celebration" className="cute-image" />
        <img src={cuteImage2} alt="Cute Cake" className="cute-image" />
      </div>
    </div>
  );
};

export default LandingPage;
