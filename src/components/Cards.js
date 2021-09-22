import '../App.css';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

import { Link } from "react-router-dom";



const Cards=({name,src,author,id,content}) =>{
    return(
        <div className='card'>
            <Card style={{ width: '18rem', height:'50rem' }}>

                <Link to={`/product/${id}`}>
                  <Card.Img variant="top" alt={id} src={src} />
                </Link>

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