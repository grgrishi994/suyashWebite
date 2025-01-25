import React, { useState } from 'react';
import { planets } from './planetsData';
import './Carousel.css';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Start with Earth as the main card

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {planets.map((planet, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + planets.length) % planets.length;
          const isNext = index === (activeIndex + 1) % planets.length;

          return (
            <div
              key={planet.name}
              className={`carousel-card ${
                isActive
                  ? 'active'
                  : isPrev
                  ? 'side-left'
                  : isNext
                  ? 'side-right'
                  : 'hidden'
              }`}
              onMouseEnter={() => handleHover(index)} // Trigger hover
            >
              <img src={planet.image} alt={planet.name} className="planet-image" />
              {isActive && (
                <div className="planet-info">
                  <h2>{planet.name}</h2>
                  <p>{planet.info}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
