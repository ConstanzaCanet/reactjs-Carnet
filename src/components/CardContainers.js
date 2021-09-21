import *as React from "react";
import Cards from './Cards'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap';


const CardContainers = () =>{
    const [libros , setLibros] = React.useState([]);
    const[load,setLoad]=React.useState(false);

    React.useEffect(()=>{
        const urlAll= 'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed'; 
        setLoad(true);

        fetch(urlAll)
        .then((resp) =>{
         if (resp.ok) {
                return resp.json();
            }else{
                 throw resp;
            }
        })
        .then((books)=> setLibros(books))
        .catch((error) => console.log('libro inexistente'))
        .finally(()=> setLoad(false))
         },[]);

    return(
      <div className='divCard'>
        {load? <Spinner animation="grow" className='spinner' style={{width: '6rem', height: '6rem'}}/> :null}
         
         
         {libros?.map(libro=> {
             return <article key={libro.category_id}>
                        <Cards 
                             id={libro.category_id}
                             src={libro.cover}
                             name={libro.title}
                             author={libro.author}
                             content={libro.content_short}
                             />
                     </article>
         })}
      </div>
  );

};

export default CardContainers;