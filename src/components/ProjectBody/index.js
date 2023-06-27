import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkList from "../LinkList";
import "./style.scss";

function ProjectBody({ project }) {
  return (
    <Container id="project-body" fluid >
      <Row>
        <Col>
          {project.description}
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectBody;
