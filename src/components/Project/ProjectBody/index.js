import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import YoutubeEmbed from "../../Util/YoutubeEmbed";
import "./style.scss";
import ImageToExpand from "../../Util/ImageToExpand";
import List from "../../Util/List";

function ProjectBody({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Col
      id="project-body"
      className={
        project.youtubeEmbedID || project.images ? "has-hero-content" : ""
      }
    >
      {project.youtubeEmbedID || project.images ? (
        <div id="hero-content" className="project-sub-section">
          {project.youtubeEmbedID ? (
            <div id="youtube" className="hero-content-section">
              <YoutubeEmbed
                embedID={project.youtubeEmbedID}
                title={project.title}
              />
            </div>
          ) : null}
          {project.images ? (
            <div id="images" className="image-container hero-content-section">
              {project.images.map((image, index) => (
                <ImageToExpand
                  key={index}
                  src={image.img}
                  alt={image.description}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
      <div id="description" className="project-sub-section">
        {project.description}
      </div>
      {project.additionalSections
        ? project.additionalSections.map((section, index) => (
            <div key={index} className="project-sub-section">
              <h2 className="additional-section-title">{section.title}</h2>
              {section.description}
              {section.images ? (
                <div className="image-container">
                  {section.images.map((image, index) => (
                    <ImageToExpand
                      key={index}
                      src={image.img}
                      alt={image.description}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ))
        : null}
      {project.team ? (
        <div id="team" className="project-sub-section">
          <h2>
            <i className="fas fa-users" aria-hidden="true"></i>Team Members
          </h2>
          <div className="team-list dark-maroon-bubble">
            <List list={project.team} />
          </div>
        </div>
      ) : null}
      {project.technology ? (
        <div id="technology" className="project-sub-section">
          <h2>
            <i className="fas fa-fire" aria-hidden="true"></i>Technology
          </h2>
          <div className="technology-list dark-maroon-bubble">
            {project.technology.map((technology, index) => (
              <List key={index} list={technology} />
            ))}
          </div>
        </div>
      ) : null}
    </Col>
  );
}

export default ProjectBody;
