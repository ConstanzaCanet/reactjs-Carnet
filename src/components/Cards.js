import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, ListGroup,ListGroupItem, CardImg,Button} from 'react-bootstrap';
import buy from './img/buy.png'
const Cards=({name,src,adquirir}) =>{
    return(
        <div className='card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" alt='books' src={src} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Button variant="outline-secondary" onClick={()=> adquirir(name)}><img src={buy}/></Button>{' '}
                  </ListGroupItem>
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