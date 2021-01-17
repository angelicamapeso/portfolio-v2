import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./style.css";

function ProjectCard(props) {
  return (
    <Col xs={12} sm={6} lg={4}>
      <Card>
        <a
          href={process.env.PUBLIC_URL + "/portfolio" + props.project.infoPage}
          aria-label={props.project.title + " website"}
        >
          <Card.Img
            variant="top"
            src={props.project.img.icon}
            className="mb-3"
            alt={props.project.title}
          />
        </a>
        <Card.Body className="left-border-line">
          <Card.Title className="mb-0">{props.project.title}</Card.Title>
          <Card.Text>{props.project.tagline}</Card.Text>
          <div className="mt-auto d-flex flex-column justify-content-end">
            <p className="mb-0">
              <a href={props.project.url} className="h5 icon-link">
                <i className="fas fa-link mr-2" aria-hidden="true"></i>Visit
                site
              </a>
            </p>
            <p className="mb-0">
              <a href={props.project.repo} className="h5 icon-link">
                <i className="fab fa-github mr-2" aria-hidden="true"></i>View
                source code
              </a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
