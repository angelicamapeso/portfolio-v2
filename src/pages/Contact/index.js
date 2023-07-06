import React from "react";
import Page from "../../components/Page";

import ContactSection from "../../components/Contact/ContactSection";

function Contact() {
  return (
    <Page
      title="Contact"
      description="Ready to reach out? Let's grab a coffee!"
    >
      <ContactSection />
    </Page>
  );
}

export default Contact;
