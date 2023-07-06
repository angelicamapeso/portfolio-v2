import React from "react";
import Page from "../../components/Page";
import HeroBanner from "../../components/HeroBanner";
import "./style.scss";

import ProjectSection from "../../components/Project/ProjectSection";
import AboutSection from "../../components/About/AboutSection";
import ContactSection from "../../components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <Page
        title="Home"
        description="Hi, I'm Angelica Mapeso, a front-end web developer on the way to going full-stack!"
        className="d-flex flex-column"
      >
        <HeroBanner />
        <ProjectSection isPreview />
        <AboutSection isPreview />
        <ContactSection isPreview />
      </Page>
    </>
  );
}
