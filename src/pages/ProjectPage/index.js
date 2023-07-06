import React from "react";
import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import NotFound from "../NotFound";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectBody from "../../components/Project/ProjectBody";
import ContactSection from "../../components/Contact/ContactSection";
import { getProjectByInfoPage } from "../../projects";
import "./style.scss";

function ProjectPage() {
  const { name } = useParams();
  const currentProject = getProjectByInfoPage(name);

  if (!currentProject) {
    return <NotFound />;
  } else {
    return (
      <Page title={currentProject.title} description={currentProject.tagline}>
        <div id="project-page">
          <ProjectHeader project={currentProject} />
          <ProjectBody project={currentProject} />
        </div>
        <ContactSection isPreview />
      </Page>
    );
  }
}

export default ProjectPage;
