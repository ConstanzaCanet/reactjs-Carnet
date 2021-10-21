import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonGroup,ListGroup, Card} from 'react-bootstrap';
import buy from './img/buy.png'
import swal from "sweetalert";
import { useUser } from "../context/ContextUser";
import { useCart } from '../context/ContextCart';

function ItemCount({name , id , stock, listPrice}) {
    const { datos } = useUser();
    const { isInCart }=useCart();

    const[count,setCount]= React.useState(0);
    const [Disp,setDisp]= React.useState('none');
    const [DispBuy,setDispBuy]= React.useState('block');
    


    const handleChange= () =>{
        if (datos == 0 ) {            
            if(Disp ==='block'){
                setDisp('none');
                setDispBuy('block');
            }else{
                setDisp('block');
                setDispBuy('none');
            }
        }else{
            return console.log('logueate')
        }
    }

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
             setDisp('none');
                setDispBuy('block');
            }else{
                setCount((prevState)=> prevState - 1)
         }
      }


        //Funcion que anule compra
        const onClickCancel= ()=>{
            setDisp('none');
            setDispBuy('block');
            return( 
                swal({
                title:'Se ha cancelado solicitud',
                icon:'warning',
                button: 'Aceptar',
                timer: 2000}))
        }


    //Retorno elementos,componentes y funciones
    return (
        <div>
             <ListGroup style={{display: DispBuy}}>
                    <Button variant="outline-secondary" onClick={handleChange}><img src={buy} alt="buy" /></Button>
            </ListGroup>
 
            <div className='itemCount' style={{display: Disp}}>
                <ButtonGroup style={{ width: '17rem' }} defaultValue={count}>
                    <Button variant="outline-dark" onClick={onClickLess}>-</Button>
                    <Button value={count} variant="dark">{count}</Button>
                    <Button variant="outline-dark" onClick={onClickAdd}>+</Button>
                </ButtonGroup>

                <Card.Body className='buttCoutn'>
                    <Button variant="danger" onClick={onClickCancel}>Cancelar</Button>
                    <Button variant="success" onClick={()=> isInCart(id,name,count,listPrice) } title='doble-click'>Finalizar</Button> 
                </Card.Body>
            </div>
        </div>

        
    );
  }
  
export default ItemCount;