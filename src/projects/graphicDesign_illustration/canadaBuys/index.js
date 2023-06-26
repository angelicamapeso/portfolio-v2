import React from "react";

import displayImg from "./canadaBuys_display.png";
import { processWhiteboard } from "./images";

import { GRAPHIC_DESIGN_ILLUSTRATION_SECTION } from "../../tags";
import { ILLUSTRATOR_TECH } from "../graphicIllustration_tech";

const { WEB_DESIGN_TAG } = GRAPHIC_DESIGN_ILLUSTRATION_SECTION.tags;

export const canadaBuys = {
  title: "CanadaBuys",
  infoPage: "/canada-buys",
  url: "https://canadabuys.canada.ca/en",
  tagline: "The Visual Design for the CanadaBuys website",
  img: displayImg,
  tags: [WEB_DESIGN_TAG],
  description: (
    <>
      <p>
        The aim of the visual design was to push Government web pages in a new
        and innovative direction, while also being reflective of CanadaBuys'
        core values and goals:
        <ul>
          <li>Economic growth</li>
          <li>Modernization</li>
          <li>Simplicity</li>
          <li>Green Procurement</li>
        </ul>
      </p>
      <p>
        The idea of money best represented economic growth and from this, the
        CanadaBuys ambassadors were born. Each ambassador was taken from the
        imagery on the Canadian coins, while the colour scheme references
        Canadian bills.
      </p>
      <p>
        The overall geometric style encompassed the two values of modernization
        and simplicity, and the design was brought together by placing the
        ambassadors in natural environments - an ode to green procurement.
      </p>
      <p>
        The full description of the visual design can be found on{" "}
        <a href="https://canadabuys.canada.ca/en/canadabuys-visual-motif">
          CanadaBuys
        </a>
        .
      </p>
      <p>
        When the design is applied to the site, it also serves a functional
        purpose. Each section of the site has been themed with an ambassador and
        a colour, enhancing the user's ability to understand where they are on
        any given page. Since all of the visual design imagery on CanadaBuys is
        mainly decorative in that regard, the images do not require alt text,
        which simplifies the experience for those who use screen readers to
        navigate the site. Additionally, this imagery is made up of SVG images,
        which optimizes load times.
      </p>
    </>
  ),
  additionalSections: [
    {
      title: "The Process",
      description: (
        <>
          <p>
            The visual design began with brainstorming sessions within the User
            Experience and Service Design (UXSD) team at Public Services and
            Procurement Canada (PSPC). Guided by my supervisor, I led these
            discussions and we all contributed ideas on all things Canadian.
            These discussions led to a whiteboard full of keywords and some
            inspirational imagery, which served as a foundation for our first
            concept.
          </p>
          <p>
            However, after attempting a design with our first concept, we felt
            it was not strong enough to embody the values and look we were
            trying to create. So, we went back to our whiteboard and took the
            design in a completely different direction, which led us to the
            ambassadors seen today.
          </p>
        </>
      ),
      images: [processWhiteboard],
    },
  ],
  technology: [
    {
      icon: "",
      title: "Software",
      items: [ILLUSTRATOR_TECH],
    },
  ],
};
