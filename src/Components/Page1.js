import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
export default function Page1() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="gold" href="#">
          <img src="fakelogo.png" alt="fake" height={70}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action2">Home</Nav.Link>

            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Men's Clothing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Women's Clothing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Gadgets</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">
              {" "}
              <img
                src="Picsart_22-07-13_22-31-21-357.png"
                alt="fake"
                className="cart"
                height={30}
              ></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
