
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from '@mui/material';

const ListQuiz = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedValues, setSelectedValues] = useState({});
    const [responseCounts, setResponseCounts] = useState({
      agree: 0,
      neutral: 0,
      disagree: 0,
      totalQuestions: 0
    });
  
    useEffect(() => {
      // Fetch data from the provided URL
      fetch('http://localhost:3001/questions')
        .then(response => response.json())
        .then(data => {
          setQuestions(data); // Assuming data is an array of questions
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
  
      // Fetch response counts from the server
      fetch('http://localhost:3001/responseCounts')
        .then(response => response.json())
        .then(data => {
          setResponseCounts(data);
        })
        .catch(error => {
          console.error('Error fetching response counts:', error);
        });
    }, []);
  
    const handleRadioChange = (questionIndex, event) => {
      const updatedSelectedValues = { ...selectedValues };
      updatedSelectedValues[questionIndex] = event.target.value;
      setSelectedValues(updatedSelectedValues);
    };
  
    const handleSubmit = async () => {
      const responses = {
        agree: [],
        neutral: [],
        disagree: []
      };
  
      Object.entries(selectedValues).forEach(([key, value]) => {
        const questionIndex = Number(key);
        responses[value].push(questionIndex);
      });
  
      const totalQuestions = questions.length + responseCounts.totalQuestions;
  
      // Update local response counts and total questions
      const updatedCounts = {
        agree: responseCounts.agree + responses.agree.length,
        neutral: responseCounts.neutral + responses.neutral.length,
        disagree: responseCounts.disagree + responses.disagree.length,
        totalQuestions
      };
  
      try {
        // Update the database using json-server
        const response = await fetch('http://localhost:3001/responseCounts', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedCounts)
        });
  
        if (response.ok) {
            setSelectedValues({});
        
            // Show alert
            alert('Responses submitted successfully!');
          setResponseCounts(updatedCounts);
        } else {
          console.error('Error submitting responses, counts, and total questions.');
        }
      } catch (error) {
        console.error('Error submitting responses, counts, and total questions:', error);
      }
    };
    const rowColors = ['#BBDEFB', '#03A9F4', '#2CCCE4', '#1976D2'];
  return (
    <div className="centered-container">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Question</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Response</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: rowColors[index % rowColors.length],
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: 'white', // Change to your desired hover color
                  },
                }}
              >
                <TableCell>{question.questionText}</TableCell>
                <TableCell>
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '20px' }}>
      <Button
          variant="contained"
          color="primary"
          size="large" // Increase the button size
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ListQuiz