import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonGroup,ListGroup,ListGroupItem, Card} from 'react-bootstrap';
import buy from './img/buy.png'
import { useCart } from '../context/ContextCart';
import swal from "sweetalert";

function ItemCount({name , id , stock, listPrice}) {
    const[count,setCount]= React.useState(0);
    const [Disp,setDisp]= React.useState('none');
    const [DispBuy,setDispBuy]= React.useState('block');
    
    const { isInCart }=useCart();

    const handleChange= () =>{
        if(Disp ==='block'){
            setDisp('none');
            setDispBuy('block');
        }else{
            setDisp('block');
            setDispBuy('none');
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
            alert('Compra anulada, sigue buscando, tenemos muchos libros!')
        }


    //Retorno elementos,componentes y funciones
    return (
        <div>
             <ListGroup className="list-group-flush" style={{display: DispBuy}}>
                <ListGroupItem>
                    <Button variant="outline-secondary" onClick={handleChange}><img src={buy} alt="buy" /></Button>
                </ListGroupItem>
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