import React from "react";
import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import NotFound from "../NotFound";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectBody from "../../components/Project/ProjectBody";
import ContactSection from "../../components/Contact/ContactSection";

import "./style.scss";
import { getProjectByInfoPage } from "../../projects";

function ProjectPage() {
  const { name } = useParams();
  const currentProject = getProjectByInfoPage(name);

  if (!currentProject) {
    return <NotFound />;
  } else {
    return (
      <Page title={currentProject.title} description={currentProject.tagline}>
        <Container fluid id="project-page">
          <Row>
            <ProjectHeader project={currentProject} />
            <ProjectBody project={currentProject} />
          </Row>
        </Container>
        <ContactSection isPreview />
      </Page>
    );
  }
}

export default ProjectPage;
