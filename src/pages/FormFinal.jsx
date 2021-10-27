import *as React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Table, Button } from 'react-bootstrap';
import { useCart } from '../context/ContextCart';
import { useUser } from "../context/ContextUser";
import { getFirestore } from "../firebase";
import "firebase/compat/firestore";
import swal from "sweetalert";
import firebase from 'firebase/compat/app';
import { useHistory } from "react-router-dom";
import Select from 'react';

const option=[
    {value:1, label:1},
    
]
const FormFinal=()=>{
    
    const [ pago, setPago ] = React.useState("");
    const [ desableT, setdesableT ] = React.useState(false);
    const [ desableC, setdesableC ] = React.useState(false);
    const [loading , setLoading] = React.useState(true);
    const [ cuotas,setCuotas ] = React.useState();
    const [ valor, setValor ] = React.useState();

    /*Navegacion */
    const history = useHistory();

    /*Context*/
    const { totalMoney, setCart, cart} = useCart();
    const { datos } = useUser();

    /*rendering de la pagina */
    React.useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, []);

    /*Habilitar o no cierta funcion con checkbox */
    const onChangeT=()=>{
        setPago("Tarjeta")
        return setdesableC(prev => !prev)
    };
    
    const onChangeC=()=>{
        setPago("CBU/CVU")
        return setdesableT(prev => !prev)
    };
    
    /*Calculo de cuotas + el iva */
    const cuotasMoney=(event)=>{
        const eventoSelect= Number(event.currentTarget.value)
        if (eventoSelect == 1) {
            setCuotas(eventoSelect);
            return setValor(totalMoney());
        }else if(eventoSelect>1){
            const  total = (totalMoney());
            const totalIva= ((0.1*total) + total);
            const pagomensual= (totalIva/eventoSelect);
            setCuotas(eventoSelect);
            return setValor(pagomensual);
        }
    };
    /*Boton Finalizar,firestore*/
    const newOrder ={
        buyer: {name: datos.name , email: datos.email },
        items: cart,
        total: totalMoney(),
        date: firebase.firestore.FieldValue.serverTimestamp(),
        pago:{valor:valor, cuotas:cuotas}
    }


    const handleCheckout=()=>{
        const dataBase = getFirestore();
        const ordersCollection= dataBase.collection('orders');
        swal({
            title:'Ya casi es tuyo!',
            text: `¿Finalizas aqui tu compra?`,
            icon:'info',
            buttons: ["No","Si"]
        }).then(request =>{
            if (request) {
                ordersCollection
                    .add(newOrder)
                    .then((docRef) => console.log('Se cerro compra!', docRef.id))
                    .catch((error) => console.log(error));

                swal({
                    title:'Compra exitosa!',
                    icon:'success',
                    button: 'Aceptar',
                    timer: 2000})
                    
                    setCart([])
                    return history.push('/');
            }else{
                return console.log('sigue con su compra')
            }
        })
       
    }

    return(

        <div className='m-5'>
        <Form className='m-5 container formFinal'onSubmit={handleCheckout}>
            <div className='border-bottom'>
                <h2>Formulario de Pago</h2>
                <p>Datos de pago</p>
            </div>


            <Form.Group className="mb-2 pagoForrma" controlId="formBasicCheckbox">
                <Form.Check 
                aria-label="option 1" 
                label="Tarjeta"
                onClick={onChangeT}
                disabled={desableT}
                className='m-3'
                />
                <Form.Check 
                aria-label="option 1"
                label="CBU"
                onClick={onChangeC}
                disabled={desableC} 
                className='m-3'
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{pago}</Form.Label>
                <Form.Control type="number" placeholder={pago} className='formaPago' required/>
            </Form.Group>

            <div>



            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Cuotas</th>
                        <th>Total a pagar: ${totalMoney()}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            
                            <Form.Select onChange={cuotasMoney} aria-label="Default select example">
                                <option>Cuotas</option>
                                <option value="1">Una</option>
                                <option value="3">Tres</option>
                                <option value="6">Seis</option>
                                <option value="12">Doce</option>
                            </Form.Select>

                        </td>
                        <td>Cada cuota a: ${valor}</td>

                    </tr>
                </tbody>    
            </Table>
            </div>
            <Button variant="success" className='m-2' type='submit'> Finalizar</Button>
        </Form>
        </div>

            
    )
};

export default FormFinal;