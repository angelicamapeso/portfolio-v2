import React from "react";
import Page from "../../components/Page";
import HeroBanner from "../../components/HeroBanner";
import "./style.scss";

import ProjectSection from "../../components/ProjectSection";

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
      </Page>
    </>
  );
}
