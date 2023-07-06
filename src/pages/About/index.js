import React from "react";

import Page from "../../components/Page";
import AboutSection from "../../components/About/AboutSection";
import ContactSection from "../../components/Contact/ContactSection";

function About() {
  return (
    <Page title="About" description="Get to know me a little bit better">
      <AboutSection />
      <ContactSection isPreview />
    </Page>
  );
}

export default About;
