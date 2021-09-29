import * as React from "react";

const ContextCart = React.createContext([]);


export const CartProvider= ({ children }) =>{
    const [cart, setCart] = React.useState([1,23,2]);

    function saludito(){
        console.log('holis!');
    }

    return <ContextCart.Provider  value={{ cart, setCart, saludito }}> {children} </ContextCart.Provider>;
};

export const useCart =() =>{
    const context= React.useContext(ContextCart);
    if (!context){
        throw new Error('Fuera de contexto cartProvider!')
    }
    return context;
}


export default ContextCart;