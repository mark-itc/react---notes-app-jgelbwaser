import './App.css';
import Form from './components/Form';
import Note from './components/Note'


import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    const newNote = {
      text: noteText,
      date: new Date()
    };
    //console.log('newNote' ,newNote);
    setNotes([...notes, newNote]);
  }

  return (
    <div className='App'>

      <Container className='d-flex flex-column pt-5 align-items-center'>
        <Form onSubmit={addNote} />
        <div className='notes-container'>
          {notes.map((note, index) => {
            return <Note
              key={index}
              text={note.text}
            />
          })}
        </div>
      </Container>

    </div>
  );
}

export default App;
