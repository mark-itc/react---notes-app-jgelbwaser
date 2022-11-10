import Card from 'react-bootstrap/Card';
import { format } from 'date-fns';
import './Note.css';


function Note(props) {

  const { title, text, date, id, onDelete } = props;
  
  const handleDelete = (e) => {
    console.log('delete clicked '+ id + ' '+ text);
    const deleteConfirmed = window.confirm("Are you sure you want to delete your note?");
    if (deleteConfirmed) {onDelete(id)} 
  }


  return (

    <Card className='card-note m-3' >
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
  )

}

export default Note;

  // return (
  //   <div className='card-note'>
  //     <div className='card-header'>
  //       <span className='card-date'>
  //         {format(date, "MMM do h:mm a")}ggg
  //       </span>
  //       <span className='card-close-button'>&#10006;</span>
  //     </div>
  //     <div className='card-body'>
  //       <div className='card-title'>
          
  //       </div>
  //       <div className='card-text'>
  //         {text}
  //       </div>
  //     </div>
  //   </div>
  // )