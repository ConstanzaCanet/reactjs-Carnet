import * as React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import  imgBook  from '../components/img/images.png'
import { useUser } from "../context/ContextUser";

const Login=()=>{
    const { datos, setDatos } = useUser();

    const handleInputChange =(event)=>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarData =(event)=>{
        event.preventDefault();
        console.log((datos.name + ' ' + datos.email))
    }
    return(
        <div className='container formLogueo'>
            <div className='row formLogueoRow'>
                    <div className='col-6'>
                        <img src={imgBook} className='imgLogin'/>
                    </div>

                    <div className='col-6'>
                    <Form className='m-3' onSubmit ={enviarData}>
                        <h1 className='titleLogin'>Bienvenido!</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <input
                              name='name'
                              className='form-control'
                              type="text"
                              placeholder="Enter username" 
                              onChange={handleInputChange}
                              />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <input
                              name='email'
                              className='form-control'
                              type="email"
                              placeholder="Enter email"
                              onChange={handleInputChange}
                               />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <input
                              name='password'  
                              className='form-control'
                              type="password"
                              placeholder="Password"
                              onChange={handleInputChange} 
                              />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        
                        <Button variant="primary" type='submit'>
                            Login
                        </Button>
                    </Form>
                    </div>
            </div>

        </div>
    )
}

export default Login;