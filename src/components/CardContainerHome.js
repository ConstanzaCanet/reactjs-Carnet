import *as React from "react";
import Cards from './Cards'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap';
import { getFirestore } from '../firebase/index';

const CardContainerHome = () =>{
    const [libros , setLibros] = React.useState([]);
    const[load,setLoad]=React.useState(true);
    const [error, setError]= React.useState(null);
    /*LLAMADO A FIREBASE */
    React.useEffect(()=>{
      const dataBase = getFirestore();
      const productCollection = dataBase.collection('booksProducts');

      productCollection
      .get()
      .then((querySnapshot)=>{
        if(querySnapshot.empty) {
          console.log("DATA FALTANTE")
        }else{
          setLibros(querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
        }
      })
      .catch((error)=>setError(error))
      .finally(()=> setLoad(false))
    },[]);

    return(
      <div className='divCard'>
        {load? <Spinner animation="grow" className='spinner' style={{width: '6rem', height: '6rem'}}/> :null}
         
         
         {libros?.map(libro=> {
             return <article key={libro.id}>
                        <Cards 
                             id={libro.id}
                             src={libro.imageLinks}
                             name={libro.title}
                             author={libro.authors}
                             content={libro.description}
                             />
                     </article>
         })}
      </div>
  );

};

export default CardContainerHome;