import React from "react";
import { useParams } from "react-router-dom";
import * as projects from "../../projects";
import ProjectHeader from "../../components/ProjectHeader";

function ProjectPage() {
  const { name } = useParams();
  const projArray = Object.values(projects);
  const currentProject = projArray.find(
    project => project.infoPage.slice(1) === name
  );

  return (
    <>
      <ProjectHeader project={currentProject} />
    </>
  );
}

export default ProjectPage;
