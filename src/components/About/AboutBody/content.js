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

import Resume from "./mapesoAngelica_resume2023.pdf";

export const resumeContent = {
  resume: Resume,
  professionalExperience: "1+ Years",
  recentWork: [
    {
      title: "Junior Front End Developer",
      company: "Salesfloor",
      months: "May 2022 - June 2023",
      description: (
        <p className="recent-work-description">
          Maintained and developed new features for Salesfloor's mobile app and
          web platform with AngularJS and React
        </p>
      ),
    },
    {
      title: "Junior Software Developer",
      company: "Creative Layer",
      months: "May 2021 - October 2021",
      description: (
        <p className="recent-work-description">
          Using a node-based system, programmed software that would generate
          personalized, digital artwork from user input
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
    <p>
      Prior to discovering my love of programming, I set down my roots in the
      world of visual art and eventually expanded into graphic design.
    </p>
    <p>
      Originally, I wanted to be an Architect but fell in love with programming
      when I wrote a small python program for an elective during my first year
      of undergrad.
    </p>
    <p className="dark-maroon-bubble">
      The Python Program:
      <br />
      The program that pretended you were a Pokemon trainer who had to choose
      where to step in the wild grass. Depending on what you picked, a single
      Pokemon would be drawn out on the screen.
    </p>
    <p>
      I dove into the Interactive Multimedia and Design program at Carleton
      University seeking to join my passions for design and programming. When I
      came across web development, I decided to deepen my knowledge by
      completing the Carleton Coding Bootcamp during my undergrad.
    </p>
    <p>
      I'm confident to say that my background in design has made me a
      well-rounded developer; I'm very conscious about the user experience and
      seek solutions that would be easy for other developers to build onto. I'm
      a team player all around!
    </p>
  </>
);

const { professionalExperience, recentWork, technicalSkills } = resumeContent;

export const preview = {
  professionalExperience,
  recentWork,
  technicalSkills,
};
