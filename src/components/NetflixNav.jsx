import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BellFill, Search  } from 'react-bootstrap-icons';


function NetflixNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            width="120px"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recentlyadded">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#search"><Search /></Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
            <Nav.Link href="#bell"><BellFill /></Nav.Link>
            <NavDropdown title={
              <img className="thumbnail-image"
                src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
                alt="user pic"
                width="25px"
              />
            }
            align="end" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">User 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">User 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">User 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Log-out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixNav