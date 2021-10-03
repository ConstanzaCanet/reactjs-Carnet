import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Table} from 'react-bootstrap';
import CartDetail from '../components/CartDetail';
import '../App.css';
import { useCart } from "../context/ContextCart";


/*Aqui mostraria el carrito---- */
const Cart=()=>{
    const {cart , clear}=useCart();


    return(
        <div>AQUI MOSTRARIA EL CARRITO
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                    </tr>
                </thead>
         
                <CartDetail />
                

                <tfoot className ='tableFoot'>
                    <tr>
                        <td>Total</td>
                        <td>{cart.length}</td>
                        <td>
                            <Button variant="success" className='m-2'> Finalizar compra</Button>
                            <Button variant="danger" onClick={clear}> Cancelar compra</Button>
                        </td>
                    </tr>
                </tfoot>
        
            
            </Table>
        </div>
    )
    
}
export default Cart;