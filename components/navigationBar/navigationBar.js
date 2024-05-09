// NavigationBar.js
import Link from 'next/link';
import classes from './navigationBar.module.css';
import { Nav, Navbar, NavDropdown, Button, Form, Container } from 'react-bootstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import {createClient} from 'contentful';

const NavigationBar = ({ }) => {
  const onPress = () => {
    console.log('This event is not yet implemented');
  }
  return (
    <>
      <Navbar bg='light' data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Athleisurce</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={onPress} variant='outline-primary'>
              <FaSearch />
            </Button>
          </Form>
          <Nav.Link href="/shirts">Shirts</Nav.Link>
          <Nav.Link href="/pants">Pants</Nav.Link>
          <Nav>
            {/* Cart Icon */}
            <Nav.Link href='/cart'>
              <FaShoppingCart size={20} />
            </Nav.Link>
          </Nav>
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/log-in">Log In</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
