import '../App.css';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';



const Cards=({name,src,author,id,content}) =>{
    return(
        <div className='card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" alt={id} src={src} />
                <Card.Body>
                  <Card.Title className='CardTitu'>{name}</Card.Title>
                  <Card.Text>
                    {content}
                    Autor: {author}
                  </Card.Text>
                </Card.Body>

                <ItemCount name={name} />

            </Card>
        </div>
    )
}

export default Cards