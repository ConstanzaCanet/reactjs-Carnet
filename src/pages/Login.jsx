import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import Input from '../components/Input';
import  imgBook  from '../components/img/images.png'
import { useForm } from '../components/hook/useForm';

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
            newErrors.password='El campo password debe contener de 4 a 12 digitos '
        }

        return newErrors
    };



const Login=()=>{
    const {
        form,
        errors,
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
                            error={errors.name}
                        />

                        <Input 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label='Email address' 
                            value={form.email}
                            name='email' 
                            placeholder='Enter email' 
                            tipo='email'
                            error={errors.email}
                        />

                        <Input
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label='Password' 
                            value={form.password}
                            name='password' 
                            placeholder='Password' 
                            tipo='password'
                            error={errors.password}
                        />

                        <Form.Group className="mb-5" controlId="formBasicCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Acepto terminos y condiciones" 
                                className='checkBox'
                                required
                                />
                        </Form.Group>
                        
                        {!errors.email? 
                            <Button variant="primary" type='submit' className='mt-2'>
                                Login
                            </Button>
                            : <Button variant="primary" type='submit' className='mt-2' disabled>
                            Login
                        </Button>
                        }
                    </Form>
                    </div>
            </div>

        </div>
    )
}

export default Login;