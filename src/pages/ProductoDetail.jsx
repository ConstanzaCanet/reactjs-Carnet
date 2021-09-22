import * as React from "react";
import ItemCount from "../components/ItemCount";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
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
            <Card.Header><h1>{producto?.title}</h1></Card.Header>
        <div className='detailCard'>
            <div className='mt-4'>
                <Card>
                    <Card.Img style={{ width: '30rem', height:'40rem' }} src={producto?.cover} />
                </Card>
            </div>
            <div>
                <Card style={{height:'40rem' }}>
                    <Card.Body>
                        <Card.Text className='m-5'>
                            <blockquote className="contentCard">
                                {producto?.content}
                            </blockquote>    
                            </Card.Text>
                        <footer className="blockquote-footer footerCard">
                            <ul>
                                <li>
                                Author :  <cite title="Source Title">{producto?.author}</cite> 
                                </li>
                                <li>
                                Publisher date :  <cite title="Source Title">{producto?.publisher_date}</cite> 
                                </li>
                                <li>
                                Pages :  <cite title="Source Title">{producto?.pages}</cite> 
                                </li>
                            </ul>
                           
                         </footer>
                        <ItemCount name={producto?.title} />

                    </Card.Body>
                </Card>

                </div>
        </div>
            
    </div>
    );
};

export default ProductoDetail;