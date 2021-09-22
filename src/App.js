import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home from './pages/Home';
import  Container  from './pages/Container';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter>
      <div style={{textAlign:'center'}}>
        <NavBar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/container" component={Container} />
          <Route path="*" component={NotFound} />
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
