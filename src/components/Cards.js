import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, ListGroup,ListGroupItem, CardImg} from 'react-bootstrap';

const Cards=(props) =>{
    return(
        <div className='card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" alt='books' src={props.src} />
                <Card.Body>
                  <Card.Title>{props.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Cras justo odio</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards