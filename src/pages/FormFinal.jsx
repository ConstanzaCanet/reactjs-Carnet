import *as React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Table, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useCart } from '../context/ContextCart'

const FormFinal=()=>{
    const { totalMoney } = useCart();

    const [ pago, setPago ] = useState("");
    const [ desableT, setdesableT ] = useState(false);
    const [ desableC, setdesableC ] = useState(false);

    const [ cuotas,setCuotas ] = useState();

    const cuotasMoney=()=>{
        const  total = (totalMoney())
        const totalIva= 0.1*total
        const pagomensual= Number(totalIva/3)
        return pagomensual
    }

    const onChangeT=()=>{
        setPago("Tarjeta")
        setdesableC(prev => !prev)
    }

    const onChangeC=()=>{
        setPago("CBU/CVU")
        setdesableT(prev => !prev)
    }
    return(

        <div className='formFinal m-5'>
        <Form className='m-5'>
            <div className='border-bottom'>
                <h2>Formulario de Pago</h2>
                <p>Datos de pago</p>
            </div>
            <Form>

            <Form.Group className="mb-5" controlId="formBasicCheckbox">
                <Form.Check 
                aria-label="option 1" 
                label="Tarjeta"
                onClick={onChangeT}
                disabled={desableT}
                />
                <Form.Check 
                aria-label="option 1"
                label="CBU"
                onClick={onChangeC}
                disabled={desableC} 
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{pago}</Form.Label>
                <Form.Control type="number" placeholder={pago} className='formaPago'/>
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
                            
                            <Form.Select aria-label="Default select example">
                                <option>Cuotas</option>
                                <option value="1">One</option>
                                <option value="3">Two</option>
                                <option value="12">Three</option>
                            </Form.Select>

                        </td>
                        <td>Cada cuota a:{cuotasMoney()}</td>
                    </tr>
                </tbody>    
            </Table>
            </div>
            <Button variant="success" className='m-2'> Finalizar</Button>
            </Form>


        </Form>
        </div>

            
    )
};

export default FormFinal;