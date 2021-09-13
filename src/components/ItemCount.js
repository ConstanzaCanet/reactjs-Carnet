import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonGroup,ListGroup,ListGroupItem,Card} from 'react-bootstrap';
import buy from './img/buy.png'

function ItemCount() {
    const[count,setCount]= React.useState(0);
    const [Disp,setDisp]= React.useState('none');
    const [DispBuy,setDispBuy]= React.useState('block');

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
        setCount((prevState)=> prevState + 1);
      }

    const onClickLess=()=>{
        if (count=== 0) {
            setDisp('none');
            setDispBuy('block');
        }else{
            setCount((prevState)=> prevState - 1)
        }
    }

    const onClickCancel= ()=>{
        setDisp('none');
        setDispBuy('block');
        alert('Compra anulada, sigue buscando, tenemos muchos libros!')
    }



    return (
        <div>
             <ListGroup className="list-group-flush" style={{display: DispBuy}}>
                <ListGroupItem>
                    <Button variant="outline-secondary" onClick={handleChange}><img src={buy}/></Button>
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
                  <Button variant="success">Finalizar</Button>
                </Card.Body>
            </div>
        </div>

        
    );
  }
  
export default ItemCount