import * as React from "react";
import swal from "sweetalert";

const ContextCart = React.createContext([]);
ContextCart.displayName = "ContextCart";

export const CartProvider= ({ children }) =>{
    const [cart, setCart] = React.useState([]);
    /*funcion de compra*/
    const addItem = (item , name, quantity)=> {
        const newItem={ item, name, quantity};
        setCart((prevState)=>[...prevState, newItem]);
        swal({
            title:'Genial!',
            text: 'Has agregado un nuevo producto!',
            icon:'success',
            timer: 2000,
        })
    };
     /*funcion que evita adquirir producto con misma id*/
    /*debo recorrer array cart y filtrar los que ya estan, evitando que se agreguen*/
    const isInCart =(item , name, quantity)=>{
        if(cart.find((product)=> product.item === item)){
            return (
                swal({
               title:'Producto ya agregado!',
               text: 'Este producto ya se encuentra en el carrito',
               icon:'warning',
               timer: 2000,
           }))   
        }else{
            return addItem(item , name, quantity);
        }
    };

    /*elimina producto en particular*/
    const removeItem=(item, name)=>{
        swal({
            title:'¿Estas seguro que deseas eliminar este producto?',
            text: `Eliminaras el producto ${name}`,
            icon:'warning',
            buttons: ["No","Si"]
        }).then(request =>{
            if (request) {
                const newItems = cart.filter((product)=> product.item !== item)
                setCart(newItems);
                swal({
                    title:'Producto eliminado',
                    text: `${name} eliminado de carrito con exito`,
                    icon:'success',
                    button: 'Aceptar',
                    timer: 2000})
            }
        })
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

    const cantidad= () =>{
        let quantity=0;
        cart.forEach((p)=>{
            quantity += p.quantity;
        });
        return quantity;
    };
    /*Total $$ compra*/

    const totalMoney= ()=>{
        let total=0;
        cart.forEach((p)=>{
            total += p.quantity*(p.item/100)
        })
        return total;
    }

    const cosas={ cart, setCart,addItem, isInCart, removeItem, clear, cantidad,totalMoney }
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