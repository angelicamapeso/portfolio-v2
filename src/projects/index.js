import webMobileProjects from "./webMobile";
import graphicDesignIllustrationProjects from "./graphicDesign_illustration";
import multimediaProjects from "./multimedia";

const projects = [...webMobileProjects, ...graphicDesignIllustrationProjects, ...multimediaProjects];
const taggedProjects = projects.map((projectData, index) => {
  const targetIndex = index + 1;
  projectData.id = targetIndex >= 10 ? `${targetIndex}` : `0${targetIndex}`;
  return projectData;
});

export function getProjectsByCategory(category) {
  const selectedProjects = []
  for (const project of taggedProjects) {
    if (category === project.category) {
      selectedProjects.push(project);
    }
  }
  return selectedProjects;
}

export function getProjectByInfoPage(infoPage) {
  const selectedProject = taggedProjects.find(project => project.infoPage.slice(1) === infoPage);
  return selectedProject;
}

export default taggedProjects;