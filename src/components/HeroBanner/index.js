import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.scss";

import { ReactComponent as Logo } from "../../img/logo_white.svg";
import { ReactComponent as ArrowDown } from "../../img/arrow_down_white.svg";

export default function HeroBanner() {
  return (
    <Container fluid id="hero-banner">
      <Row>
        <Col id="logo-col" className="bg-maroon hero-col" xs={12} sm={4}>
          <Logo id="hero-logo" />
        </Col>
        <Col id="introduction" className="hero-col">
          <h1>
            Angelica <span id="last-name">Mapeso</span>
          </h1>
          <p id="current">
            <span id="role">Full-Stack Developer</span>
            <br />
            with a <span id="background">focus on Front-End</span>
          </p>
          <p id="full-stack-tag">
            Passionate about excellent UX and beautiful UI
          </p>
          <ArrowDown className="arrow" />
        </Col>
      </Row>
    </Container>
  );
}
