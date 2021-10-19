import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {CartProvider}  from './context/ContextCart';
import {UserProvider} from './context/ContextUser';



ReactDOM.render(
  <>
    <UserProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </UserProvider>
    
  </>,
  document.getElementById('root')
);
