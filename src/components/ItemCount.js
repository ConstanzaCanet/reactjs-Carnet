import * as React from 'react';
import { createRef, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonGroup,Card} from 'react-bootstrap';
import swal from "sweetalert";
import { useUser } from "../context/ContextUser";
import { useCart } from '../context/ContextCart';

function ItemCount({name , id , stock, listPrice}) {
    const { datos } = useUser();
    const { isInCart }=useCart();

    const[count,setCount]= React.useState(0);
    
    let refBuy = useRef(),
    refBuyBtn = useRef();

    const handleBuyRef = (e)=>{
        if(refBuyBtn.current.textContent === 'Adquirir'){
            refBuyBtn.current.textContent ='Cerrar';
            refBuy.current.style.display='block';
        }else{
            refBuyBtn.current.textContent= 'Adquirir';
            refBuy.current.style.display='none';
            setCount(0)
        }
    };

    const onClickAdd= ()=>{

        if (count >= stock) {
            return (   
                swal({
                title:'No hay suficiente stock',
                text: `${name} con limite de stock`,
                icon:'warning',
                button: 'Aceptar',
                timer: 2000}))
        }else{
            setCount((prevState)=> prevState + 1);
        }
      }
        //Funcion que disminuya cantidad de elementos seleccionados
        const onClickLess=()=>{
            if (count=== 0) {
                refBuy.current.style.display='none';
                refBuyBtn.current.textContent= 'Adquirir';
            }else{
                setCount((prevState)=> prevState - 1)
         }
      };

    //Retorno elementos,componentes y funciones
    return (
        <div className='container'>
            <div className='buyDiv'>
            <Button variant="outline-secondary" onClick={handleBuyRef} ref={refBuyBtn}>Adquirir</Button>
            </div>

            <div className='itemCount' ref={refBuy}>
                <ButtonGroup style={{ width: '17rem', marginLeft:'1rem' }} defaultValue={count}>
                    <Button variant="outline-dark" onClick={onClickLess}>-</Button>
                    <Button value={count} variant="dark">{count}</Button>
                    <Button variant="outline-dark" onClick={onClickAdd}>+</Button>
                </ButtonGroup>

                <Card.Body className='buttCoutn'>
                    <Button variant="success" onClick={()=> isInCart(id,name,count,listPrice) } title='doble-click'>Finalizar</Button> 
                </Card.Body>
            </div>
        </div>

        
    );
  }
  
export default ItemCount;