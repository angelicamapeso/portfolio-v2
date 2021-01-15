import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectHeader(props) {
  return (
    <div className="display-row mb-5">
      <Container className="pt-3 pb-5">
        <Row className="justify-content-between">
          <Col xs={12} md={5} className="p-0 order-md-1">
            <img
              src={props.project.img.display}
              className="display-image"
              alt={props.project.title}
            />
          </Col>
          <Col xs={12} md className="d-flex flex-column justify-content-end">
            <h1 className="display-4 left-border-title">
              {props.project.title}
            </h1>
            <div className="left-border-line">
              <p className="lead font-weight-normal">{props.project.tagline}</p>
              <a
                className="btn btn-dark"
                href={props.project.url}
                role="button"
              >
                <i className="fas fa-link mr-2" aria-hidden="true"></i>Visit
                site
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectHeader;
