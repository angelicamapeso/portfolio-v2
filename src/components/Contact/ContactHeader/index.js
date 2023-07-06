import React from "react";
import Col from "react-bootstrap/Col";

import "./style.scss";

export default function ContactHeader({ isPreview }) {
  return (
    <Col xs={12} md={4} id="contact-header" className="bg-maroon">
      <h1>
        <i className="fas fa-rocket mb-4"></i>Let's build something great
        together
      </h1>
    </Col>
  );
}
