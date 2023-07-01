import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AboutHeader from "../AboutHeader";
import AboutBody from "../AboutBody";
import "./style.scss";

export default function AboutSection({ isPreview }) {
  return (
    <Container fluid id="about-section">
      <Row>
        <AboutHeader isPreview />
        <AboutBody isPreview />
      </Row>
    </Container>
  );
}
