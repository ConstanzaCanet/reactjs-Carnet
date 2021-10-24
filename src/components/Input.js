import * as React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const Input = ({onChange, label, placeholder,name,tipo,error,onBlur,value})=>{


    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <input
                name={name}
                value={value} 
                className='form-control'
                type={tipo}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                required
            />
            <div>
                {error&&
                    <div>
                        <FontAwesomeIcon icon={faExclamationCircle} className='iconForm' />
                        <p className='errorForm'>{error}</p>
                    </div>
                }
            </div>
          
        </Form.Group>
    );
}

export default Input