import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, IconButton, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DisplayQuestions = ({ questions, onDeleteQuestion, onUpdateQuestion }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState('');

  const startEditing = (index, initialQuestion) => {
    setEditingIndex(index);
    setEditedQuestion(initialQuestion);
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditedQuestion('');
  };

  const handleEditChange = (event) => {
    setEditedQuestion(event.target.value);
  };

  const handleEditSave = (index) => {
    onUpdateQuestion(index, editedQuestion);
    setEditingIndex(null);
    setEditedQuestion('');
  };

  return (
    <div>
      <h3>List of Questions:</h3>
      <List>
        {questions.map((question, index) => (
          <ListItem key={index} className="question-item"> {/* Apply the question-item class */}
            {editingIndex === index ? (
              <>
                <TextField
                  fullWidth
                  value={editedQuestion}
                  onChange={handleEditChange}
                />
                <IconButton color="primary" onClick={() => handleEditSave(index)}>
                  Update
                </IconButton>
                <IconButton color="secondary" onClick={cancelEditing}>
                  Cancel
                </IconButton>
              </>
            ) : (
              <>
                <ListItemText primary={question.questionText} />
                <ListItemIcon>
                  <IconButton color="primary" onClick={() => startEditing(index, question.questionText)}>
                    <EditIcon />
                  </IconButton>
                </ListItemIcon>
                <ListItemIcon>
                  <IconButton color="secondary" onClick={() => onDeleteQuestion(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemIcon>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DisplayQuestions;
