import React from "react";
import displayImg from "./mindless_display.png";

import { MULTIMEDIA_SECTION } from "../../tags";
import { EXPRESS_TECH } from "../../webMobile/backEnd_tech";

const { VR_WEB_TAG } = MULTIMEDIA_SECTION.tags;

export const mindless = {
  title: "Mindless",
  infoPage: "/mindless",
  youtubeEmbedID: "3Dn182cSkRc",
  repo: "https://github.com/angelicamapeso/mindless",
  tagline: "A short, interactive VR experience",
  img: displayImg,
  tags: [VR_WEB_TAG],
  description: (
    <>
      <p>
        Mindless is a reflection on how multimedia can transport you to unreal
        and imaginative worlds. On one hand, it's exciting and impactful, but on
        the other, real life becomes dull in comparison. This is only a personal
        observation and is inspired by the few times I became absentminded while
        watching YouTube videos and multi-tasking.
      </p>
      <p>
        The experience runs in-browser and the 3D and VR components are handled
        with A-Frame (a web framework). The in-browser code is served by a small
        express server.
      </p>
      <p>
        This project was created for a course in the Interactive Multimedia and
        Design program at Carleton. Unfortunately, I can't remember which one it
        was!
      </p>
    </>
  ),
  technology: [
    {
      icon: "fas fa-desktop",
      title: "Front-End",
      items: [
        {
          name: "A-Frame",
          link: "https://aframe.io/",
        },
        {
          name: "aframe-environment-component",
          link: "https://github.com/supermedium/aframe-environment-component",
        },
        {
          name: "AFrame GIF Shader",
          link: "https://github.com/mayognaise/aframe-gif-shader",
        },
      ],
    },
    {
      icon: "fas fa-server",
      title: "Back-End",
      items: [EXPRESS_TECH],
    },
  ],
};
