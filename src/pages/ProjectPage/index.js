import React from "react";
import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import * as projects from "../../projects";
import ProjectHeader from "../../components/ProjectHeader";
import ProjectBody from "../../components/ProjectBody";

function ProjectPage() {
  const { name } = useParams();
  const projArray = Object.values(projects);
  const currentProject = projArray.find(
    project => project.infoPage.slice(1) === name
  );

  return (
    <Page title={currentProject.title} description={currentProject.tagline}>
      <ProjectHeader project={currentProject} />
      <ProjectBody project={currentProject} />
    </Page>
  );
}

export default ProjectPage;
