// import { useState } from 'react';

// import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import './Note.css';

// import Form from './Form';


function Note(props) {

  const { title, text, created, updated, id, onDelete, onEdit } = props;

  const handleDelete = (e) => {
    e.stopPropagation()
    onDelete(id)
  }

  
  return (
    <>
    <Card className='card-note m-3'  onClick={()=>onEdit(id)}>
      <Card.Header  className="card-header">
      <Card.Title className='mb-0 fw-bold' >{title}</Card.Title>
      <span className='card-delete-button' onClick={handleDelete}>&#10006;</span>
     
      </Card.Header>
      <Card.Body className='d-flex flex-column'>
        
        <Card.Text className='mb-3 card-text'>{text}</Card.Text>
          <div className='card-date'> 
          <div>Created: {format(created,"MMM do h:mm a")}
          </div>
          <div>

          {updated && 'Updated: ' + format(updated,"MMM do h:mm a")}
          </div>
          </div>
        
      </Card.Body>
    </Card>
    </>
  )

}

export default Note;

