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

  console.log('created', created);
  return (
    <>
    <Card className='card-note m-3'  onClick={()=>onEdit(id)}>
      <Card.Header  className="card-header">
      <Card.Title mb-0 >{title}</Card.Title>
      <span className='card-delete-button' onClick={handleDelete}>&#10006;</span>
     
      </Card.Header>
      <Card.Body >
        
        <Card.Text>
          <div className='mb-3'>{text}</div>
          <div className='card-date'> 
          <div>Created: {format(created,"MMM do h:mm a")}
          </div>
          <div>

          {updated && 'Updated: ' + format(updated,"MMM do h:mm a")}
          </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )

}

export default Note;

