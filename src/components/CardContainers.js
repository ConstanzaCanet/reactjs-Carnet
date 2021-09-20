import *as React from "react";

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardContainers = () =>{
    const [libros , setLibros] = React.useState([]);

    React.useEffect(()=>{
        const urlAll= 'https://www.etnassoft.com/api/v1/get/?get_categories=all'; 
    
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
         
      </div>
  );

};

export default CardContainers;