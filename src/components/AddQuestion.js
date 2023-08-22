import React, { useState } from 'react';
import { Button, Input, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './AddQuestionStyles.css';

const AddQuestion = () => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAddQuestion = async () => {
    const newQuestion = {
      questionText: question,
    };

    // Make a POST request to add the question to the server
    const response = await fetch('http://localhost:3001/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuestion),
    });

    if (response.ok) {
      alert('New question added:');
      setQuestion('');
    }
  };

  return (
    <Box className="add-question-container">
      <Input
        placeholder="Type your question here..."
        value={question}
        onChange={handleQuestionChange}
        fullWidth
        sx={{ marginBottom: '1rem' }}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleAddQuestion}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddQuestion;
