import React, { useState } from 'react';
import { List, ListItem, ListItemText, RadioGroup, Radio, FormControlLabel, Button } from '@mui/material';

const UpdatedQuestion = ({ questions }) => {
    const [selectedValues, setSelectedValues] = useState({});

    // Function to handle radio button selection for a question
    const handleRadioChange = (questionIndex, event) => {
      const updatedSelectedValues = { ...selectedValues };
      updatedSelectedValues[questionIndex] = event.target.value;
      setSelectedValues(updatedSelectedValues);
    };

    // Function to handle the submit button click
    const handleSubmit = () => {
      // Here, you can handle the submission of selected values, e.g., send them to a server or process them in some way.
      console.log('Selected values:', selectedValues);
    };

    // Check if questions is undefined before rendering
    if (!questions || questions.length === 0) {
      return <div>No questions available.</div>;
    }
  
    return (
      <div>
        <List>
          {questions.map((question, index) => (
            <ListItem key={index}>
              <ListItemText primary={question.questionText} />
              <RadioGroup
                row
                aria-label={`radio-group-${index}`}
                name={`radio-group-${index}`}
                value={selectedValues[index] || ''}
                onChange={(event) => handleRadioChange(index, event)}
              >
                <FormControlLabel
                  value="agree"
                  control={<Radio />}
                  label="Agree"
                />
                <FormControlLabel
                  value="neutral"
                  control={<Radio />}
                  label="Neutral"
                />
                <FormControlLabel
                  value="disagree"
                  control={<Radio />}
                  label="Disagree"
                />
              </RadioGroup>
            </ListItem>
          ))}
        </List>

        {/* Submit Button */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    );
}

export default UpdatedQuestion;
