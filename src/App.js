import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from './pages/Home';
import  Container  from './pages/Container';
import NotFound from './pages/NotFound';
import ProductoDetail from './pages/ProductoDetail';
import CardContainerDos from './components/CardContainerDos';
import Cart from './pages/Cart';
import  {CartProvider, useCart}  from './context/ContextCart';


function App() {
  
  return (

    <BrowserRouter>

      <CartProvider> 
      

      <div style={{textAlign:'center'}}>

        <NavBar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/container" component={Container} />
          <Route exact path="/container2" component={CardContainerDos}/>
          <Route exact path="/product/:id" component={ProductoDetail} />
          
          <Route exact path="/cart">
            <Cart />
          </Route>

          <Route path="*" component={NotFound} />
        </Switch>

      </div>


      </CartProvider>
      
    </BrowserRouter>

  );
}

export default App;
