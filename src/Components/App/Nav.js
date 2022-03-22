import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="nav-bar" bg="black" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>
            Google Book API
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/list-builder">
              List Builder
            </Link>
            <Link className="nav-link" to="/my-list">
              My List
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
