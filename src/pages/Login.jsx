import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Form} from 'react-bootstrap';
import  imgBook  from '../components/img/images.png'
import { useForm } from '../components/hook/useForm';
import Input from '../components/Input';

    /*Valor inicial de formulario, dejo definido para evitar errores */
    const initialForm={
        name:"",
        email:"",
        password:"",
    };

    /*Funcion actualizada en handleBlur--->se actualizan errores, lo manejo con un array, donde al llenarse se asocia con un error especifico */
    const validationsForm=(form)=>{
        let newErrors={};

        if(!form.name.trim()){
            newErrors.name = "Username es requerido";
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





  /*  const { datos, handleInputChange } = useUser();

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
*/
        return(
        <div className='container formLogueo'>
            <div className='row formLogueoRow'>
                    <div className='col-sm'>
                        <img src={imgBook} className='imgLogin'/>
                    </div>

                    <div className='col-sm'>
                    <Form className='m-3' onSubmit ={handleSubmit}>
                        <h1 className='titleLogin'>Bienvenido!</h1>

                        {JSON.stringify(errors.name)}

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