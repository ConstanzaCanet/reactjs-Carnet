import '../App.css';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';



const Cards=({name,src}) =>{
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

                <ItemCount />

            </Card>
        </div>
    )
}

export default Cards