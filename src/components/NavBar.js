import * as React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container,Form,FormControl,Button } from 'react-bootstrap';
import carro from './img/carro.png'
import logo from './img/book.jpg'



export const NavBar = () => {
    const [logueado, setlogueado]= React.useState(false);

    return (
        <div>

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container  className='m-2'>
                <Navbar.Brand href="#home"><img title='read' alt='book' className='logo'  src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="../index.js">Home</Nav.Link>
                            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Cosa1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Cosa2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cosa 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Sobre la cosa</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                      <Nav>
                        
                         <Form className="d-flex">
                         <FormControl
                          type="search"
                          placeholder="Search"
                          className="mr-0"
                          aria-label="Search"
                          />
                         <Button variant="outline-danger">Search</Button>
                         <Button variant="dark"><img src={carro}/></Button>{' '}
                         {logueado.toString()}
                        </Form>
                      
                     </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;