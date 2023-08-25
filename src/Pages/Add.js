import React, { useState } from 'react';
import SideBar from '../components/SideBar.js';
import AddQuestion from '../components/AddQuestion.js';
import QuestionList from '../components/QuestionList'; // Import the QuestionList component

const Add = () => {
  const [addedQuestions, setAddedQuestions] = useState([]);

  const handleQuestionAdd = (question) => {
    setAddedQuestions([...addedQuestions, question]);
  };

  return (
    <div>
      <SideBar text="Creating a Questionnaire">
        <AddQuestion onQuestionAdd={handleQuestionAdd} />
        <QuestionList />
      </SideBar>
    </div>
  );
}

export default Add;
