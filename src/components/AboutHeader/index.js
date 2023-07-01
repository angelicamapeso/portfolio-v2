import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Headshot from "../../img/headshot_25x.jpg";

import "./style.scss";

export default function AboutHeader({ isPreview }) {
  return (
    <Col xs={12} sm={4} id="about-section-header" className="about-section-col bg-mint">
      <div className="about-section-title-img">
        <h1 id="about-section-title-line" className="mb-4">
          <i class="far fa-hand-paper mb-4" aria-hidden="true"></i>
          Meet the developer
        </h1>
        <div className="headshot-frame mb-4">
          <img src={Headshot} alt="The developer!" />
        </div>
      </div>
      <p>
        Front-end developer devoted to expanding her back-end knowledge, writing
        clean code and empowering end users.
      </p>
    </Col>
  );
}
