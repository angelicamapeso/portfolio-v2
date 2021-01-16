import React from "react";
import Page from "../../components/Page";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../../components/ProjectCard";
import * as projects from "../../projects";

function Portfolio() {
  const projArray = Object.values(projects);

  return (
    <Page
      title="Portfolio"
      description="Take a look through my most recent projects"
    >
      <Container className="pb-4">
        <Row>
          <Col>
            <h1 class="mb-4 display-4 left-border-title">Portfolio</h1>

            <Row>
              {projArray.map(project => (
                <ProjectCard project={project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export default Portfolio;
