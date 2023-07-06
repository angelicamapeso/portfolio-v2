import React from "react";
import Page from "../../components/Page";
import ProjectSection from "../../components/Project/ProjectSection";
import ContactSection from "../../components/Contact/ContactSection";

function Portfolio() {
  return (
    <Page
      title="Portfolio"
      description="Take a look through my most recent projects"
    >
      <ProjectSection />
      <ContactSection isPreview />
    </Page>
  );
}

export default Portfolio;
