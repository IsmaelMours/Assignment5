import React, { useState, useEffect } from 'react';
import DisplayQuestions from './DisplayQuestions';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the server (adjust the URL accordingly)
    fetch('http://localhost:3001/questions')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  return (
    <DisplayQuestions questions={questions} />
  );
};

export default QuestionList;
