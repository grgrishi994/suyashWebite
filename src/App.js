import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import PhotoGallery from "./components/PhotoGallery";
import Countdown from "./components/Countdown";
import Quiz from "./components/Quiz";
import Surprise from "./components/Surprise";
import Carousel from "./components/Carousel";
import "./App.css";

const App = () => {
  const [isBirthday, setIsBirthday] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set the exact time for the birthday (12:00 AM on 2024-10-03)
      const birthday = new Date("2025-02-11T00:00:00");
      const now = new Date();
      const difference = birthday - now;

      return difference > 0; // Returns true if the birthday hasn't passed
    };

    const timer = setInterval(() => {
      setIsBirthday(calculateTimeLeft());
    }, 1000);
    console.log(isBirthday);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* <Carousel/> */}
      {isBirthday ? ( // Once the birthday arrives, it shows the surprise components
        <>
          <LandingPage />
          <PhotoGallery />
          <div className="Quiz">
            <Quiz />
          </div>
          <Surprise />
        </>
      ) : (
        <Countdown />
      )}
    </div>
  );
};

export default App;
