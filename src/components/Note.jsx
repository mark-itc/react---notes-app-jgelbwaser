import Card from 'react-bootstrap/Card';


function Note({ title, text = 'placeholder' }) {


  return (

    <Card className='card m-3'>
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