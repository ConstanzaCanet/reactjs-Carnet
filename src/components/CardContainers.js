import *as React from "react";

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardContainers = () =>{
  React.useEffect(()=>{
    const urlAll= 'https://www.etnassoft.com/api/v1/get/?get_categories=all'; 
    
    fetch(urlAll).then((resp) => resp.json())
    .then((books) => console.log(books))
    .catch(error => console.log('libros no encontrados...'))
     });

  return(
      <div className='divCard'>
         
      </div>
  );

};

export default CardContainers;