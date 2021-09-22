import * as React from "react";

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router";


const ProductoDetail =()=>{
    const [producto, setProducto] =React.useState({});
    const {id} = useParams();

    React.useEffect(()=>{
        fetch(`https://www.etnassoft.com/api/v1/get/?id=${id}`)
            .then((resp)=>resp.json())
            .then((data)=>setProducto(data[0]))
            .catch((error)=>console.log('Producto no encontrado'))
    },[id])
    return(
        
        <div>
            <h1>{producto?.title}</h1>
            <p>{producto?.title}</p>
            </div>
    );
};

export default ProductoDetail;