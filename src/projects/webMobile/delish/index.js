import React from "react";

import displayImg from "./delish_display.png";
import {
  delishLogo,
  contactMockup,
  productsMockup,
  roughSketches,
  desktopWireframe,
  mobileWireframe,
} from "./images";

import { WEB_MOBILE_SECTION } from "../../tags";

const { FRONT_END_TAG, PURE_HTML_CSS_JS_TAG } = WEB_MOBILE_SECTION.tags;

export const delish = {
  title: "Delish",
  infoPage: "/delish",
  url: "https://angelicamapeso.github.io/portfolio-v1/delish_website/index.html",
  repo: "https://github.com/angelicamapeso/portfolio-v1/tree/master/delish_website",
  tagline: "A website for a fictional bakery",
  img: displayImg,
  tags: [FRONT_END_TAG, PURE_HTML_CSS_JS_TAG],
  description: (
    <>
      <p>
        As part of a first-year Web Development class (Interactive Multimedia
        and Design Program at Carleton University), this website was created for
        a fictional bakery called "Delish". To create this website, I had to
        consider a user group, draw rough sketches and bring the idea to life
        through wireframes and mockups.
      </p>
      <p>
        The site mockup has 4 pages (home, contact, about, products) as well as
        an original logo.
      </p>
    </>
  ),
  additionalSections: [
    {
      title: "The Look and Feel",
      description: (
        <>
          <p>
            Delish is meant to be a fun, warm and energetic brand. Their
            personality is reflected in the red colour scheme and unconventional
            tiling.
          </p>
        </>
      ),
      images: [delishLogo, contactMockup, productsMockup],
    },
    {
      title: "The Process",
      description: (
        <>
          <p>
            The Delish website was designed for the young adult to the elderly
            (based on an assumption of who'd probably be buying baked goods from
            a website).
          </p>
          <p>
            To keep the site attractive to young adults, I thought it would be
            helpful to connect the bakery's Instagram feed on the homepage and
            give the site a very trendy layout.
          </p>
          <p>
            Since the older generation would probably focus on buying goods
            in-store, I placed the store information on the header of the
            homepage for easy access.
          </p>
          <p>
            Take a look at the rough sketches and wireframes for a better idea
            of where this website started. (Some things definitely moved
            around!)
          </p>
        </>
      ),
      images: [roughSketches, desktopWireframe, mobileWireframe],
    },
  ],
};
