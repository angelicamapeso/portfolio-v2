import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.scss";

function ProjectHeader({ project }) {
  return (
    <Container id="project-header" className="bg-pink" fluid>
      <Row>
        <Col id="image-preview">
          <img
            src={project.img}
            alt={project.title}
          />
        </Col>
        <Col id="title-line" xs={12} sm={6} md={12}>
          <h1>
            <span id="id">{project.id}</span>
            <span className="circle-separator" aria-hidden="true"></span>
            <span id="title-text">{project.title}</span>
          </h1>
          <p>{project.tagline}</p>
          <div id="project-tag-list">
            {project.tags.map((tag) => <p className="project-tag">{`#${tag}`}</p>)}
          </div>
          <div id="project-links">
            {project.repo ?
              <a className="dark-green-link" href={project.repo}>
                <i className="fab fa-github mr-2" aria-hidden="true"></i>Source Code
              </a> : null
            }
            {
              project.url ?
                <a className="dark-maroon-link" href={project.url}>
                  <i className="fab fa-github mr-2" aria-hidden="true"></i>Visit Site
                </a> : null
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectHeader;
