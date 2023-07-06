import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ContactHeader from "../ContactHeader";
import ContactBody from "../ContactBody";

import "./style.scss";

export default function ContactSection({ isPreview }) {
  return (
    <Container fluid id="contact-section">
      <Row>
        <ContactHeader isPreview={isPreview} />
        <ContactBody isPreview={isPreview} />
      </Row>
    </Container>
  );
}
