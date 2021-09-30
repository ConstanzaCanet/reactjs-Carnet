import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonGroup,ListGroup,ListGroupItem} from 'react-bootstrap';
import buy from './img/buy.png'
import ButtonCount from './ButtonCount';

function ItemCount({name , id , stock}) {
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

        if (count === {stock}) {
            alert('No hay suficiente stock!')
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


        //creo un objeto que me permita guardar cantidad y nombre del libro(simulo un objeto de una api)
        class Libro{
            constructor(name,amount,price,id){
                this.name=name;
                this.amount=amount;
                this.price= (price/4).toFixed(2);
                this.id=id;
            }
     }


        //Funcion que llevara a cabo el guardado del objeto en el carrito
         const onClickFinish=(name,amount,price,id,e)=>{
            if (amount=== 0) {
                alert('No hay productos en la canasta! No es posible realizar la compra')
                setDisp('none');
                setDispBuy('block');
            }else{
                // carrito-localstorage
                let carritoList = JSON.parse(localStorage.getItem("compra"));
                // Si no fue creado, genero carrito
                if (!carritoList) {
                    carritoList = [];
                    localStorage.setItem('compra', JSON.stringify(carritoList));
                }
                //agrego producto al carrito y muestro señal
                let libroAdquirido= new Libro(name, amount, price,id)
                carritoList.push(libroAdquirido);
                localStorage.setItem('compra', JSON.stringify(carritoList));
                alert(`adquiriste el producto ${name}`)
                setDisp('none');
                setDispBuy('block');
            }
            
        };

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

                <ButtonCount handleClick={(e)=>onClickFinish(name,count,id,id)} onClickCancel={onClickCancel} />
            </div>
        </div>

        
    );
  }
  
export default ItemCount;