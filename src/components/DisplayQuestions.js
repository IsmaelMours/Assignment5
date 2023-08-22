import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DisplayQuestions = ({ questions, onDeleteQuestion, onUpdateQuestion }) => {
  return (
    <div>
      <h3>List of Questions:</h3>
      <List>
        {questions.map((question, index) => (
          <ListItem key={index}>
            <ListItemText primary={question.questionText} />
            <ListItemIcon>
              <IconButton color="primary" onClick={() => onUpdateQuestion(index)}>
                <EditIcon /> {/* Icon for editing */}
              </IconButton>
            </ListItemIcon>
            <ListItemIcon>
              <IconButton color="secondary" onClick={() => onDeleteQuestion(index)}>
                <DeleteIcon /> {/* Icon for deleting */}
              </IconButton>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DisplayQuestions;

