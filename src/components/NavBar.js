import * as React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container,Form,Button } from 'react-bootstrap';
import carro from './img/carro.png'
import usuario from './img/usuario.png'
import logo from './img/book.jpg'
import { Link } from "react-router-dom";
import { useCart } from '../context/ContextCart';
import { useUser  } from '../context/ContextUser';
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export const NavBar = () => {

    /*Categorias*/
    const comics = 'Comics';
    const Nature= 'Nature';
    const programacion = 'Computers'; 
    const historia = 'History';
    const Novels= 'Novels';
    const ciencias = 'Science';


    const { cantidad }=useCart();
    const { datos } = useUser();
    const history = useHistory();

    const salir =(e)=>{
        swal({
            title:'¿Quieres finalizar la sesion?',
            icon:'warning',
            buttons: ["No","Si"]
        }).then(request =>{
            if (request) {
                swal({
                    title:'Sesion finalizada',
                    icon: "success",
                    buttons:'Aceptar',
                    timer: 2000
                })
                history.push("/");
                window.location.reload(false);
            }
        })
    }

   
    return (
        <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' id ="home"><img title='read' alt='book' className='logo'  src={logo}/></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='link m-2'>Home</Link>
                        <NavDropdown title="Categorías" id="nav-dropdown-dark-example"  menuVariant="dark" className='dropdown'>
                            <ul className='categoriesItems'>
                                <li>
                                    <Link to={`/container/${comics}`} id='Comics' className='link'>Comics</Link> 
                                </li>
                                <li>
                                    <Link to={`/container/${Nature}`} id='Nature' className='link'>Naturaleza</Link> 
                                </li>
                                <li>
                                    <Link to={`/container/${Novels}`} id='Novels' className='link'>Novelas</Link> 
                                </li>
                                <li>
                                    <Link to={`/container/${programacion}`} id='Computers' className='link'>Programacion</Link> 
                                </li>
                                <li>
                                    <Link to={`/container/${historia}`} id='History' className='link'>Historia</Link> 
                                </li>
                                <li>
                                    <Link to={`/container/${ciencias}`} id='Science' className='link'>Ciencias</Link> 
                                </li>
                            </ul>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sobre nosotros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                       
                            <Form>
                                {datos.name && datos.email? 
                                  <div className='presente'>
                                    <Link to='/cart' className='link'>
                                        <p className='numProducts'>{cantidad()}</p>
                                        <Button variant="dark"><img src={carro} alt="carrito"/></Button>
                                    </Link>                              
                                   <Button variant="dark" onClick={salir}><img src={usuario} alt="login"/></Button>
                                  </div>

                                    :
                                    <Link to='/login' className='link'>
                                        <Button variant="dark"><img src={usuario} alt="login" className="nabBot"/></Button>
                                    </Link>
                                    }

                            </Form>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;