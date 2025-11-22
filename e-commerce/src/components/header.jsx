
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { Lang } from "../context/lang.jsx";
import { Dropdown } from "react-bootstrap";
export default function AppNavbar() {
  const cartCount = useSelector((state) => state.cart.items.length);
  const { lang, setLang } = useContext(Lang);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/products" className="fw-bold">
          MyShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

       
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>

          <Nav className="me-3">
            <Nav.Link as={NavLink} to="/cart" className="position-relative">
              Cart
              {cartCount > 0 && (
                <Badge bg="danger" pill className="ms-2">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
          <Nav className="me-3">
            <Dropdown>
              <Dropdown.Toggle variant="secondary">
                {lang === "en" ? "English" : "العربية"}
              </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setLang("en")}>
                English
              </Dropdown.Item>

              <Dropdown.Item onClick={() => setLang("ar")}>
              العربية
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav className="me-3">
          <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
        </Nav>
        <Nav className="me-3">
          <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
        </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
