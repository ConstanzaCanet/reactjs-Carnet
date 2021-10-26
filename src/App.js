import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductoDetail from './pages/ProductoDetail';
import Cart from './pages/Cart';
import CardContainers from './components/CardContainers';
import Login from './pages/Login';
import FormFinal from './pages/FormFinal';


function App() {

  
  return (

    <BrowserRouter>
      

      <div style={{textAlign:'center'}}>
       
        <NavBar />
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/container/:id" component={CardContainers} />
          <Route exact path="/product/:id" component={ProductoDetail} />
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/finalForm" component ={FormFinal}/>
          <Route path="*" component={NotFound} />
        </Switch>

      </div>
      
    </BrowserRouter>

  );
}

export default App;
