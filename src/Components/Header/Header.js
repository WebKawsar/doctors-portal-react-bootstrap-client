import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
          <Navbar variant="light">
              <Nav className="ml-auto">
              <Nav.Link className="p-5" href="#home">Home</Nav.Link>
              <Nav.Link className="p-5" href="#features">Features</Nav.Link>
              <Nav.Link className="p-5" href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar>
  );
};

export default Header;
