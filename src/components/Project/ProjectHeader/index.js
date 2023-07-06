import React from "react";
import Col from "react-bootstrap/Col";
import "./style.scss";

function ProjectHeader({ project }) {
  return (
    <Col
      xs={12}
      lg={4}
      id="project-header"
      className="project-sub-section bg-pink"
    >
      <div id="image-preview">
        <img src={project.img} alt={project.title} />
      </div>
      <div id="title-line" xs={12} sm={6} md={12}>
        <h1>
          <span id="id">{project.id}</span>
          <span className="circle-separator" aria-hidden="true"></span>
          <span id="title-text">{project.title}</span>
        </h1>
        <p>{project.tagline}</p>
        <div id="project-tag-list">
          {project.tags.map((tag, index) => (
            <p key={index} className="project-tag">{`#${tag}`}</p>
          ))}
        </div>
        <div id="project-links">
          {project.repo ? (
            <a className="custom-btn btn-light" href={project.repo}>
              <i className="fab fa-github mr-2" aria-hidden="true"></i>Source
              Code
            </a>
          ) : null}
          {project.url ? (
            <a className="custom-btn btn-dark" href={project.url}>
              <i className="fab fa-github mr-2" aria-hidden="true"></i>Visit
              Site
            </a>
          ) : null}
        </div>
      </div>
    </Col>
  );
}

export default ProjectHeader;
