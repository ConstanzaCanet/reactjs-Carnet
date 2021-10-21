import * as React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
import { useUser } from "../context/ContextUser";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const Input = ({estado, cambiarEstado, label, placeholder,name,tipo,error,ExpReg})=>{
    const onChange=(e)=>{
        cambiarEstado({...estado, campo: e.target.value})
    }

    const validation =() =>{
        if(ExpReg){
            if(ExpReg.test(estado.campo)){
                cambiarEstado({...estado, valido:'none'})
            }else{
                cambiarEstado({...estado, valido:'block'})
            }

        }
    }

    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <input
                name={name}
                className='form-control'
                type={tipo}
                placeholder={placeholder}
                value={estado.campo}
                onChange={onChange}
                onKeyUp={validation}
                onBlur={validation} 
                valido={estado.valido}
            />
            <div style={{display: estado.valido}}>
                <FontAwesomeIcon icon={faExclamationCircle} className='iconForm' />
                <p className='errorForm'>{error}</p>
            </div>
          
        </Form.Group>
    );
}

export default Input