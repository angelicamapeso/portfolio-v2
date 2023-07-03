import React from "react";
import { useParams } from "react-router-dom";
import Page from "../../components/Page";
import * as projects from "../../projects";
import NotFound from "../NotFound";
import ProjectHeader from "../../components/Project/ProjectHeader";
import ProjectBody from "../../components/Project/ProjectBody";
import { getProjectByInfoPage } from "../../projects";
import "./style.scss";

function ProjectPage() {
  const { name } = useParams();
  const projArray = Object.values(projects);
  const currentProject = getProjectByInfoPage(name);

  console.log(projArray);

  if (!currentProject) {
    return <NotFound />;
  } else {
    return (
      <Page title={currentProject.title} description={currentProject.tagline}>
        <div id="project-page">
          <ProjectHeader project={currentProject} />
          <ProjectBody project={currentProject} />
        </div>
      </Page>
    );
  }
}

export default ProjectPage;
