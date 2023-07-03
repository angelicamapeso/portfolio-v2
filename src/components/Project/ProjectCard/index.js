import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ArrowLink from "../../Util/ArrowLink";
import "./style.scss";

function ProjectCard({ project, isPreview }) {
  return (
    <Col xs={12} sm={6} lg={4}>
      <Card className="mb-2">
        <Link
          className="image-link"
          to={"/portfolio" + project.infoPage}
          aria-label={`Learn more about ${project.title}`}
        >
          <Card.Title className="project-title-line left-border-line">
            <span className="project-id">{project.id}</span>
            <span className="circle-separator" aria-hidden="true"></span>
            <span className="project-title">{project.title}</span>
          </Card.Title>
          <Card.Img variant="top" src={project.img} alt={project.title} />
          <Card.Body>
            <Card.Text>{project.tagline}</Card.Text>
            <div className="project-tag-list">
              {project.tags?.map((tag, index) => (
                <p className="project-tag" key={index}>
                  {`#${tag}`}
                </p>
              ))}
            </div>
            <div className="project-card-footer">
              {project.repo ? (
                <p className="mr-2 on-github dark-maroon-bubble">
                  <i className="fab fa-github mr-2" aria-hidden="true"></i>
                  On GitHub
                </p>
              ) : null}
              <ArrowLink text="Learn more" />
            </div>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
}

export default ProjectCard;
