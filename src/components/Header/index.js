import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo_white.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ReactComponent as Logo } from "../../img/logo_white.svg";

import "./style.scss";

function Header() {
  return (
    <header>
      <nav id="main-nav" className="bg-dark-maroon">
        <Navbar.Brand>
          <Link to="/">
            <Logo id="nav-logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="align-items-end">
          <Nav.Item>
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </nav>
    </header>
  );
}

export default Header;
