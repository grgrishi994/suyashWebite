import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const photos = [
    { url: `${process.env.PUBLIC_URL}/images/image1.jpeg`, caption: 'Vishakhapatnam Trip' },
    { url: `${process.env.PUBLIC_URL}/images/image3.jpeg`, caption: 'First Sasural Trip' },
    { url: `${process.env.PUBLIC_URL}/images/image4.jpeg`, caption: 'First Date' },
    { url: `${process.env.PUBLIC_URL}/images/image5.jpeg`, caption: 'The Proposal' },
    { url: `${process.env.PUBLIC_URL}/images/image11.jpeg`, caption: 'Darjeeling' },
    { url: `${process.env.PUBLIC_URL}/images/image7.jpeg`, caption: 'Puri Trip' },
    { url: `${process.env.PUBLIC_URL}/images/image8.jpeg`, caption: 'The lovy dovy pic' },
    // Add more photos here
  ];

  return (
    <div className="gallery-section">
      <h2 className="gallery-heading">Our Cherished Moments</h2>
      <div className="gallery-container">
        {photos.map((photo, index) => (
          <div className="gallery-item" key={index}>
            <img src={photo.url} alt={`Slide ${index}`} className="gallery-image" />
            <div className="caption">{photo.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
