import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../../context/ContextUser";
import swal from "sweetalert";



export const useForm = (initialForm, validateForm)=>{
    const [form , setForm ] = useState(initialForm);
    const [errors,setErrors] = useState({});
    const [loading ,setLoading] = useState(false);
    const [respon, setResp] = useState(null);

    /*Envio context y redirecciono a la pagina principal*/
    const history = useHistory();
    const{ datos, setDatos } = useUser();
    

    /* crea y actualiza elemento modificado */
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        });
        setDatos(form);
    };

    /*valida estados y valores del formulario*/
    const handleBlur =(e)=>{
        handleChange(e);
        setErrors(validateForm(form)); 
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
                swal({
                    title:'Bienvenido',
                    text: 'Ingresando...',
                    icon:'success',
                    timer: 2000,
                 })

                 history.push("/");
        }else{
            return(
                swal({
                    title:'Upss!',
                    text: 'Algun valor no es correcto!',
                    icon:'error',
                    timer: 2000,
                 })
            )
        }
    };

    return({
        form,
        errors,
        loading,
        respon,
        handleSubmit,
        handleChange,
        handleBlur,
    })
};