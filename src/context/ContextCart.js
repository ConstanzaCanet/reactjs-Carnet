import * as React from "react";
import swal from "sweetalert";

const ContextCart = React.createContext([]);
ContextCart.displayName = "ContextCart";

export const CartProvider= ({ children }) =>{
    const [cart, setCart] = React.useState([]);
    /*funcion de compra*/
    const addItem = (item , quantity)=> {
        const newItem={ item, quantity};
        setCart((prevState)=>[...prevState, newItem]);
    };
    /*elimina producto en particular*/
    const removeItem=(id)=>{

    };
    /*cancela/limpia carrito*/
    const clear =()=>{
        /*Muestro ventana de confirmacion */
        swal({
            title:'¿Estas seguro que deseas cancelar tu compra?',
            text: 'Eliminaras todos los productos seleccionados',
            icon:'warning',
            buttons: ["No","Si"]
        }).then(request =>{
            if (request) {
                setCart([]);
                swal({
                    title:'Carrito vaciado',
                    text: 'no hay productos en el carrito',
                    icon:'success',
                    button: 'Aceptar'})
            }
        })
    };
    const isInCart =(id)=>{

    };

    const cantidad= () =>{
        let quantity=0;
        cart.forEach((p)=>{
            quantity += p.quantity;
        });
        return quantity;
    };

    const cosas={ cart, setCart,addItem, isInCart, removeItem, clear, cantidad }
    return <ContextCart.Provider  value={cosas}> {children} </ContextCart.Provider>;
};

export const useCart =() =>{
    const context= React.useContext(ContextCart);
    if (!context){
        throw new Error('Fuera de contexto cartProvider!')
    }
    return context;
}


export default ContextCart;