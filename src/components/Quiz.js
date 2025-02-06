import React, { useState } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import "./Quiz.css";

const Quiz = () => {
  const questions = [
    {
      question: "What's my favorite thing about you?",
      answer: "The way you decode me , I hate you",
    },
    {
      question: "My favourite moment of us, guess?",
      answer:
        "Moment when I confessed and the way your expression changed, you were not expecting this, firse kaise recreate kar sakte hai wo moment(puppy face)?? ",
    },
    {
      question: "Where did we go on our first date?",
      answer: "",
    },
    {
      question: "Thing i hate about you?",
      answer: "Your Ciggerattes",
    },
    {
      question: "What’s the cutest thing we’ve done together?",
      answer: "Late-night talks",
    },
    {
      question: "What’s the best surprise I’ve given you?",
      answer: "Kya surprise chahiye , mai kaafi nahi?",
    },
    {
      question: "What’s my favorite part of your body?",
      answer: "aapke shoulders",
    },
    {
      question: "What nickname do I call you the most?",
      answer: "Baby",
    },
    {
      question: "What’s the best part of being together?",
      answer:
        "Scooty ride, and seeing you blush in that mirror , haaaayeee mera dil ",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleRevealClick = () => {
    setShowAnswer(true);
  };

  const handleNextClick = () => {
    setShowAnswer(false);
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrevClick = () => {
    setShowAnswer(false);
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="quiz-section">
      <h2 className="quiz-heading">Fun facts!</h2>
      {currentQuestion < questions.length ? (
        <div className="quiz-card">
          <h3>{questions[currentQuestion].question}</h3>
          {showAnswer ? (
            <div className="answer-display">
              <p>{questions[currentQuestion].answer}</p>
            </div>
          ) : (
            <button className="reveal-button" onClick={handleRevealClick}>
              Reveal Answer
            </button>
          )}
          <div className="navigation-buttons">
            <ArrowForwardIosSharpIcon
              onClick={handlePrevClick}
              disabled={currentQuestion === 0}
            />
            {/* <button className="prev-button">Previous</button> */}
            <button
              className="next-button"
              onClick={handleNextClick}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="quiz-card">
          <div className="score-display">
            <h3>Congratulations! I am all yours babe</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
