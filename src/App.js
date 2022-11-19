import './App.css';
import Form from './components/Form';
import Note from './components/Note';
import Modal from 'react-bootstrap/Modal';


import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


function App() {

  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [noteToUpdate, setNoteToUpdate] = useState(()=>null);


  console.log('showModal', showModal)

  const deleteNote = (noteId) => {
    const deleteConfirmed = window.confirm("Are you sure you want to delete your note?");
    if (!deleteConfirmed) return
    const tempArray = [...notes];
    tempArray.splice(noteId, 1);
    setNotes(tempArray);

  }

  const saveNote = (newData) => {
    const prevNote = notes[newData.id]? {...notes[newData.id]} : {};
    const newNote = {...prevNote, ...newData}
    newNote.created ?  newNote.updated = new Date() :  newNote.created = new Date() 
    const newNoteArray = [...notes];
    newNoteArray[newData.id] = newNote
    setNotes(newNoteArray);
    setShowModal(false);
  }

  const editNote = (noteId) => { 
    setNoteToUpdate(notes[noteId]);
    setShowModal(true);   
  }

  
  const handleCloseModal = () => setShowModal(false);
  

  return (
    <div className='App'>

      <Container className='d-flex flex-column pt-5 align-items-center'>

      {console.log('noteToUpdate',noteToUpdate)}
        <Form onSubmit={saveNote} id={notes.length}/>
        <div className='notes-container'>
          {notes.map((note, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={note.title}
                text={note.text}
                created={note.created}
                updated={note.updated}
                onDelete={deleteNote}
                onEdit={editNote}

              />)
          })}
        </div>
      </Container>
      <Modal show={showModal} centered onHide={handleCloseModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={saveNote}  noteToEdit={noteToUpdate} id={noteToUpdate && noteToUpdate.id}/>
        </Modal.Body>

      </Modal>

    </div>
  );
}

export default App;
