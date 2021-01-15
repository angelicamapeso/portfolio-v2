import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectBody(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 class="mb-4 font-weight-light left-border-title">
              About the project
            </h2>
            <div class="left-border-line">
              <Row>
                <Col>{props.project.description}</Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectBody;
