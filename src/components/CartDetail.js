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
                    <td>{item.quantity}</td>
                    <td>
                        <Button value="X" variant="dark" style={{width: '10rem'}}>${item.item/100}</Button>
                        <Button onClick={()=>removeItem(item.item , item.name)}>Eliminar</Button>
                    </td>    
                    </tr>)
            })}

        </tbody>
        
    );
};

export default CartDetail;