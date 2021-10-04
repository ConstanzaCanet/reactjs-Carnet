import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonGroup} from 'react-bootstrap';
import  { useCart } from "../context/ContextCart";

const CartDetail = ()=>{
    /* Aqui establezco contexto con carrito */
    const{ cart, removeItem}= useCart();
    /*Aqui establezco mapeo de carrito y productos */
    return(
        <tbody>
            {cart?.map(item => {
                return (
                    <tr key={item.item}>
                    <td>{item.name}</td>
                    <td>$$$</td>
                    <td>
                        <ButtonGroup style={{ width: '17rem' }} >
                            <Button variant="outline-dark" >-</Button>
                            <Button value="X" variant="dark">{item.quantity}</Button>
                            <Button variant="outline-dark">+</Button>
                        </ButtonGroup>
                        <Button onClick={()=>removeItem(item.item)}>Eliminar</Button>
                    </td>    
                    </tr>)
            })}

        </tbody>
        
    );
};

export default CartDetail;