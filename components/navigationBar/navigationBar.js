// NavigationBar.js
import Link from 'next/link';
import classes from './navigationBar.module.css';
import { Nav, Navbar, NavDropdown, Button, Form, Container } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';

const NavigationBar = ({  }) => {
  return (
    <>
    <Navbar bg='dark' data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Athleisurce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/shirts">Shirts</Nav.Link>
            <Nav.Link href="/pants">Pants</Nav.Link>
            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
            <Nav.Link href="/log-in">Log In</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
          <Nav>
            {/* Cart Icon */}
            <Nav.Link href='/cart'>
              <FaShoppingCart size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavigationBar;
