import { useState } from "react";

export const useForm = (initialForm, validateForm)=>{
    const [form , setForm ] = useState(initialForm);
    const [errors,setErrors] = useState({});
    const [loading ,setLoading] = useState(false);
    const [respon, setResp] = useState(null);

    /* crea y actualiza elemento modificado */
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setForm({
            ...form,
            [name]:value
        });
    };

    /*valida estados y valores del formulario*/
    const handleBlur =(e)=>{
        handleChange(e);
        setErrors(validateForm(form)); 
    }

    const handleSubmit=(e)=>{};

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