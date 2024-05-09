// NavigationBar.js
import Link from 'next/link';
import {useRouter} from 'next/router';
import classes from './navigationBar.module.css';
import { Nav, Navbar, NavDropdown, Button, Form, Container } from 'react-bootstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import {createClient} from 'contentful';
import {useClothesContext} from '../../context/clothes-context';
import {useState, useRef} from 'react';

const client = createClient({
  space: 'p843ovnyw7tf',
  accessToken: 'L-nXGukJbr9-8cXH318T_7Ibn4-qm2sZIhmnXOdIvkU'
});

const NavigationBar = ({ }) => {
  const router = useRouter();
  const query = useRef();
  const {setSearchResults} = useClothesContext();

  const onPress = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: 'clothes',
        query: query.current.value
      });
      setSearchResults(items);
      router.push(`/search-results/${query.current.value}`)
    } catch (error) {
      console.error('Error searching Contentful:', error);
    }
  };

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
              ref={query}
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
