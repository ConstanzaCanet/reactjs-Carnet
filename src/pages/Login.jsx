import  React, { useState } from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import  imgBook  from '../components/img/images.png'
import { useUser } from "../context/ContextUser";


import Input from '../components/Input';

const Login=()=>{
    const [usuario, SetUsuario]=useState({campo:'', display:'none' ,valido:null });
    const [email, SetEmail]=useState({campo:'', display:'none',valido:null});
    const [password, SetPassword]=useState({campo:'', display:'none',valido:null});
    const [ terminos,SetTerminos ] = useState(false);
    const [formvalido, SetFormvalidado] = useState(null);


    const { datos, handleInputChange } = useUser();

    const enviarData =(e)=>{
        e.preventDefault();
        if(usuario.valido === 'none' && 
            email.valido === 'none' &&
            password.valido ==='none'){
                SetFormvalidado(true);
            }else{
                console.log('incorrecto')
                SetFormvalidado(false)
            }
    }

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        password: /^.{5,15}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const onChangeTerm = (e) =>{
        SetTerminos(e.target.checked)
    }
    
    return(
        <div className='container formLogueo'>
            <div className='row formLogueoRow'>
                    <div className='col-sm'>
                        <img src={imgBook} className='imgLogin'/>
                    </div>

                    <div className='col-sm'>
                    <Form className='m-3' onSubmit ={enviarData}>
                        <h1 className='titleLogin'>Bienvenido!</h1>
                        
                        <Input
                            estado= {usuario}
                            cambiarEstado= {SetUsuario} 
                            label='User Name' 
                            name='usuario' 
                            placeholder='Enter username' 
                            tipo='text' 
                            error='El usuario debe tener de 5 a 15 digitos, solo con numeros, letras y guion bajo.'
                            ExpReg={expresiones.usuario}
                            
                        />
                        <Input 
                            estado={email}
                            cambiarEstado={SetEmail}
                            label='Email address' 
                            name='email' 
                            placeholder='Enter email' 
                            tipo='email'
                            error='El email no posee carecteres que correspondan'
                            ExpReg={expresiones.correo}
                        />
                        <Input
                            estado={password}
                            cambiarEstado={SetPassword}
                            label='Password' 
                            name='password' 
                            placeholder='Password' 
                            tipo='password'
                            error='La contraseña debe contener de 7 a 15 caracteres, incluyendo numeros y caracteres.'
                            ExpReg={expresiones.password}
                        />

                        <Form.Group className="mb-5" controlId="formBasicCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Acepto terminos y condiciones" 
                                className='checkBox' 
                                checked={terminos}
                                onChange={onChangeTerm} 
                                />
                        </Form.Group>
                        
                        <Button variant="primary" type='submit' className='mt-2'>
                            Login
                        </Button>
                    </Form>
                    </div>
            </div>

        </div>
    )
}

export default Login;