import './App.css';
import Form from './components/Form';
import Note from './components/Note';
import Modal from 'react-bootstrap/Modal';
import localForage from 'localforage';


import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';




function App() {

  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [noteToUpdate, setNoteToUpdate] = useState(()=>null);

  const getOfflineNotes = async () => {
    const offlineNotes = await localForage.getItem('notes')
    setNotes(offlineNotes)
  }

  const deleteNote = (noteId) => {
    const deleteConfirmed = window.confirm("Are you sure you want to delete your note?");
    if (!deleteConfirmed) return
    const tempArray = [...notes];
    tempArray.splice(noteId, 1);
    setNotes(tempArray);
    localForage.setItem('notes', tempArray);

  }

  const saveNote = (newData) => {
    const prevNote = notes[newData.id]? {...notes[newData.id]} : {};
    const newNote = {...prevNote, ...newData}
    newNote.created ?  newNote.updated = new Date() :  newNote.created = new Date() 
    const newNoteArray = [...notes];
    newNoteArray[newData.id] = newNote
    localForage.setItem('notes', newNoteArray);
    console.log('notes', newNoteArray);
    setNotes(newNoteArray);
    
    setShowModal(false);
  }

  const editNote = (noteId) => { 
    setNoteToUpdate(notes[noteId]);
    setShowModal(true);   
  }

  
  const handleCloseModal = () => setShowModal(false);
  
  useEffect(()=>{getOfflineNotes()},[])

  return (
    <div className='App'>

      <Container className='d-flex flex-column pt-5 align-items-center'>

        <Form onSubmit={saveNote} id={notes.length}/>
        <div className='notes-container mt-5'>
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
        <Modal.Header className='modal-content' closeButton>
        </Modal.Header>
        <Modal.Body className='modal-content'>
          <Form onSubmit={saveNote}  noteToEdit={noteToUpdate} id={noteToUpdate && noteToUpdate.id}/>
        </Modal.Body>

      </Modal>

    </div>
  );
}

export default App;
