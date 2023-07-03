import React from "react";
import Page from "../../components/Page";
import ProjectSection from "../../components/Project/ProjectSection";

function Portfolio() {
  return (
    <Page
      title="Portfolio"
      description="Take a look through my most recent projects"
    >
      <ProjectSection />
    </Page>
  );
}

export default Portfolio;
