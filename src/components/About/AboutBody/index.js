import React from "react";
import Col from "react-bootstrap/Col";
import { preview, longVersion, resumeContent } from "./content.js";
import List from "../../Util/List";

import "./style.scss";

export default function AboutBody({ isPreview }) {
  const {
    title: recentTitle,
    company: recentCompany,
    months: recentWorkPeriod,
    description: recentWorkDescription,
  } = preview.recentWork[0];

  const previewView = (
    <div id="preview-view">
      <div className="experience-recent-work">
        <div className="experience">
          <h2>Experience</h2>
          <p>{preview.professionalExperience}</p>
        </div>
        <div className="recent-work">
          <h2>Recent Work</h2>
          <div className="dark-green-bubble">
            <h3>
              <span className="title">{recentTitle}</span> at {recentCompany}
            </h3>
            <p>{recentWorkPeriod}</p>
            {recentWorkDescription}
          </div>
        </div>
      </div>
      <div className="technical-skills">
        <h2>Technical Skills</h2>
        <div className="dark-green-bubble">
          {preview.technicalSkills.map((technicalSkill, index) => (
            <List key={index} list={technicalSkill} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Col
      id="about-body"
      className={"about-section-col " + (isPreview ? "bg-mint" : "")}
    >
      {isPreview ? previewView : null}
    </Col>
  );
}
