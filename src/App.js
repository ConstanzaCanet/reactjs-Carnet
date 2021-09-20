import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import {Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CardContainers from './components/CardContainers';


function App() {

  return (
    <div style={{textAlign:'center'}}>

    <NavBar />
    <Header />
    <CardContainers />

    </div>
  );
}

export default App;
