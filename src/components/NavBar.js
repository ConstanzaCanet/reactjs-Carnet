import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container,Form,FormControl,Button } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <div>
            <section className='portada'>
                <div className='content'>
                    <h2>La librería!</h2>
                    <p>Lee los buenos libros primero; lo más seguro es que no alcances a leerlos todos.</p>
                </div>
            
            </section>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container  className='m-2'>
                <Navbar.Brand href="#home">La librería</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
                        </Form>
                      
                     </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavBar;