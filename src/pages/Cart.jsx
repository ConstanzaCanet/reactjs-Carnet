import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import ContextCart from "../context/ContextCart";
/*Aqui mostraria el carrito---- */
const Cart=()=>{
    const cart = React.useContext(ContextCart);
    return(
        <div>AQUI MOSTRARIA EL CARRITO
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Unidades:{cart}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Producto 1</td>
                    <td>$$$</td>
                    <td>X</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td colSpan="2">$XXX</td>
                </tr>
            </tbody>
            </Table>
        </div>
    )
    
}
export default Cart;