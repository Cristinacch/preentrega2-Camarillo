import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/" as={NavLink}>
                    The Point
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>
                            Home
                        </Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item to="/category/laptops" as={NavLink}>
                                Laptos
                            </NavDropdown.Item>
                            <NavDropdown.Item to="/category/smartphones" as={NavLink}>
                                Smartphones
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
    );
};

export default NavBar;