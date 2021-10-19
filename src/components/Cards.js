import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

import { Link } from "react-router-dom";



const Cards=({name,src,id}) =>{
    return(
      <Link to={`/product/${id}`}>
          <Card className = 'CatalogoCard' >
              <Card.Img className='CardImg' alt={id} src={src} title={name}/>
              <h2 className='CardTitu'>{name}</h2>
          </Card>
      </Link>
    )
}

export default Cards