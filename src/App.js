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
import ContextCart  from './context/ContextCart';

function App() {
  const [cart, setCart] = React.useState([]);
  return (

    <BrowserRouter>
      <ContextCart.Provider value={cart}> 
      

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


      </ContextCart.Provider>
    </BrowserRouter>

  );
}

export default App;
