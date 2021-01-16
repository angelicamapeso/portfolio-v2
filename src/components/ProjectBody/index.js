import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkList from "../LinkList";

function ProjectBody(props) {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h2 className="mb-4 font-weight-light left-border-title">
              About the project
            </h2>
            <div className="left-border-line">
              <Row className="mb-5">
                <Col>{props.project.description}</Col>
              </Row>
              <Row>
                {props.project.lists.map(list => (
                  <Col
                    xs={12}
                    md={props.project.lists.length % 2 === 0 ? 6 : 4}
                    className="mb-3"
                  >
                    <h3 className="font-weight-light">
                      <i className={list.icon + " mr-3"} aria-hidden="true"></i>
                      {list.title}
                    </h3>
                    <LinkList items={list.items} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProjectBody;
