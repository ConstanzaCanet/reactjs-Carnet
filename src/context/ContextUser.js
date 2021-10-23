import * as React from "react";

const ContextUser = React.createContext({})
ContextUser.displayName = "ContextUser"; 

export const UserProvider = ({ children }) =>{
    const [datos, setDatos] = React.useState({});

     

     const cosas={datos,setDatos}
     return <ContextUser.Provider value={cosas}> {children} </ContextUser.Provider>
}

export const useUser =() =>{
    const context= React.useContext(ContextUser);
    if (!context){
        throw new Error('Fuera de contexto userProvider!')
    }
    return context;
}

export default ContextUser;