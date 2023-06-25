import React from "react";
import displayImg from "./ikeaClone_display.png";
import { WEB_MOBILE_SECTION } from "../../tags";

import { REACT_TECH, SASS_TECH } from "../frontEnd_tech";

const { FRONT_END_TAG, REACT_TAG } = WEB_MOBILE_SECTION.tags;

export const ikeaClone = {
  title: "Ikea - Clone Website",
  infoPage: "/ikea-clone",
  url: "https://angelicamapeso.github.io/itec4012-assignment2/",
  repo: "https://github.com/angelicamapeso/itec4012-assignment2",
  tagline: "A clone of the Ikea website, built from scratch!",
  img: displayImg,
  tags: [FRONT_END_TAG, REACT_TAG],
  description: (
    <>
      <p>
        This website was created for an assignment as part of the Web
        Application Frameworks course (Interactive Multimedia and Design Program
        at Carleton University). The course focused on learning React, but
        touched on using Express for creating simple API's.
      </p>
      <p>
        As per the assignment's requirements, the website has two pages (the
        Home page and the Cart page) that are accessible through the main
        navigation. It also contains a variety of components that are documented
        within the README.md of the repo.
      </p>
      <p>
        Otherwise, this website was a challenge in terms of styling and ensuring
        that components matched in functionality to the original website.
      </p>
    </>
  ),
  technology: [
    {
      icon: "fas fa-desktop",
      title: "Front-End",
      items: [REACT_TECH, SASS_TECH],
    },
  ],
};
