// NavigationBar.js
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./navigationBar.module.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { createClient } from "contentful";
import { useClothesContext } from "../../context/clothes-context";
import React, { useRef } from "react";
import { useSession, signOut } from "next-auth/react";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const NavigationBar = ({ }) => {
  const router = useRouter();
  const query = useRef();
  const { setSearchResults, setLogInUser, setSessions } = useClothesContext();

  const { data: session, status } = useSession();
  let navProfileName;
  let modifiedName;
  let guid;

  if (status == "authenticated") {
    const { name, email } = session.user;
    const base64String = "6UiddY2qpUepKsTvyAA97Q==";

    const binary = Buffer.from(base64String, "base64");
    const hexString = binary.toString("hex");

    // Format the hex string as GUID (32 digits with 4 dashes)
    guid = [
      hexString.substring(6, 8) +
      hexString.substring(4, 6) +
      hexString.substring(2, 4) +
      hexString.substring(0, 2),
      hexString.substring(10, 12) + hexString.substring(8, 10),
      hexString.substring(14, 16) + hexString.substring(12, 14),
      hexString.substring(16, 20),
      hexString.substring(20),
    ].join("-");

    if (name === "") {
      navProfileName = "Profile";
    } else {
      navProfileName = name;
    }
  }

  const logoutHandler = () => {
    signOut();
  };

  const handleKeyDown =  (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onPress(e);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    let title = e.target.title;
    if (guid && status === "authenticated") {
      const { name } = session.user;
      setLogInUser({ id: guid, name: navProfileName });
      setSessions(session);
    }
    router.push(title);
  };

  const onPress = async (e) => {
    e.preventDefault();
    try {
      const { items } = await client.getEntries({
        content_type: "clothes",
        query: query.current.value,
      });
      setSearchResults(items);
      router.push(`/search-results/${query.current.value}`);
    } catch (error) {
      console.error("Error searching Contentful:", error);
    }
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <Button
              onClick={clickHandler}
              className={classes.customButton}
              title="/"
            >
              Athleisurce
            </Button>
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              ref={query}
              onKeyDown={handleKeyDown}
            />
            <Button onClick={onPress} variant="outline-primary">
              <FaSearch />
            </Button>
          </Form>
          <Nav.Link href="/shirts">
            <Button
              onClick={clickHandler}
              className={classes.customButton}
              title="/shirts"
            >
              Shirts
            </Button>
          </Nav.Link>
          <Nav.Link href="/pants">
            <Button
              onClick={clickHandler}
              className={classes.customButton}
              title="/pants"
            >
              Pants
            </Button>
          </Nav.Link>
          <Nav>
            {/* Cart Icon */}
            <Nav.Link href="/cart">
              <Button
                onClick={clickHandler}
                className={classes.customButton}
                title="/cart"
              >
                Cart
              </Button>
            </Nav.Link>
          </Nav>
          {!session && (
            <Nav.Link href="/sign-up">
              <Button
                onClick={clickHandler}
                className={classes.customButton}
                title="/sign-up"
              >
                Sign Up
              </Button>
            </Nav.Link>
          )}
          {!session && (
            <Nav.Link href="/log-in">
              <Button
                onClick={clickHandler}
                className={classes.customButton}
                title="/log-in"
              >
                Log In
              </Button>
            </Nav.Link>
          )}
          {session && (
            <NavDropdown title={navProfileName}>
              <NavDropdown.Item href={`/profile}`}>
                <Button
                  onClick={clickHandler}
                  className={classes.customNavDropdown}
                  title={`/profile}`}
                >
                  Profile
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item href={`/order/${guid}`}>
                <Button
                  onClick={clickHandler}
                  className={classes.customNavDropdown}
                  title={`/order/${guid}`}
                >
                  Your Orders
                </Button>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logoutHandler}>
                <Button
                  onClick={logoutHandler}
                  className={classes.customNavDropdown}
                >
                  Sign Out
                </Button>
              </NavDropdown.Item>
            </NavDropdown>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
