import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Table,Alert} from 'react-bootstrap';
import CartDetail from '../components/CartDetail';
import '../App.css';
import { useCart } from "../context/ContextCart";


/*Aqui mostraria el carrito---- */
const Cart=()=>{
    const {cart , clear}=useCart();
    /*rendering*/
    const [loading , setLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    if (cart.length === 0) {
        return (
            <Alert variant="info" className='NotFound'>
                <Alert.Heading>Oh sorry! your cart is empty</Alert.Heading>
                <p>
                    There are no products to show.
                </p>
            </Alert>
        )
    }

    return(
        <>
            {loading && <p>Cargando carrito...</p> }

            {!loading &&
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
         }
           
        </>
    )
    
}
export default Cart;