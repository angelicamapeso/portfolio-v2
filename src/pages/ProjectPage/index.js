import React from "react";
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";
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
    <>
      <Helmet>
        <title>Angelica Mapeso | {currentProject.title}</title>
        <meta name="description" content={currentProject.tagline} />
      </Helmet>
      <ProjectHeader project={currentProject} />
      <ProjectBody project={currentProject} />
    </>
  );
}

export default ProjectPage;
