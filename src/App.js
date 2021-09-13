import * as React from 'react';
import './App.css';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import libro1 from './components/img/libro2.jpg'
import libro2 from './components/img/images.png'
import libro3 from './components/img/libro3.png'


function App() {
  
  return (
    <div>

    <NavBar />
    <Header />

      <div className='divCard'>
        <Cards name='Libro cero' src={libro1}/>
        <Cards name='Primer libro' src={libro2}/>
        <Cards name='Segundo libro'src={libro3}/>
        <Cards name='Tercer libro'src={libro1}/>
      </div>
    </div>
  );
}

export default App;
