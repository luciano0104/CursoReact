import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget'
function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ETERNIA-POP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#link">NOSOTROS</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">INDUMENTARIA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                MATES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TAZAS</NavDropdown.Item>
              <NavDropdown.Divider />
              </NavDropdown>
          </Nav>
          <Nav.Link href="#link"><CartWidget/></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;