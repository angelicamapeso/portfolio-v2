import React from "react";
import displayImg from "./nominateIt_display.png";
import { WEB_MOBILE_SECTION } from "../../tags";

import {
  REACT_TECH,
  BOOTSTRAP_TECH,
  FONT_AWESOME_TECH,
} from "../frontEnd_tech";

import { EXPRESS_TECH, MONGOOSE_TECH, AXIOS_TECH } from "../backEnd_tech";

const { FULL_STACK_TAG, REACT_TAG } = WEB_MOBILE_SECTION.tags;

export const nominateIt = {
  title: "Nominate It",
  infoPage: "/nominate-it",
  url: "",
  repo: "https://github.com/angelicamapeso/nominate-it",
  tagline: "Submit your top 5 movie nominations",
  img: displayImg,
  tags: [FULL_STACK_TAG, REACT_TAG],
  description: (
    <>
      <p>Nominate is a website for sending in your top 5 movies.</p>
      <p>
        Add movies to your nomination list by selecting a result from the
        search. Your submission will appear on the 'Nominations' page. Browse
        through the lists to see what other people nominated as their top 5's.
      </p>
      <p>All movie data is retrieved with the OMDb API.</p>
    </>
  ),
  technology: [
    {
      icon: "fas fa-desktop",
      title: "Front-End",
      items: [REACT_TECH, BOOTSTRAP_TECH, FONT_AWESOME_TECH],
    },
    {
      icon: "fas fa-server",
      title: "Back-End",
      items: [EXPRESS_TECH, MONGOOSE_TECH, AXIOS_TECH],
    },
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "OMDb API",
          link: "https://www.omdbapi.com/",
        },
      ],
    },
  ],
};
