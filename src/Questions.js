import React, { useState, useEffect } from "react";

export default function Questions(){
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
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [askedQuestions, setAskedQuestions] = useState([]);

  useEffect(() => {
    const shuffledQuestions = [...questionsData].sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions);
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmitAnswer = () => {
    if (questions[currentQuestionIndex].correctAnswer === selectedOption) {
      alert("You're correct!", { color: 'green' });
    } else {
      alert("Wrong answer.", { color: 'red' });
    }
    setAskedQuestions([...askedQuestions, questions[currentQuestionIndex]]);
    setSelectedOption('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleExitTest = () => {
    alert('Exiting Test. Thank you!');
    // Implement further logic if needed, like navigating away
  };

  return (
    <div>
      {questions.length > 0 ? (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} style={{ border: '1px solid lightgray', backgroundColor: 'lightgray', padding: '5px', margin: '5px 0' }}>
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
          <button onClick={handleSubmitAnswer}>
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Submit Answers'}
          </button>
          <button onClick={handleExitTest}>Exit Test</button>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

