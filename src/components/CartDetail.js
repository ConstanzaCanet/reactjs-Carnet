import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonGroup} from 'react-bootstrap';
import  { useCart } from "../context/ContextCart";

const CartDetail = ()=>{
    /* Aqui establezco contexto con carrito */
    const{cart}= useCart;
    /*Aqui establezco mapeo de carrito y productos */
    return(
        <tbody>

            <tr>
            <td>Producto 1</td>
            <td>$$$</td>
            <td>
                <ButtonGroup style={{ width: '17rem' }} >
                    <Button variant="outline-dark" >-</Button>
                    <Button value="X" variant="dark"></Button>
                    <Button variant="outline-dark">+</Button>
                </ButtonGroup>
            </td>    
            </tr>
            
        </tbody>
        
    );
};

export default CartDetail;