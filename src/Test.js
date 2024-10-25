import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from 'react-router-dom';
import "./Test.css";
import React from "react";

export default function Test(){
  const questionsData = [
    {
      id: 1,
      question: "What should be accompanied with your application?",
      options: [
        "Security interest",
        "Tender of payment",
        "Restrictive indorsement",
        "Lisbon"
      ],
      correctAnswer: "Tender of payment"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      correctAnswer: "Mars"
    },
    {
        id: 3,
        question: "What is the capital of France?",
        options: [
          "Berlin",
          "Madrid",
          "Paris",
          "Lisbon"
        ],
        correctAnswer: "Paris"
    },
    {
        id: 4,
        question: "Which planet is known as the Red Planet?",
        options: [
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn"
        ],
        correctAnswer: "Mars"
    },
    {
      id: 5,
      question: "Which planet is known as the Red Planet?",
      options: [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      correctAnswer: "Mars"
    },
    {
        id: 6,
        question: "What is the capital of France?",
        options: [
          "Berlin",
          "Madrid",
          "Paris",
          "Lisbon"
        ],
        correctAnswer: "Paris"
    },
    {
        id: 7,
        question: "Which planet is known as the Red Planet?",
        options: [
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn"
        ],
        correctAnswer: "Mars"
    },
    {
        id: 8,
        question: "What is the capital of France?",
        options: [
          "Berlin",
          "Madrid",
          "Paris",
          "Lisbon"
        ],
        correctAnswer: "Paris"
    },
    {
        id: 9,
        question: "Which planet is known as the Red Planet?",
        options: [
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn"
        ],
        correctAnswer: "Mars"
    },
    {
          id: 10,
          question: "What is the capital of France?",
          options: [
            "Berlin",
            "Madrid",
            "Paris",
            "Lisbon"
          ],
          correctAnswer: "Paris"
    },
    {
          id: 11,
          question: "Which planet is known as the Red Planet?",
          options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
          ],
          correctAnswer: "Mars"
        },
        {
        id: 12,
        question: "Which planet is known as the Red Planet?",
        options: [
          "Earth",
          "Mars",
          "Jupiter",
          "Saturn"
        ],
        correctAnswer: "Mars"
    },
    {
          id: 13,
          question: "What is the capital of France?",
          options: [
            "Berlin",
            "Madrid",
            "Paris",
            "Lisbon"
          ],
          correctAnswer: "Paris"
    },
    {
          id: 14,
          question: "Which planet is known as the Red Planet?",
          options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
          ],
          correctAnswer: "Mars"
    },
    
    ];

    const buttonStyle = {
        textAlign: 'center',
        border: 'solid',
        borderWidth: '1px',
        backgroundColor: '#e61300',
        borderRadius:'15px',
        padding: '5px 10px',
        color: 'white'
    }

    const buttonStyle2 = {
        textAlign: 'center',
        border: 'solid',
        borderWidth: '1px',
        backgroundColor: '#23a819',
        borderRadius:'15px',
        padding: '5px 10px',
        color: 'white'
    }
  
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [feedback, setFeedback] = useState('');
    const [hasStarted, setHasStarted] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const shuffledQuestions = shuffleArray([...questionsData]);
      shuffledQuestions.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      setQuestions(shuffledQuestions);
    }, []);
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
      setFeedback('');
    };
  
    const handleSubmitAnswer = () => {
      if (questions[currentQuestionIndex].correctAnswer === selectedOption) {
        setFeedback("You're Correct!");
        setTimeout(() => {
          handleNextQuestion();
        }, 2000);
      } else {
        setFeedback("Wrong Answer. Try again.");
        return; // User cannot proceed until the correct answer is chosen
      }
    };
  
    const handleNextQuestion = () => {
      setSelectedOption('');
      setFeedback('');
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    };
  
    const handleExitTest = () => {
      navigate('/');
    };
  
    const handleStartTest = () => {
      setHasStarted(true);
    };
  
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    };
  
const h1Style = {
  paddingTop: '10%',
  fontSize: '300%'
}

    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container">
          {!hasStarted ? (
            <div id="center-buttons">
              <h1 style={h1Style}>Welcome to the ConsumerIQ test</h1>
              <p><b>Please follow these rules during the test:</b></p>
              <ul id="center-buttons">
                <li>Read each question carefully.</li>
                <li>Select the best answer from the choices provided.</li>
                <li>Do not refresh the page during the test.</li>
                <li>Take notes and try again if needed.</li>
              </ul>
              <div id="center-buttons">
                <button  className="button" onClick={handleStartTest}>Start Test</button>
              </div>
            </div>
          ) : (
            questions.length > 0 && (
              <div>
                <h2>{questions[currentQuestionIndex].question}</h2>
                <div>
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <div key={index} className="option">
                      <input
                        type="radio"
                        id={`option${index}`}
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor={`option${index}`}>{option}</label>
                    </div>
                  ))}
                </div>
                <div id="center-buttons">
                  <button className="button exit-btn" onClick={handleExitTest}>Exit Test</button>
                  <button className="button next-btn" id="next-btn" onClick={handleSubmitAnswer} disabled={!selectedOption}>
                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Submit Answers'}
                  </button>
                </div>
                <div id="center-buttons">
                <p style={{ color: feedback === "Wrong Answer. Try again." ? 'red' : 'green', visibility: feedback ? 'visible' : 'hidden' }}>
                  {feedback}
                </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }