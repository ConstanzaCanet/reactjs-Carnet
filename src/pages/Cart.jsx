import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Table,Alert,Spinner} from 'react-bootstrap';
import CartDetail from '../components/CartDetail';
import '../App.css';
import { useCart } from "../context/ContextCart";


/*Aqui mostraria el carrito---- */
const Cart=()=>{
    const {cart , clear ,cantidad, totalMoney}=useCart();
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
            {loading && <Spinner animation="grow" variant="info" style={{width: '6rem', height: '6rem', marginTop:'15%'}}/> }

            {!loading &&
             <div className='container' style={{marginTop:'10%'}}>AQUI MOSTRARIA EL CARRITO
             <Table striped bordered hover variant="dark">
                 <thead>
                     <tr>
                         <th>Producto</th>
                         <th>Unidades</th>
                         <th>Precio x unid.</th>
                     </tr>
                 </thead>
      
                 <CartDetail />
             
                 <tfoot className ='tableFoot'>
                     <tr>
                         <td>Total</td>
                         <td>{cantidad()}</td>
                         <td>
                         <Button value="X" variant="dark" style={{width: '15rem'}}>${totalMoney()}</Button>
                         <br />
                             <Button variant="success" className='m-2'> Finalizar</Button>
                             <Button variant="danger" onClick={clear}> Cancelar</Button>
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