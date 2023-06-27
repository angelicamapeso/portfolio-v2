import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { ReactComponent as Arrow } from "../../img/arrow_down_white.svg";
import "./style.scss";

function ProjectCard({ project }) {
  return (
    <Col xs={12} sm={6} lg={4}>
      <Card>
        <Card.Title className="project-title-line left-border-line">
          <span className="project-id">{project.id}</span>
          <span className="circle-separator" aria-hidden="true"></span>
          <span className="project-title">{project.title}</span>
        </Card.Title>
        <Card.Img
          variant="top"
          src={project.img}
          alt={project.title}
        />
        <Card.Body>
          <Card.Text>{project.tagline}</Card.Text>
          <div className="project-tag-list">
            {project.tags?.map((tag, index) =>
              <p
                className="project-tag"
                key={index}
              >
                {`#${tag}`}
              </p>
            )}
          </div>
          <div className="project-navigation">
            {project.repo ?
              <a className="project-repo" href={project.repo}>
                <i className="fab fa-github mr-2" aria-hidden="true"></i>Source Code
              </a> : null
            }
            <Link
              className="project-about"
              to={"/portfolio" + project.infoPage}
              aria-label={`Learn more about ${project.title}`}
            >
              Learn more <Arrow className="more-arrow" />
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
