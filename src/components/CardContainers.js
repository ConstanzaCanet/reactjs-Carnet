import *as React from "react";
import Cards from './Cards'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";


const CardContainers = () =>{
    const [libros , setLibros] = React.useState([]);
    

    React.useEffect(()=>{
        const urlAll= 'https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed'; 
    
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
         },[]);

    return(
      <div className='divCard'>
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