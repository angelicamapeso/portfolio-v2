import React from "react";

import { REACT_NATIVE_TECH } from "../../../projects/webMobile/mobile_tech";
import {
  ANGULAR_JS_TECH,
  REACT_TECH,
  VUE_TECH,
  JQUERY_TECH,
} from "../../../projects/webMobile/frontEnd_tech";
import {
  NODE_TECH,
  EXPRESS_TECH,
  MYSQL_TECH,
} from "../../../projects/webMobile/backEnd_tech";
import {
  ILLUSTRATOR_TECH,
  PHOTOSHOP_TECH,
  FIGMA_TECH,
} from "../../../projects/graphicDesign_illustration/graphicIllustration_tech";

export const resumeContent = {
  professionalExperience: "2+ Years",
  recentWork: [
    {
      title: "Full-Stack Engineer",
      company: "Speer",
      months: "September 2023 - Present",
      description: (
        <p className="recent-work-description">
          Developed front-end components in React, Angular, Vue, React Native
          and Three.js in TypeScript and Javascript ES6 from Figma mockups for a
          variety of web/mobile applications to improve user experience and
          implement bug fixes
        </p>
      ),
    },
    {
      title: "Junior Front End Developer",
      company: "Salesfloor",
      months: "May 2022 - June 2023",
      description: (
        <p className="recent-work-description">
          Improved user experience by modifying front-end components in
          AngularJS and React for a mobile app and legacy web platform to
          provide visual feedback for internet latency and network drops
        </p>
      ),
    },
    {
      title: "Junior Software Developer",
      company: "Creative Layer",
      months: "May 2021 - October 2021",
      description: (
        <p className="recent-work-description">
          Programmed software in JavaScript by using raw image data and
          modifying SVGs within a proprietary node-based system to generate
          personalized, digital artwork from user input in under 1 second
        </p>
      ),
    },
  ],
  education: [
    {
      degree:
        "Bachelor of Information Technology, Interactive Multimedia and Design",
      degreeSpecifics: "Co-op Option, High Distinction",
      school: "Carleton University",
      months: "September 2017 - April 2022",
      description: (
        <p className="education-description">
          A five year program on the design and development of all things
          multimedia.The program balances design skills(UI/ UX Design, Game
          Design, Animation) with technical skills(C++, JavaScript, Software
          Design) and includes several collaborative projects.
        </p>
      ),
    },
    {
      degree: "Carleton Coding Bootcamp",
      degreeSpecifics: "Full-Stack Web Development",
      school: "Carleton University",
      months: "August 2020 - February 2021",
      description: (
        <p className="education-description">
          An intensive six month program which teaches full-stack web
          development from the ground up. Focuses on the MERN stack after
          developing foundational skills.
        </p>
      ),
    },
  ],
  technicalSkills: [
    {
      title: "Front-End",
      items: [
        ANGULAR_JS_TECH,
        REACT_TECH,
        REACT_NATIVE_TECH,
        VUE_TECH,
        JQUERY_TECH,
      ],
    },
    {
      title: "Back-End",
      items: [NODE_TECH, EXPRESS_TECH, MYSQL_TECH],
    },
    {
      title: "Design",
      items: [ILLUSTRATOR_TECH, PHOTOSHOP_TECH, FIGMA_TECH],
    },
  ],
};

export const longVersion = (
  <>
    <p className="left-border-line">
      Prior to discovering my love of programming, I set down my roots in the
      world of visual art and eventually expanded into graphic design.
    </p>
    <p>
      Seeking to keep designing as part of my career, I originally set out to be
      an architect when I started university; however, I fell in love with
      programming when I wrote a small python program for an elective during my
      first year of undergrad.
    </p>
    <p className="dark-maroon-bubble">
      The program went something like this:
      <br />
      You're a Pokemon trainer who had to choose where to step in the wild
      grass. Depending on what you picked, a single Pokemon would be drawn out
      on the screen.
    </p>
    <p>
      I dove into the{" "}
      <a href="https://admissions.carleton.ca/programs/interactive-multimedia-and-design-imd/">
        Interactive Multimedia and Design program
      </a>{" "}
      at Carleton University with a newfound goal of finding a career that would
      combine programming and visual design. When I came across web development,
      I couldn't get enough of it, so I enrolled in the{" "}
      <a href="https://bootcamp.carleton.ca/coding/">
        Carleton Coding Bootcamp
      </a>{" "}
      during my undergrad to get a more in-depth learning experience.
    </p>
    <p>
      I'm confident to say that my background in design has made me a
      well-rounded developer. Having experience in not only UI design, but also
      UX design, I'm very conscious about the user experience and seek solutions
      that would be easy for other developers to build onto.
    </p>
    <p className="tagline">
      I want to build apps and websites that are clean in code and exciting in
      experience. Let's build something great together!
    </p>
  </>
);

const { professionalExperience, recentWork, technicalSkills } = resumeContent;

export const preview = {
  professionalExperience,
  recentWork,
  technicalSkills,
};
