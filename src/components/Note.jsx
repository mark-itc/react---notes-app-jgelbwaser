import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import './Note.css';


function Note(props) {

  const { title, text, date, id, onDelete } = props;

  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  const handleDelete = (e) => {
    const deleteConfirmed = window.confirm("Are you sure you want to delete your note?");
    if (deleteConfirmed) {onDelete(id)} 
  }


  return (
    <>
    <Card className='card-note m-3'  onClick={handleShow}>
      <Card.Header  className="card-header">
      <span className='card-date'>
      {format(date,"MMM do h:mm a")}
      </span>
      <span className='card-delete-button' onClick={handleDelete}>&#10006;</span>

      </Card.Header>
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
        {format(date,"MMM do h:mm a")}       
        </Modal.Header>        
        <Modal.Body>
        <Modal.Title>{title}</Modal.Title>
          {text}
          </Modal.Body>
      </Modal>
    </>
  )

}

export default Note;

