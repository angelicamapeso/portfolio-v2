import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.scss";

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <Container fluid>
        <Row>
          <Col>
            <a
              href="https://github.com/angelicamapeso"
              className="mr-4 image-link"
              aria-label="Github"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/angelica-mapeso"
              className="image-link"
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
