import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import  imgBook  from '../components/img/images.png'
import { useForm } from '../components/hook/useForm';
import Input from '../components/Input';
import { Link } from "react-router-dom";

    /*Valor inicial de formulario, dejo definido para evitar errores */
    const initialForm={
        name:"",
        email:"",
        password:"",
    };

    /*Funcion actualizada en handleBlur--->se actualizan errores, lo manejo con un array, donde al llenarse se asocia con un error especifico */
    const validationsForm=(form)=>{
        let newErrors={};
        let regexName =/^[a-zA-Z0-9\_\-]{4,16}$/;
        let regexEmail= /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexPass=/^.{5,15}$/;

        if(!form.name.trim()){
            newErrors.name = "El campo username es requerido";
        }else if(!regexName.test(form.name.trim())){
            newErrors.name='El campo nombre solo acepta letras, numeros, guion y guion bajo '
        }

        if(!form.email.trim()){
            newErrors.email = "El campo email es requerido";
        }else if(!regexEmail.test(form.email.trim())){
            newErrors.email='El campo email es incorrecto '
        }

        if(!form.password.trim()){
            newErrors.password = "El campo password es requerido";
        }else if(!regexPass.test(form.password.trim())){
            newErrors.password='El campo nombre password debe contener de 4 a 12 digitos '
        }

        return newErrors
    };



const Login=()=>{
    const {
        form,
        errors,
        loading,
        respon,
        handleSubmit,
        handleChange,
        handleBlur,
    } = useForm(initialForm,validationsForm);


        return(
        <div className='container formLogueo'>
            <div className='row formLogueoRow'>
                    <div className='col-sm'>
                        <img src={imgBook} className='imgLogin'/>
                    </div>

                    <div className='col-sm'>
                    <Form className='m-3' onSubmit ={handleSubmit}>
                        <h1 className='titleLogin'>Bienvenido!</h1>

                        <Input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label='Email address' 
                            value={form.name}
                            name='name' 
                            placeholder='Enter User name' 
                            tipo='text'
                        />
                        {errors.name&&<p style={{color:'red'}}>{errors.name}</p>}
                        <Input 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label='Email address' 
                            value={form.email}
                            name='email' 
                            placeholder='Enter email' 
                            tipo='email'
                        />
                        {errors.email&&<p style={{color:'red'}}>{errors.email}</p>}
                        <Input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label='Password' 
                            value={form.password}
                            name='password' 
                            placeholder='Password' 
                            tipo='password'
                        />
                    {errors.password&&<p style={{color:'red'}}>{errors.password}</p>}
                        <Form.Group className="mb-5" controlId="formBasicCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Acepto terminos y condiciones" 
                                className='checkBox' 
                                />
                        </Form.Group>
                        {!errors.email&&
                        <Link to= '/'>
                        <Button variant="primary" type='submit' className='mt-2'>
                            Login
                        </Button>
                        </Link>
                        }
                    </Form>
                    </div>
            </div>

        </div>
    )
}

export default Login;