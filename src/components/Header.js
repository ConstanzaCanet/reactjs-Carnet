import * as React from 'react';
import '../App.css';

class Header extends React.Component{

    render(){
        return(
            <div>
                
                <section className='portada'>
                    <div className='content'>
                        <h2>La librería!</h2>
                        <p>Lee los buenos libros primero; lo más seguro es que no alcances a leerlos todos.</p>
                    </div>
                </section>
            </div>
        )
    }
}
export default Header;