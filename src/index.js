import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {CartProvider}  from './context/ContextCart';



ReactDOM.render(
  <>
    <CartProvider>
      <App />
    </CartProvider>
    
  </>,
  document.getElementById('root')
);
