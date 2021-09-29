import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

import { Link } from "react-router-dom";



const Cards=({name,src,id}) =>{
    return(
            <Card style={{ width: '18rem', height:'30rem', marginTop: '8%' }}>

                <Link to={`/product/${id}`}>
                  <Card.Img variant="top" alt={id} src={src} title={name}/>
                </Link>
                <h2 className='CardTitu mt-3 mb-0'>{name}</h2>
            </Card>
    )
}

export default Cards