import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col>
            <Link to="/contact" className="mr-3 mb-0 h5">
              Contact
            </Link>
          </Col>
          <Col xs="auto">
            <a
              href="https://github.com/angelicamapeso"
              className="mr-3 h4"
              aria-label="Github"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/angelica-mapeso"
              className="mr-3 h4"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
