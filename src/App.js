import * as React from 'react';
import './App.css';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import libro1 from './components/img/libro2.jpg'
import libro2 from './components/img/images.png'
import libro3 from './components/img/libro3.png'


function App() {
  const sumar=()=>{
      // carrito-localstorage
      let carritoList = JSON.parse(localStorage.getItem("compra"));
      // Si no fue creado, genero carrito
      if (!carritoList) {
          carritoList = [];
          localStorage.setItem('compra', JSON.stringify(carritoList));
      }
        //agrego producto al carrito y muestro señal
        carritoList.push(this);
        localStorage.setItem('compra', JSON.stringify(carritoList));
        alert(`adquiriste producto`)
  };
  return (
    <div>

    <NavBar />

      <div className='divCard'>
        <Cards name='Libro cero' src={libro1} adquirir={sumar}/>
        <Cards name='Primer libro' src={libro2} adquirir={sumar}/>
        <Cards name='Segundo libro'src={libro3} adquirir={sumar}/>
        <Cards name='Tercer libro'src={libro1} adquirir={sumar}/>
      </div>
    </div>
  );
}

export default App;
