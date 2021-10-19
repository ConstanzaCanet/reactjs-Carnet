import * as React from "react";
import ItemCount from "../components/ItemCount";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Spinner} from 'react-bootstrap';
import { useParams } from "react-router";
import { getFirestore } from "../firebase";


const ProductoDetail =()=>{
    const [producto, setProducto] =React.useState({});

        /*rendering */
    const [loading , setLoading] = React.useState(true); 
    React.useEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, [])


    /*Context */   
    const {id} = useParams();
    


    React.useEffect(()=>{
        const dataBase= getFirestore();
        const productCollection = dataBase.collection('booksProducts');
        
        const book = productCollection.doc(id);
        book.get()
        .then((doc)=>{
            if(!doc.exists){
                console.log('PRODUCTO NO ENCONTRADO!')
            }else{
                setProducto({id: doc.id, ...doc.data()});
            }
        })
        .catch(()=>{})
        .finally(()=>{});
    },[id]);




    return(
        <>
          {loading && <Spinner animation="grow" variant="info" style={{width: '6rem', height: '6rem', marginTop:'15%'}}/> }

          {!loading &&
            <div className="box01 container">
                    <div className="row row-cols-sm-8 row-cols-md-8">

                    <div className="col">
                            <img style={{ width: '30rem', height:'40rem',objectFit:'cover', float:'left'}} src={producto?.imageLinks} />
                    </div>

                    <div className="box03 col">
                            <h1 className='titleBook'>{producto?.title}</h1>
                            <p>
                                {producto?.description}
                            </p>
                                <footer className="blockquote-footer footerCard">
                                    <ul>
                                        <li>
                                            Author :  <cite title="Source Title">{producto?.authors}</cite> 
                                        </li>
                                        <li>
                                            Publisher date :  <cite title="Source Title">{producto?.publishedDate}</cite> 
                                        </li>
                                        <li>
                                            Categories :  <cite title="Source Title">{producto?.categories}</cite> 
                                        </li>
                                        <li>
                                            Pages :  <cite title="Source Title">{producto?.pageCount}</cite> 
                                        </li>
                                        <li>
                                            Price :  <cite title="Source Title">${producto?.listPrice}</cite> 
                                        </li>
                                    </ul>
                                </footer>
                                <ItemCount name={producto?.title} id={producto?.id} stock={producto?.stock} listPrice={producto?.listPrice}/>
                    </div>
                </div>
             </div>
            }
    </>
    );
};

export default ProductoDetail;