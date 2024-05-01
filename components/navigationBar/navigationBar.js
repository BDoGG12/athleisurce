// NavigationBar.js
import Link from 'next/link';
import classes from './navigationBar.module.css';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';

const NavigationBar = ({  }) => {
  return (
    <>
    <Navbar bg='dark' data-bs-theme='dark'>
      <Navbar.Brand href='/'>Athleisurce</Navbar.Brand>
      <Form className={classes.customSearchForm}>
        <Form.Control className={classes.formControl} />
        <Button>Search</Button>
      </Form>
    </Navbar>
    </>
  );
};

export default NavigationBar;
