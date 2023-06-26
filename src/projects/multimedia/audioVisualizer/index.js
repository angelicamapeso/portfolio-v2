import React from "react";

import displayImg from "./audioVisualizer_display.png";
import {
  singleCircleSequence,
  doubleCircleSequence,
  tripleCircleSequence,
  quadrupleCircleSequence,
  debugScreen,
  roughSketches,
} from "./images";

import { MULTIMEDIA_SECTION } from "../../tags";
const { C2PLUS_TAG } = MULTIMEDIA_SECTION.tags;

export const audioVisualizer = {
  title: "Audio Visualizer",
  infoPage: "/audio-visualizer",
  youtubeEmbedID: "trr4GsEHfD0",
  repo: "https://github.com/angelicamapeso/IMD3005AudioVisualizer",
  tagline:
    "A program that uses the frequencies and beats of a song to power an animation",
  img: displayImg,
  tags: [C2PLUS_TAG],
  description: (
    <>
      <p>
        The Audio Visualizer was created for upbeat music, taking advantage of
        heavy bass and separate tones to create an exciting atmosphere. The
        program uses an Audio Analysis Library called ofxFft and OpenFrameworks.
      </p>
      <p>
        Originally programmed to Blackpink's “Ddu-du-ddu-du” for a Sensor-Based
        Interaction class (Interactive Multimedia and Design program at Carleton
        University), the full experience features a changing background from
        black to pink every time the group's name is shouted out.
      </p>
    </>
  ),
  additionalSections: [
    {
      title: "The Design",
      description: (
        <>
          <p>
            For the animation to gradually get more intense, the design cycles
            through different compositions of circles, starting with a singular
            circle to a rotating display of four. Further movement of these
            elements on screen is dictated by the bass.
          </p>
          <p>
            The circles are typically linked to higher frequencies while the
            squares are typically linked to the drums or the bass.
          </p>
        </>
      ),
      images: [
        singleCircleSequence,
        doubleCircleSequence,
        tripleCircleSequence,
        quadrupleCircleSequence,
      ],
    },
    {
      title: "The Process",
      description: (
        <>
          <p>
            Originally, the design of the Audio Visualizer was going to be
            separate coded animations for each verse. However, this got very
            time-consuming as each part would have to look different and
            increase in energy.
          </p>
          <p>
            The new animations take an automated approach, consisting of
            customizable animation functions that can be combined to make up
            each verse. To colour and resize the animations, a "Tone" class was
            made to store frequencies and their assigned colours. These were
            then used as inputs for each animation function.
          </p>
        </>
      ),
      images: [debugScreen, roughSketches],
    },
  ],
  technology: [
    {
      icon: "fas fa-paper-plane",
      title: "Framework",
      items: [
        {
          name: "OpenFrameworks",
          link: "https://openframeworks.cc/",
        },
      ],
    },
    {
      icon: "fas fa-paper-plane",
      title: "Library",
      items: [
        {
          name: "ofxFft",
          link: "https://github.com/kylemcdonald/ofxFft",
        },
      ],
    },
  ],
};
