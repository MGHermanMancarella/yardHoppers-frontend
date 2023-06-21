import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";
import "./Navigation.css";

function Navigation({ logout }) {
  const { currUser } = useContext(userContext);

  return (
    <Navbar collapseOnSelect expand="md" className="navbar">
      <Navbar.Brand>
        <NavLink to="/" className="nav-link">
          <h2>Yard Hoppers</h2>
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link as={NavLink} to="/listings">
            Listings
          </Nav.Link>
          {!currUser && (
            <>
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup">
                Sign Up
              </Nav.Link>
            </>
          )}
          {currUser && (
            <>
              <Nav.Link as={NavLink} to="/new-listing">
                Create a Listing
              </Nav.Link>
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" onClick={logout} className="logout">
                Log out {currUser.username}
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
