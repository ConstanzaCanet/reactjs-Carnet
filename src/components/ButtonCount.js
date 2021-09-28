import * as React from "react";
import { Link } from 'react-router-dom';
import {Button,Card} from 'react-bootstrap';

const ButtonCount =({name, count, handleClick , onClickCancel})=>{
    
    return(
        <Card.Body className='buttCoutn'>
            <Button variant="danger" onClick={onClickCancel}>Cancelar</Button>
            <Link to='/cart'>
                <Button variant="success" onClick={(e)=>handleClick(e, name, count)}>Finalizar</Button>
            </Link>    
        </Card.Body>
    );
};
export default ButtonCount;