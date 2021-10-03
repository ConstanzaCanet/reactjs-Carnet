import * as React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container,Form,FormControl,Button } from 'react-bootstrap';
import carro from './img/carro.png'
import logo from './img/book.jpg'

import { Link } from "react-router-dom";
import { useCart } from '../context/ContextCart';



export const NavBar = () => {
    const home = 'libros_programacion&criteria=most_viewed'
    /*Categorias*/
    const comics = 'comics';
    const idiomas= 'idiomas';
    const programacion = 'libros_programacion'; 
    const desarrolloWeb = 'desarrollo_web';
    const musica= 'musica-biblioteca';


    const {cart , cantidad}=useCart();



    return (
        <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to='/' id ={home}><img title='read' alt='book' className='logo'  src={logo}/></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' className='link m-2'>Home</Link>
                        <NavDropdown title="Categorías" id="nav-dropdown-dark-example"  menuVariant="dark">
                        <NavDropdown.Item href="#action/3.1"> <Link to={`/container/${comics}`} id='comics' className='link'>Comics</Link> </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"> <Link to={`/container/${idiomas}`} id='idiomas' className='link'>Idiomas</Link> </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"> <Link to={`/container/${musica}`} id='musica-biblioteca' className='link'>Musica</Link> </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"> <Link to={`/container/${programacion}`} id='libros_programacion' className='link'>Programacion</Link> </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"> <Link to={`/container/${desarrolloWeb}`} id='desarrollo_web' className='link'>Desarrollo Web</Link> </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sobre nosotros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-0"
                                aria-label="Search"
                                />
                                <Button variant="outline-danger">Search</Button>
                                <Link to='/cart' className='link'>
                                    <Button variant="dark"><img src={carro} alt="carrito"/></Button>
                                </Link>
                                <p>{cantidad()}</p>
                            </Form>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;