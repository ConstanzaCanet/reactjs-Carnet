import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Table,Alert,Spinner} from 'react-bootstrap';
import CartDetail from '../components/CartDetail';
import '../App.css';
import { useCart } from "../context/ContextCart";
import { useHistory } from "react-router-dom";
import "firebase/compat/firestore";
import swal from "sweetalert";

/*Carrito---- */
const Cart=()=>{
    const {cart , clear ,cantidad, totalMoney}=useCart();
    /*rendering*/
    const [loading , setLoading] = React.useState(true);
    /*Navegacion */
    const history = useHistory();


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

    const irFormFinal=()=>{
        swal({
            title:'¿Seguro no necesitas nada más?',
            text: `Procederas al pago de tu compra`,
            icon:'warning',
            buttons: ["No","Si"]
        }).then(request =>{
            if (request) {
               return history.push('/finalForm');
            }})
    }


    return(
        <>
            {loading && <Spinner animation="grow" variant="info" style={{width: '6rem', height: '6rem', marginTop:'15%'}}/> }

            {!loading &&
             <div className='container' style={{marginTop:'10%'}}>
                <h2 className='carritoTitu mb-0'>CARRITO DE COMPRAS</h2>
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
                             <Button variant="success" className='m-2' onClick= {irFormFinal}> Finalizar</Button>
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