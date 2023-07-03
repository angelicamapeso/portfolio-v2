import React from "react";
import Col from "react-bootstrap/Col";

import Headshot from "../../../img/headshot_25x.jpg";

import "./style.scss";

export default function AboutHeader({ isPreview }) {
  return (
    <Col
      xs={12}
      sm={4}
      id="about-section-header"
      className="about-section-col bg-mint"
    >
      <div
        className={`about-section-title-img ${
          isPreview ? "" : "about-page-header"
        }`}
      >
        <h1 id="about-section-title-line" className="mb-4">
          <i className="far fa-hand-paper mb-4" aria-hidden="true"></i>
          {isPreview ? "Meet the developer" : "About"}
        </h1>
        {isPreview ? null : <p>Let me tell you about my journey so far</p>}
        <div className="headshot-frame mb-4">
          <img src={Headshot} alt="The developer!" />
        </div>
      </div>
      {isPreview ? (
        <p>
          Front-end developer devoted to expanding her back-end knowledge,
          writing clean code and empowering end users.
        </p>
      ) : null}
    </Col>
  );
}
