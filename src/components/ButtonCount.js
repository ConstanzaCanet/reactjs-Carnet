import * as React from "react";

import {Button,Card} from 'react-bootstrap';
import { useCart } from "../context/ContextCart";

const ButtonCount =({name, count, handleClick , onClickCancel , id})=>{
    const {addItem} = useCart();

    const addToCart=()=>{
        addItem(name, count);
    }
    return(
        <Card.Body className='buttCoutn'>
            <Button variant="danger" onClick={onClickCancel}>Cancelar</Button>
                <Button variant="success" onClick={addToCart}>Finalizar</Button> 
        </Card.Body>
    );
};
export default ButtonCount;