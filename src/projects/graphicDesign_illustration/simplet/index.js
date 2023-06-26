import React from "react";

import displayImg from "./simplet_display.png";
import {
  homeMockup,
  monthMockup,
  weekMockup,
  dayMockup,
  originalHome,
  weekMonthIterations,
  dayIterations,
} from "./images";

import { GRAPHIC_DESIGN_ILLUSTRATION_SECTION } from "../../tags";
import { ILLUSTRATOR_TECH } from "../graphicIllustration_tech";

const { APP_DESIGN_TAG } = GRAPHIC_DESIGN_ILLUSTRATION_SECTION.tags;

export const simplet = {
  title: "Simplet",
  infoPage: "/simplet",
  tagline:
    "An app concept for a student calendar app focused on progress-tracking and goal setting",
  img: displayImg,
  tags: [APP_DESIGN_TAG],
  description: (
    <>
      <p>
        The main component of the App is the "Project" feature, which is a group
        of tasks or short-term goals that a student can set for each assignment.
      </p>
      <p>
        As they complete these tasks and mark them off on the app, their
        progress bar for the assignment or project increases. In doing so, they
        can break down the assignment into a step-by-step plan.
      </p>
      <p>
        Other features:
        <ul>
          <li>Student collaboration on projects by assigning tasks</li>
          <li>Class schedule sharing</li>
          <li>Class colour coding</li>
          <li>Task or Event categories to colour code similar items</li>
        </ul>
      </p>
    </>
  ),
  additionalSections: [
    {
      title: "The Design",
      description: (
        <>
          <p>
            As users add on more items to a calendar app, the layout can get
            cluttered. To avoid this, all sections are organized by moveable
            tabs, which can be expanded or hidden. Additionally, the Simplet app
            relies heavily on colour coding as markers to represent multiple
            items at a time.
          </p>
        </>
      ),
      images: [homeMockup, monthMockup, weekMockup, dayMockup],
    },
    {
      title: "The Process",
      description: (
        <>
          <p>
            I completed the original design in October 2017 as part of an
            Introduction to Multimedia class (Interactive Multimedia and Design
            program at Carleton), where rough sketches for four screens and one
            digital mockup was required.
          </p>
          <p>
            I revamped the design in December 2018 for a more polished look and
            added three digital mockups based on the previous rough designs.
          </p>
        </>
      ),
      images: [originalHome, weekMonthIterations, dayIterations],
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
