import * as React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container,Form,FormControl,Button } from 'react-bootstrap';
import carro from './img/carro.png'
import logo from './img/book.jpg'

import { Link } from "react-router-dom";
import { useCart } from '../context/ContextCart';



export const NavBar = () => {
   
    const {cart}=useCart();

    return (
        <div>

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to='/'><img title='read' alt='book' className='logo'  src={logo}/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to='/'><Link to='/' className='link'>Home</Link></Nav.Link>
                        <NavDropdown title="Categorías" id="nav-dropdown-dark-example"  menuVariant="dark">
                        <NavDropdown.Item href="#action/3.1"> <Link to='/container' className='link'>Container</Link> </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><Link to='/container2' className='link'>Container2</Link></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Link to='/container' className='link'>Container</Link></NavDropdown.Item>
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
                                    <Button variant="dark"><img src={carro} alt="carrito"/></Button>{' '}
                                </Link>
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