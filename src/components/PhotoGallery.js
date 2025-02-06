import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const photos = [
    { url: `${process.env.PUBLIC_URL}/images/image1.jpeg`, caption: 'First photo together' },
    { url: `${process.env.PUBLIC_URL}/images/image3.jpeg`, caption: 'favourite view' },
    { url: `${process.env.PUBLIC_URL}/images/image4.jpeg`, caption: 'First couple pose wali pic' },
    { url: `${process.env.PUBLIC_URL}/images/image9.jpeg`, caption: 'My happy place' },
    { url: `${process.env.PUBLIC_URL}/images/image7.jpeg`, caption: 'yaha mai pighal gyi' },
    { url: `${process.env.PUBLIC_URL}/images/image2.jpeg`, caption: 'our first pic together' },
    { url: `${process.env.PUBLIC_URL}/images/image6.jpeg`, caption: 'when you look super hot' },
    { url: `${process.env.PUBLIC_URL}/images/image8.jpeg`, caption: 'my favourite pic of us' },
    { url: `${process.env.PUBLIC_URL}/images/image10.jpeg`, caption: 'Moment I realised I am obsessed' },
    { url: `${process.env.PUBLIC_URL}/images/image5.jpeg`, caption: 'You are now mine, Mr. Shubham Kanodia' },
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
