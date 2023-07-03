import React from "react";
import Col from "react-bootstrap/Col";
import { longVersion, resumeContent } from "./content.js";

import "./style.scss";
import AboutShortVersion from "../AboutShortVersion/index.js";

export default function AboutBody({ isPreview }) {
  return (
    <Col
      id="about-body"
      className={"about-section-col " + (isPreview ? "bg-mint" : "")}
    >
      <AboutShortVersion resumeContent={resumeContent} isPreview={isPreview} />
    </Col>
  );
}
