import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutHeader from "../AboutHeader";
import "./style.scss";

export default function AboutSection({ isPreview }) {
  return (
    <div id="about-section">
      <AboutHeader isPreview />
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
}
