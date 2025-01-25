import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    {
      question: "What's my favorite thing about you?",
      options: ["Your smile", "Your sense of humor", "Your kindness", "Everything!"],
      answer: "Everything!"
    },
    {
      question: "What’s our go-to date night activity?",
      options: ["Movie night", "Dinner date", "Long drive", "Staying in and chilling"],
      answer: "Staying in and chilling"
    },
    {
      question: "Where did we go on our first date?",
      options: ["Cafe", "Movie theater", "Beach", "Park"],
      answer: "Movie theater"
    },
    {
      question: "What’s the cutest thing we’ve done together?",
      options: ["Cooking together", "Late-night talks", "Surprising each other", "Planning trips"],
      answer: "Late-night talks"
    },
    {
      question: "What’s the best surprise I’ve given you?",
      options: ["A handwritten letter", "A special date", "A cute gift", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What’s our favorite holiday destination?",
      options: ["Mountains", "Beach", "City escape", "Countryside"],
      answer: "Beach"
    },
    {
      question: "What nickname do I call you the most?",
      options: ["Baby", "Love", "Motka Dudu", "Yashu"],
      answer: "Motka Dudu"
    },
    {
      question: "What’s the best part of being together?",
      options: ["Sharing everything", "Laughing together", "Our adventures", "All of it"],
      answer: "All of it"
    }
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback('Correct! 🎉');
    } else {
      setFeedback('Oops! Wrong Answer.');
    }

    // Start transition after a short wait
    setTimeout(() => {
      setIsTransitioning(true); // Start fade out
    }, 1000); // Wait for 1 second before fading out

    // Move to the next question after 2 seconds total
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      setFeedback('');
      setIsTransitioning(false); // Reset transition
    }, 2000); // Move to the next question after 2 seconds
  };

  return (
    <div className="quiz-section">
      <h2 className="quiz-heading">Fun Quiz Time!</h2>
      {currentQuestion < questions.length ? (
        <div className={`quiz-card ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
          <h3>{questions[currentQuestion].question}</h3>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`option ${selectedOption === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          {feedback && <div className="feedback">{feedback}</div>}
        </div>
      ) : (
        <div className="quiz-card">
          <div className="score-display">
            <h3>
              Your Score: <span className="score">{score}</span>/<span className="total">{questions.length}</span>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
