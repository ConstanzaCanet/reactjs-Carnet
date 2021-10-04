import * as React from "react";
import ItemCount from "../components/ItemCount";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Spinner} from 'react-bootstrap';
import { useParams } from "react-router";



const ProductoDetail =()=>{
    const [producto, setProducto] =React.useState({});

        /*Agregado de rendering */
    const [loading , setLoading] = React.useState(true); 
    React.useEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, [])


    /*Context */   
    const {id} = useParams();
    


    React.useEffect(()=>{
        fetch(`https://www.etnassoft.com/api/v1/get/?id=${id}`)
            .then((resp)=>resp.json())
            .then((data)=>setProducto(data[0]))
            .catch((error)=>console.log('Producto no encontrado'))
    },[id])
    return(
        <>
          {loading && <Spinner animation="grow" variant="info" style={{width: '6rem', height: '6rem', marginTop:'15%'}}/> }

          {!loading &&
            <div>
                <Card.Header><h1>{producto?.title}</h1></Card.Header>
                    <div className='detailCard'>
                        <div>
                            <Card>
                                <Card.Img style={{ width: '30rem', height:'40rem' }} src={producto?.cover} />
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <Card.Body>
                                    <Card.Text className='m-5 contentCard'>
                                        {producto?.content}
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
                                    <ItemCount name={producto?.title} id={producto?.ID} stock='10'/>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>
            
             </div>
            }
    </>
    );
};

export default ProductoDetail;