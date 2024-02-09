import Logo from "../data/img/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchComponent from "../component/SearchComponent";
import LoginComponent from "../component/LoginComponent";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar key={"md"} expand={"md"} className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={Logo} alt="logo" width="200" height="45" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"md"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"md"}`}
            placement="end"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/citycomponent" className="nav-link">
                  Città
                </Link>
                <LoginComponent />
              </Nav>
              <SearchComponent />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
