import React, { useState, useEffect } from 'react';
import DisplayQuestions from './DisplayQuestions';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/questions')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);
  console.log(questions)

  const handleDeleteQuestion = async (index) => {
    const questionToDelete = questions[index];
    const updatedQuestions = questions.filter((_, i) => i !== index);

    // Delete the question from the server (adjust the URL accordingly)
    await fetch(`http://localhost:3001/questions/${questionToDelete.id}`, {
      method: 'DELETE',
    });

    setQuestions(updatedQuestions);
  };

  const handleUpdateQuestion = async (index, updatedQuestion) => {
    const questionToUpdate = questions[index];
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...questionToUpdate, questionText: updatedQuestion };

    // Update the question on the server (adjust the URL accordingly)
    await fetch(`http://localhost:3001/questions/${questionToUpdate.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ questionText: updatedQuestion }),
    });

    setQuestions(updatedQuestions);
  };

  return (
    <DisplayQuestions
      questions={questions}
      onDeleteQuestion={handleDeleteQuestion}
      onUpdateQuestion={handleUpdateQuestion}
    />
  );
};

export default QuestionList;

