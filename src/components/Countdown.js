import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    // Set the exact birthday date and time (midnight on October 3rd, 2024)
    const birthday = new Date("2024-10-03T00:00:00");
    const now = new Date();
    const difference = birthday - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Countdown completed
    }
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="countdown">
      <h2>Countdown to the Big Day!</h2>
      <div className="countdown-timer">
        {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
      </div>
    </div>
  );
};

export default Countdown;
