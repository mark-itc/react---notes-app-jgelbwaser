import './App.css';
import Form from './components/Form';
import Note from './components/Note'


import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {

  const [notes, setNotes] = useState([]);

  const deleteNote = (noteId) => {
      const tempArray = [...notes];
      tempArray.splice(noteId,1);
     setNotes(tempArray);
   
  }
  
  const addNote = (noteText) => {
    const newNote = {
      text: noteText,
      date: new Date()
    };
    console.log('newNote' ,newNote);
    setNotes([...notes, newNote]);
  }

  return (
    <div className='App'>

      <Container className='d-flex flex-column pt-5 align-items-center'>
        <Form onSubmit={addNote} />
        <div className='notes-container'>
          {notes.map((note, index) => {
            return (
            <Note
              key={index}
              id= {index}
              text={note.text}
              date ={note.date}
              onDelete = {deleteNote}
              
            />)
          })}
        </div>
      </Container>

    </div>
  );
}

export default App;