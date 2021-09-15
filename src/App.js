import * as React from 'react';
import './App.css';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import Header from './components/Header';
import {Spinner} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import libro1 from './components/img/libro2.jpg'
import libro2 from './components/img/images.png'
import libro3 from './components/img/libro3.png'


function App() {
  const[items,setItems]=React.useState([]);
  const[load,setLoad]=React.useState(false);

  React.useEffect(()=>{
    setLoad(true);
    getBooks()
      .then((result)=>setItems(result))
      .finally(()=> setLoad(false))
  },[]);
  
  const getBooks=()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(books)
      },4000);
    });
  }
  const books=[
    {id:0, name:'Libro cero', src:libro1},
    {id:1, name:'Primer libro', src:libro2},
    {id:2, name:'Segundo libro', src:libro3},
    {id:3, name:'Tercer libro', src:libro1},
    {id:4, name:'Libro cero', src:libro1},
    {id:5, name:'Primer libro', src:libro2},
    {id:6, name:'Segundo libro', src:libro3},
    {id:7, name:'Libro cero', src:libro1},
    {id:8, name:'Primer libro', src:libro2},
    {id:9, name:'Primer libro', src:libro2},
    {id:10, name:'Segundo libro', src:libro3}
  ]



  return (
    <div style={{textAlign:'center'}}>

    <NavBar />
    <Header />
    {load? <Spinner animation="grow" className='spinner' style={{width: '6rem', height: '6rem'}}/> :null}


      <div className='divCard'>
        {items?.map((libro) => {
          return(
            <Cards
                key={libro.id}  
                name={libro.name}
                src={libro.src}/>
          )
        })}
      </div>

    </div>
  );
}

export default App;
