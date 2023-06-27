import React from "react";

import displayImg from "./survivalOfTheFittest_display.png";
import {
  cover,
  page1,
  page2,
  coverSketch,
  page1Sketch,
  page2Sketch,
} from "./images";

import { GRAPHIC_DESIGN_ILLUSTRATION_SECTION } from "../../tags";
import { PHOTOSHOP_TECH, WACOM_TABLET_TECH } from "../graphicIllustration_tech";

const { ILLUSTRATION_TAG } = GRAPHIC_DESIGN_ILLUSTRATION_SECTION.tags;

export const survivalOfTheFittest = {
  title: "Survival of the Fittest",
  infoPage: "/survival-of-the-fittest",
  tagline:
    'A comic book inspired by the biblical story "The Parable of the Good Samaritan"',
  img: displayImg,
  images: [cover, page1, page2],
  tags: [ILLUSTRATION_TAG],
  description: (
    <>
      <p>
        In "The Parable of the Good Samaritan" (Luke 10:25-37), a man is left
        for dead after being robbed and beaten. The typical characters that one
        would expect to save the man (a priest, a Levite - a member of the
        Hebrew tribe of Levi, which was created with the purpose of serving in
        the Jewish Temple) decide to ignore him. Instead, a Samaritan helps the
        man (though Samaritans share the same roots of the Mosaic religion as
        the Jews, the Jews shunned Samaritans for their mixture of paganism
        within their beliefs).
      </p>
      <p>
        Survival of the Fittest focuses on this barrier between two groups of
        the same root and condenses it into the relationship of an overbearing
        father and an abandoned son. When one is in need, the other needs to see
        past their differences in order to show mercy similar to that of the
        Samaritan.
      </p>
    </>
  ),
  additionalSections: [
    {
      title: "The Story and Design",
      description: (
        <>
          <p>
            To keep the colour scheme simple while keeping the style dramatic, a
            complimentary colour scheme of yellow and purple was used.
          </p>
          <p>
            In this comic, the yellow represents warmth and comfort, while the
            purple represents loneliness or emptiness. When the main character
            has a flashback, it is dipped in a desaturated red tone, which
            continues the idea of warmth, but then quickly turns into
            aggression.
          </p>
          <p>
            The black lines and misshapen panels also add to the comic's sense
            of drama.
          </p>
        </>
      ),
    },
    {
      title: "The Process",
      description: (
        <>
          <p>
            The characters were designed to have distinctive differences: one
            being the stereotypical definition of strong, and one being the
            stereotypical definition of weak.
          </p>
          <p>
            I chose these opposing characteristics to show irony. As we see in
            the story, the outwardly strong character is seen as emotionally
            weak and the outwardly weak character is seen as emotionally strong.
          </p>
          <p>
            To convey these characteristics in the characters, the father
            physically appears strong and wields a large sword (a weapon used in
            the thick of battle), while the son is much smaller in stature and
            only wields a bow and arrow (a weapon used further away from the
            action).
          </p>
        </>
      ),
      images: [coverSketch, page1Sketch, page2Sketch],
    },
  ],
  technology: [
    {
      icon: "",
      title: "Software",
      items: [PHOTOSHOP_TECH],
    },
    {
      icon: "",
      title: "Hardware",
      items: [WACOM_TABLET_TECH],
    },
  ],
};
