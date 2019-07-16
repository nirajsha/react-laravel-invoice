
import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';


export const NavigationBar = () => (
  <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Container>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
)
